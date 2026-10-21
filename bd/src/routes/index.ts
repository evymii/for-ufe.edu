import { Router } from 'express';
import { z } from 'zod';

import * as liveGames from '../controllers/live-games.controller.js';
import { asyncHandler } from '../lib/asyncHandler.js';
import { authenticate } from '../middleware/authenticate.js';
import { requireRole } from '../middleware/requireRole.js';
import { validate } from '../middleware/validate.js';
import { idParamSchema } from '../validators/shared.js';
import { adminRouter } from './admin/index.js';
import { contentRouter } from './content/content.routes.js';
import { userRouter } from './user/index.js';

/** Mounted at /api/v1 in app.ts. User, admin and content surfaces stay separate. */
export const apiRouter = Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/admin', adminRouter);
apiRouter.use('/content', contentRouter);

const liveAdmin = [authenticate, requireRole('ADMIN')] as const;
const actionSchema = z
  .object({
    amount: z.number().int().min(-300).max(300).optional(),
    period: z.number().int().min(1).max(4).optional(),
    playerIds: z.array(z.string().min(1)).max(5).optional(),
    points: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
    running: z.boolean().optional(),
    seconds: z.number().int().min(0).max(720).optional(),
    side: z.enum(['team', 'opponent']).optional(),
    type: z.enum([
      'score',
      'adjust_score',
      'foul',
      'timeout',
      'clock',
      'period',
      'lineup',
      'halftime',
      'start',
      'end',
      'undo',
    ]),
  })
  .superRefine((value, ctx) => {
    if (value.type === 'score' && (!value.side || !value.points))
      ctx.addIssue({
        code: 'custom',
        message: 'Score actions require side and points',
        path: ['side'],
      });
    if (value.type === 'adjust_score' && (!value.side || value.amount === undefined))
      ctx.addIssue({
        code: 'custom',
        message: 'Adjustments require side and amount',
        path: ['side'],
      });
    if (value.type === 'timeout' && (!value.side || (value.amount !== 1 && value.amount !== -1)))
      ctx.addIssue({
        code: 'custom',
        message: 'Timeout actions require a side and +/-1 amount',
        path: ['amount'],
      });
    if (value.type === 'foul' && (!value.side || (value.amount !== 1 && value.amount !== -1)))
      ctx.addIssue({
        code: 'custom',
        message: 'Foul actions require a side and +/-1 amount',
        path: ['amount'],
      });
    if (value.type === 'clock' && value.running === undefined)
      ctx.addIssue({ code: 'custom', message: 'Clock actions require running', path: ['running'] });
    if (value.type === 'period' && value.period === undefined)
      ctx.addIssue({ code: 'custom', message: 'Period actions require period', path: ['period'] });
    if (value.type === 'lineup' && !value.playerIds)
      ctx.addIssue({
        code: 'custom',
        message: 'Lineup actions require playerIds',
        path: ['playerIds'],
      });
  });
apiRouter.get(
  '/live-games/:id',
  validate({ params: idParamSchema }),
  asyncHandler(liveGames.getState),
);
apiRouter.get('/live-games/:id/stream', validate({ params: idParamSchema }), liveGames.stream);
apiRouter.get(
  '/live-games/:id/events',
  ...liveAdmin,
  validate({ params: idParamSchema }),
  asyncHandler(liveGames.listEvents),
);
apiRouter.post(
  '/live-games/:id/ensure',
  ...liveAdmin,
  validate({ params: idParamSchema }),
  asyncHandler(liveGames.ensureState),
);
apiRouter.post(
  '/live-games/:id/action',
  ...liveAdmin,
  validate({ body: actionSchema, params: idParamSchema }),
  asyncHandler(liveGames.action),
);
