import { Router } from 'express';

import { asyncHandler } from '../lib/asyncHandler.js';
import { logger } from '../lib/logger.js';
import { prisma } from '../lib/prisma.js';

export const healthRouter = Router();

/** Liveness: is the process up. No DB touch. */
healthRouter.get('/', (_req, res) => {
  res.json({ data: { status: 'ok', uptimeSeconds: Math.round(process.uptime()) }, success: true });
});

/** Readiness: can we actually serve traffic (DB reachable)? */
healthRouter.get(
  '/ready',
  asyncHandler(async (_req, res) => {
    try {
      await prisma.$queryRaw`SELECT 1`;
    } catch (error) {
      logger.error({ err: error }, 'Readiness check failed — database unreachable');
      res.status(503).json({
        error: { code: 'SERVICE_UNAVAILABLE', message: 'Database is not ready' },
        success: false,
      });
      return;
    }
    res.json({ data: { database: 'up', status: 'ok' }, success: true });
  }),
);
