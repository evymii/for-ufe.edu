import type { UploadApiResponse } from 'cloudinary';

import { v2 as cloudinary } from 'cloudinary';

import { MEDIA_MIME_ALLOWLIST } from '../../config/constants.js';
import { env } from '../../config/env.js';
import { ApiError } from '../../lib/ApiError.js';
import { logger } from '../../lib/logger.js';

cloudinary.config({
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  secure: true,
});

export interface StoredImage {
  bytes: number;
  height: null | number;
  mime: string;
  publicId: string;
  url: string;
  width: null | number;
}

export async function deleteImage(publicId: string): Promise<void> {
  requireConfigured();
  await cloudinary.uploader.destroy(publicId, { invalidate: true, resource_type: 'image' });
}

/**
 * The ONLY file that knows which storage provider we use. Swapping to R2 (or
 * anything else) later means rewriting this file alone — controllers,
 * services and routes only ever see uploadImage/deleteImage.
 */
export async function uploadImage(buffer: Buffer, subfolder: string): Promise<StoredImage> {
  requireConfigured();

  // Trust the bytes, never the client's MIME type or filename. SVG is
  // rejected implicitly: it is not in the allowlist (it can carry scripts).
  // Dynamic import works across both CommonJS (file-type v16) and ESM.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ft: any = await import('file-type');
  const detector = ft.fileTypeFromBuffer ?? ft.fromBuffer ?? ft.default?.fromBuffer;
  const detected = detector ? await detector(buffer) : null;

  if (!detected || !(MEDIA_MIME_ALLOWLIST as readonly string[]).includes(detected.mime)) {
    throw ApiError.badRequest(
      'Unsupported or invalid image file (allowed: JPEG, PNG, WebP, GIF, AVIF)',
    );
  }

  try {
    const result = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: `${env.CLOUDINARY_FOLDER}/${subfolder}`,
            overwrite: false,
            resource_type: 'image',
            unique_filename: true,
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

    return {
      bytes: result.bytes,
      height: result.height ?? null,
      mime: detected.mime,
      publicId: result.public_id,
      url: result.secure_url,
      width: result.width ?? null,
    };
  } catch (error) {
    // Provider-side failure (quota, network, auth): log details server-side,
    // surface only a safe message.
    if (error instanceof ApiError) throw error;
    const providerError = providerErrorDetails(error);
    logger.error({ err: providerError }, 'Cloudinary upload failed');
    throw ApiError.serviceUnavailable(
      `Image storage rejected the upload: ${providerError.message}`,
    );
  }
}

function providerErrorDetails(error: unknown): {
  httpCode?: number;
  message: string;
  name?: string;
} {
  if (error instanceof Error) {
    const withHttpCode = error as Error & { http_code?: unknown };
    return {
      httpCode: typeof withHttpCode.http_code === 'number' ? withHttpCode.http_code : undefined,
      message: error.message.slice(0, 300),
      name: error.name,
    };
  }

  if (typeof error === 'object' && error !== null) {
    const provider = error as {
      error?: { message?: unknown };
      http_code?: unknown;
      message?: unknown;
      name?: unknown;
    };
    return {
      httpCode: typeof provider.http_code === 'number' ? provider.http_code : undefined,
      message:
        typeof provider.message === 'string'
          ? provider.message.slice(0, 300)
          : typeof provider.error?.message === 'string'
            ? provider.error.message.slice(0, 300)
            : 'Unknown provider error',
      name: typeof provider.name === 'string' ? provider.name : undefined,
    };
  }

  return { message: 'Unknown provider error' };
}

function requireConfigured(): void {
  if (
    !env.storageConfigured ||
    !env.CLOUDINARY_CLOUD_NAME ||
    !env.CLOUDINARY_API_KEY ||
    !env.CLOUDINARY_API_SECRET ||
    !env.CLOUDINARY_FOLDER
  ) {
    logger.error(
      {
        apiKeyConfigured: Boolean(env.CLOUDINARY_API_KEY),
        apiSecretConfigured: Boolean(env.CLOUDINARY_API_SECRET),
        cloudNameConfigured: Boolean(env.CLOUDINARY_CLOUD_NAME),
        folderConfigured: Boolean(env.CLOUDINARY_FOLDER),
        provider: env.STORAGE_PROVIDER || null,
        storageConfigured: env.storageConfigured,
      },
      'Cloudinary storage is not fully configured',
    );
    throw ApiError.serviceUnavailable('Media storage is not configured on this server');
  }
}
