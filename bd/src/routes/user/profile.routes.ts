import { Router } from 'express';

import * as profileController from '../../controllers/user/profile.controller.js';
import { asyncHandler } from '../../lib/asyncHandler.js';
import { validate } from '../../middleware/validate.js';
import { updateProfileSchema } from '../../validators/user/profile.validators.js';

export const profileRouter = Router();

profileRouter.get('/', asyncHandler(profileController.getProfile));

profileRouter.patch(
  '/',
  validate({ body: updateProfileSchema }),
  asyncHandler(profileController.updateProfile),
);
