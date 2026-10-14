import type { Request, Response } from 'express';

import { Router } from 'express';

import { asyncHandler } from '../../lib/asyncHandler.js';
import { ok } from '../../utils/http.js';

/**
 * Shop-orders surface — STUB. The order store is not modelled yet; this
 * keeps the API bootable and answers the admin console's reads with an
 * empty list until the real implementation lands. Replace me.
 */

export const adminOrdersRouter = Router();

adminOrdersRouter.get(
  '/',
  asyncHandler(async (_req: Request, res: Response) => {
    ok(res, { items: [] });
  }),
);

adminOrdersRouter.patch(
  '/:id/status',
  asyncHandler(async (_req: Request, res: Response) => {
    res.status(501).json({
      error: { code: 'NOT_IMPLEMENTED', message: 'Orders are not wired yet' },
      success: false,
    });
  }),
);

adminOrdersRouter.delete(
  '/:id',
  asyncHandler(async (_req: Request, res: Response) => {
    res.status(501).json({
      error: { code: 'NOT_IMPLEMENTED', message: 'Orders are not wired yet' },
      success: false,
    });
  }),
);
