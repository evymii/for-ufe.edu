import { Router } from 'express';

import * as statsController from '../../controllers/admin/stats.controller.js';
import { asyncHandler } from '../../lib/asyncHandler.js';

export const adminStatsRouter = Router();

adminStatsRouter.get('/', asyncHandler(statsController.getAdminStats));
