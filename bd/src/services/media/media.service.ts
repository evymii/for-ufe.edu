import type { Prisma } from '../../generated/prisma/client.js';

import { env } from '../../config/env.js';
import { ApiError } from '../../lib/ApiError.js';
import { logger } from '../../lib/logger.js';
import { prisma } from '../../lib/prisma.js';
import { deleteImage, uploadImage } from './storage.service.js';

/** Fields safe to return to clients. */
const MEDIA_SELECT = {
  altText: true,
  createdAt: true,
  folder: true,
  height: true,
  id: true,
  mime: true,
  provider: true,
  publicId: true,
  sizeBytes: true,
  updatedAt: true,
  url: true,
  width: true,
} satisfies Prisma.MediaSelect;

export async function listMedia(query: { limit: number; offset: number }) {
  const [total, items] = await prisma.$transaction([
    prisma.media.count(),
    prisma.media.findMany({
      orderBy: { createdAt: 'desc' },
      select: { ...MEDIA_SELECT, uploader: { select: { email: true } } },
      skip: query.offset,
      take: query.limit,
    }),
  ]);
  return {
    items: items.map(({ uploader, ...item }) => ({ ...item, uploadedBy: uploader?.email ?? null })),
    pagination: { limit: query.limit, offset: query.offset, total },
  };
}

/**
 * Deletes the DB row, then the stored asset. A failed asset deletion is
 * logged and REPORTED (assetDeleted: false) — never silently orphaned.
 */
export async function removeMedia(id: string): Promise<{ assetDeleted: boolean; id: string }> {
  const existing = await prisma.media.findUnique({
    select: { publicId: true },
    where: { id },
  });
  if (!existing) {
    throw ApiError.notFound('Media not found');
  }

  await prisma.media.delete({ where: { id } });

  let assetDeleted = true;
  try {
    await deleteImage(existing.publicId);
  } catch (error) {
    assetDeleted = false;
    logger.error(
      { err: error, publicId: existing.publicId },
      'Cloudinary delete failed — asset is orphaned, remove it in the dashboard',
    );
  }
  return { assetDeleted, id };
}

export async function updateMediaAltText(id: string, altText: string) {
  const existing = await prisma.media.findUnique({ select: { id: true }, where: { id } });
  if (!existing) {
    throw ApiError.notFound('Media not found');
  }
  return prisma.media.update({ data: { altText }, select: MEDIA_SELECT, where: { id } });
}

export async function uploadMedia(input: {
  adminId: string;
  altText?: string | undefined;
  buffer: Buffer;
  folder: string;
}) {
  const stored = await uploadImage(input.buffer, input.folder);

  try {
    return await prisma.media.create({
      data: {
        altText: input.altText ?? null,
        folder: input.folder,
        height: stored.height,
        mime: stored.mime,
        provider: env.STORAGE_PROVIDER,
        publicId: stored.publicId,
        sizeBytes: stored.bytes,
        uploadedBy: input.adminId,
        url: stored.url,
        width: stored.width,
      },
      select: MEDIA_SELECT,
    });
  } catch (error) {
    // The DB write failed — remove the just-uploaded asset so no orphan grows.
    await deleteImage(stored.publicId).catch(() => undefined);
    throw error;
  }
}
