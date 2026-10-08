import { Router } from 'express';

import { authenticate } from '../../middleware/authenticate.js';
import { requireRole } from '../../middleware/requireRole.js';
import { adminStatsRouter } from './stats.routes.js';
import { adminUsersRouter } from './users.routes.js';

const adminRouter = Router();

// Router-level guard: EVERY route mounted below requires an authenticated
// user whose ADMIN role is re-verified against the database. A new admin
// route added under this router can never be accidentally public.
adminRouter.use(authenticate, requireRole('ADMIN'));

adminRouter.use('/users', adminUsersRouter);
adminRouter.use('/stats', adminStatsRouter);

export { adminRouter };
