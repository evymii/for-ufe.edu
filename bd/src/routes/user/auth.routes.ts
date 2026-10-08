import { Router } from 'express';

import * as authController from '../../controllers/user/auth.controller.js';
import { asyncHandler } from '../../lib/asyncHandler.js';
import { authenticate } from '../../middleware/authenticate.js';
import { authLimiter } from '../../middleware/rateLimiter.js';
import { validate } from '../../middleware/validate.js';
import { loginSchema, registerSchema } from '../../validators/user/auth.validators.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  authLimiter,
  validate({ body: registerSchema }),
  asyncHandler(authController.register),
);

authRouter.post(
  '/login',
  authLimiter,
  validate({ body: loginSchema }),
  asyncHandler(authController.login),
);

authRouter.post('/refresh', authLimiter, asyncHandler(authController.refresh));

authRouter.post('/logout', asyncHandler(authController.logout));

authRouter.get('/me', authenticate, asyncHandler(authController.me));
