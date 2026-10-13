import type { RequestHandler } from 'express';

import { Router } from 'express';

import * as blocks from '../../controllers/content/blocks.controller.js';
import { asyncHandler } from '../../lib/asyncHandler.js';
import { authenticate } from '../../middleware/authenticate.js';
import { requireRole } from '../../middleware/requireRole.js';
import { validate } from '../../middleware/validate.js';
import {
  contentBlockParamSchema,
  contentBlockPutSchema,
  contentBlocksEnsureSchema,
  contentHistoryQuerySchema,
  contentLocaleQuerySchema,
  contentPageParamSchema,
} from '../../validators/content/blocks.validators.js';

/**
 * Content-blocks surface (live-editable site text), mounted at
 * /api/v1/content/blocks. Public side only ever GETs; every write verb is
 * guarded by authenticate + requireRole('ADMIN') — the same resource path
 * serves both sides; the verb decides the auth.
 */
const adminWrite = [authenticate, requireRole('ADMIN')] as unknown as RequestHandler[];

export const blocksRouter = Router();

// Admin: overview of every page with block counts + last-edit time.
blocksRouter.get('/', ...adminWrite, asyncHandler(blocks.listContentPages));

// Admin: per-block metadata listing for the editor (type, editor, timestamps).
blocksRouter.get(
  '/:page/blocks',
  ...adminWrite,
  validate({ params: contentPageParamSchema, query: contentLocaleQuerySchema }),
  asyncHandler(blocks.listPageBlocks),
);

// Public: page values as { key: value } + the SSE live-update stream.
blocksRouter.get(
  '/:page/stream',
  validate({ params: contentPageParamSchema, query: contentLocaleQuerySchema }),
  blocks.streamPageBlocks,
);
blocksRouter.get(
  '/:page',
  validate({ params: contentPageParamSchema, query: contentLocaleQuerySchema }),
  asyncHandler(blocks.getPageBlocks),
);

// Admin: edit one key, register defaults for missing keys, inspect history.
blocksRouter.put(
  '/:page/:key',
  ...adminWrite,
  validate({ body: contentBlockPutSchema, params: contentBlockParamSchema }),
  asyncHandler(blocks.putBlock),
);
blocksRouter.post(
  '/:page/ensure',
  ...adminWrite,
  validate({ body: contentBlocksEnsureSchema, params: contentPageParamSchema }),
  asyncHandler(blocks.ensureBlocks),
);
blocksRouter.get(
  '/:page/history',
  ...adminWrite,
  validate({ params: contentPageParamSchema, query: contentHistoryQuerySchema }),
  asyncHandler(blocks.getBlockHistory),
);
