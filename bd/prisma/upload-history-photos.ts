import type { UploadApiResponse } from 'cloudinary';

import { v2 as cloudinary } from 'cloudinary';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { env } from '../src/config/env.js';
import { PrismaClient } from '../src/generated/prisma/client.js';

// Migration runs as a standalone process with its own client instance.
const prisma = new PrismaClient();

/**
 * One-off (but idempotent) migration of the /history archive from repo files
 * to Cloudinary: every image in fd/public/images/tuuh/<folder>/ is uploaded
 * under a deterministic public_id (`<root>/tuuh/<folder>/<name>`, overwrite
 * on) and gets a Media row plus a HistoryPhoto row, so the Cloudinary-backed
 * /history page starts with exactly the photos the filesystem version had.
 *
 * Run from bd/:  npx tsx prisma/upload-history-photos.ts
 */

const IMAGE_EXTENSION = /\.(avif|jpe?g|png|webp)$/i;
const ROOT = path.resolve(process.cwd(), '..', 'fd', 'public', 'images', 'tuuh');

async function main(): Promise<void> {
  cloudinary.config({
    api_key: env.CLOUDINARY_API_KEY,
    api_secret: env.CLOUDINARY_API_SECRET,
    cloud_name: env.CLOUDINARY_CLOUD_NAME,
    secure: true,
  });

  let folders: string[];
  try {
    folders = readdirSync(ROOT, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();
  } catch {
    console.error(`No archive folder at ${ROOT} — nothing to migrate.`);
    return;
  }

  let uploaded = 0;
  let unchanged = 0;
  for (const folder of folders) {
    const files = readdirSync(path.join(ROOT, folder))
      .filter((file) => IMAGE_EXTENSION.test(file))
      .sort();

    for (const [index, file] of files.entries()) {
      const publicId = `${env.CLOUDINARY_FOLDER}/tuuh/${folder}/${path.basename(file, path.extname(file))}`;
      const existing = await prisma.historyPhoto.findUnique({ where: { publicId } });
      if (existing) {
        unchanged += 1;
        continue;
      }

      const result = await uploadToCloudinary(
        readFileSync(path.join(ROOT, folder, file)),
        publicId,
      );
      console.log(`uploaded ${publicId} (${Math.round(result.bytes / 1024)} KB)`);

      // Media row first (the HistoryPhoto create flow resolves urls through
      // it), then the photo row itself.
      await prisma.media.upsert({
        create: {
          folder: 'tuuh',
          height: result.height ?? null,
          mime: `image/${result.format === 'jpg' ? 'jpeg' : result.format}`,
          provider: env.STORAGE_PROVIDER,
          publicId,
          sizeBytes: result.bytes,
          url: result.secure_url,
          width: result.width ?? null,
        },
        update: { url: result.secure_url },
        where: { publicId },
      });
      await prisma.historyPhoto.create({
        data: {
          folder,
          publicId,
          sortOrder: index,
          url: result.secure_url,
        },
      });
      uploaded += 1;
    }
  }

  console.log(`\nDone — ${uploaded} uploaded, ${unchanged} already present.`);
}

function uploadToCloudinary(buffer: Buffer, publicId: string): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          overwrite: true,
          public_id: publicId,
          resource_type: 'image',
          unique_filename: false,
        },
        (error, response) => {
          if (error || !response) {
            reject(error ?? new Error('Cloudinary returned an empty upload response'));
          } else {
            resolve(response);
          }
        },
      )
      .end(buffer);
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
