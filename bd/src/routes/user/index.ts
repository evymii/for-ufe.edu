import { Router } from 'express';

import { authenticate } from '../../middleware/authenticate.js';
import { authRouter } from './auth.routes.js';
import { profileRouter } from './profile.routes.js';

const userRouter = Router();

// Public auth endpoints (rate limited inside authRouter).
userRouter.use('/auth', authRouter);
// Everything else under /api/v1/user requires a valid access token.
userRouter.use('/profile', authenticate, profileRouter);

export { userRouter };
