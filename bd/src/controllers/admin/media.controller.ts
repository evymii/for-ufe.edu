import type { Request, Response } from 'express';

import { ApiError } from '../../lib/ApiError.js';
import * as mediaService from '../../services/media/media.service.js';
import { ok } from '../../utils/http.js';
import { mediaUploadFieldsSchema } from '../../validators/admin/media.validators.js';

/**
 * Media library HTTP surface (admin-only, mounted at /api/v1/admin/media).
 * The binary handling lives in middleware/upload.ts + services/media; this
 * layer only maps HTTP to service calls.
 */

export async function listMedia(req: Request, res: Response): Promise<void> {
  const query = req.query as unknown as { limit: number; offset: number };
  ok(res, await mediaService.listMedia(query));
}

export async function removeMedia(req: Request, res: Response): Promise<void> {
  requireUser(req);
  const { id } = req.params as { id: string };
  const result = await mediaService.removeMedia(id);
  ok(res, result);
}

export async function updateMediaAltText(req: Request, res: Response): Promise<void> {
  requireUser(req);
  const { id } = req.params as { id: string };
  const { alt } = req.body as { alt: string };
  const media = await mediaService.updateMediaAltText(id, alt);
  ok(res, { media });
}

export async function uploadMedia(req: Request, res: Response): Promise<void> {
  const admin = requireUser(req);
  if (!req.file?.buffer) {
    throw ApiError.badRequest('An "image" file is required (multipart/form-data)');
  }
  // Text fields ride along the multipart body — validated here, not by the
  // JSON validate middleware.
  const fields = mediaUploadFieldsSchema.parse(req.body);

  const media = await mediaService.uploadMedia({
    adminId: admin.id,
    altText: fields.alt,
    buffer: req.file.buffer,
    folder: fields.folder,
  });
  ok(res, { media }, 201);
}

function requireUser(req: Request) {
  if (!req.user) {
    throw ApiError.unauthorized('Authentication required');
  }
  return req.user;
}
