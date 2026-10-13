import { Router } from 'express';

import * as mediaController from '../../controllers/admin/media.controller.js';
import { asyncHandler } from '../../lib/asyncHandler.js';
import { uploadLimiter } from '../../middleware/rateLimiter.js';
import { uploadSingleImage } from '../../middleware/upload.js';
import { validate } from '../../middleware/validate.js';
import {
  listMediaQuerySchema,
  mediaAltPatchSchema,
  mediaIdParamSchema,
} from '../../validators/admin/media.validators.js';

/**
 * Media library, mounted at /api/v1/admin/media. Auth + ADMIN role are
 * enforced router-level by the admin router this is mounted into.
 */
export const adminMediaRouter = Router();

adminMediaRouter.get(
  '/',
  validate({ query: listMediaQuerySchema }),
  asyncHandler(mediaController.listMedia),
);

adminMediaRouter.post(
  '/',
  uploadLimiter,
  uploadSingleImage('image'),
  asyncHandler(mediaController.uploadMedia),
);

adminMediaRouter.patch(
  '/:id',
  validate({ body: mediaAltPatchSchema, params: mediaIdParamSchema }),
  asyncHandler(mediaController.updateMediaAltText),
);

adminMediaRouter.delete(
  '/:id',
  validate({ params: mediaIdParamSchema }),
  asyncHandler(mediaController.removeMedia),
);
