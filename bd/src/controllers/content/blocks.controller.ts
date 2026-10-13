import type { Request, Response } from 'express';

import type { ContentHistoryQuery } from '../../validators/content/blocks.validators.js';

import { ApiError } from '../../lib/ApiError.js';
import { startContentListener, subscribeContentEvents } from '../../lib/content-events.js';
import { openSseStream, writeSseEvent } from '../../lib/sse.js';
import * as blocksService from '../../services/content/blocks.service.js';
import { ok } from '../../utils/http.js';

/**
 * Content-blocks HTTP surface: public reads + SSE, ADMIN-only writes. All
 * business logic (sanitizing, history, notify) lives in the service.
 */

export async function ensureBlocks(req: Request, res: Response): Promise<void> {
  const admin = requireUser(req);
  const { page } = req.params as { page: string };
  const createdCount = await blocksService.ensureBlocks({ ...req.body, adminId: admin.id, page });
  ok(res, { createdCount });
}

export async function getBlockHistory(req: Request, res: Response): Promise<void> {
  requireUser(req);
  const { page } = req.params as { page: string };
  const query = req.query as unknown as ContentHistoryQuery;
  const result = await blocksService.getBlockHistory({ ...query, page });
  ok(res, result);
}

export async function getPageBlocks(req: Request, res: Response): Promise<void> {
  const { page } = req.params as { page: string };
  const { locale } = req.query as { locale: string };
  const blocks = await blocksService.getPageBlocks(page, locale);
  ok(res, { blocks, locale, page });
}

/** Admin: every page that has blocks, with counts and last-edit time. */
export async function listContentPages(_req: Request, res: Response): Promise<void> {
  ok(res, { pages: await blocksService.getContentPagesOverview() });
}

/** Admin: per-block metadata for the page editor (type, editor, timestamps). */
export async function listPageBlocks(req: Request, res: Response): Promise<void> {
  requireUser(req);
  const { page } = req.params as { page: string };
  const { locale } = req.query as { locale: string };
  ok(res, await blocksService.listPageBlocksWithMeta(page, locale));
}

export async function putBlock(req: Request, res: Response): Promise<void> {
  const admin = requireUser(req);
  const { key, page } = req.params as { key: string; page: string };
  const result = await blocksService.putBlock({ ...req.body, adminId: admin.id, key, page });
  ok(res, result);
}

/** Public SSE stream of content_changed events for one page+locale. */
export function streamPageBlocks(req: Request, res: Response): void {
  const { page } = req.params as { page: string };
  const { locale } = req.query as { locale: string };

  openSseStream(req, res);
  writeSseEvent(res, 'connected', { at: new Date().toISOString(), locale, page });

  const unsubscribe = subscribeContentEvents((event) => {
    if (event.page === page && event.locale === locale) {
      writeSseEvent(res, 'content_changed', event);
    }
  });
  req.on('close', unsubscribe);

  // Fire-and-forget: failures surface through the hub's reconnect logic.
  void startContentListener().catch(() => undefined);
}

function requireUser(req: Request) {
  if (!req.user) {
    throw ApiError.unauthorized('Authentication required');
  }
  return req.user;
}
