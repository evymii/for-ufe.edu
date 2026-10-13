import type { RequestHandler } from 'express';

import multer from 'multer';

import { env } from '../config/env.js';
import { ApiError } from '../lib/ApiError.js';

// Memory storage: the buffer is streamed to the storage provider and never
// touched on disk. Hard size cap — combined with the magic-byte check in the
// storage service this is the upload size/type gate.
const upload = multer({
  limits: { fileSize: env.MAX_UPLOAD_MB * 1024 * 1024 },
});

/** multer.single() with MulterErrors mapped to the API's error envelope. */
export function uploadSingleImage(field: string): RequestHandler {
  return (req, res, next) => {
    upload.single(field)(req, res, (error) => {
      if (!error) return next();
      if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
          return next(
            ApiError.payloadTooLarge(`File exceeds the ${env.MAX_UPLOAD_MB} MB upload limit`),
          );
        }
        if (error.code === 'LIMIT_UNEXPECTED_FILE') {
          return next(ApiError.badRequest(`Unexpected multipart field — use "${field}"`));
        }
        return next(ApiError.badRequest(`Upload rejected (${error.code})`));
      }
      return next(error);
    });
  };
}
