import type { Request, Response } from 'express';

import type { ListGamesQuery } from '../../validators/content/content.validators.js';

import { prisma } from '../../lib/prisma.js';
import { compact } from '../../utils/content-payloads.js';
import { ok } from '../../utils/http.js';

/** Schedule & results (хуваарь). Scheduled games list soonest-first,
 *  finished games most-recent-first. */

export async function createGame(req: Request, res: Response): Promise<void> {
  const game = await prisma.game.create({ data: compact(req.body) });
  ok(res, { game }, 201);
}

export async function deleteGame(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  await prisma.game.delete({ where: { id } });
  ok(res, { deleted: true });
}

export async function listGames(req: Request, res: Response): Promise<void> {
  const query = req.query as unknown as ListGamesQuery;
  const direction = query.status === 'FINAL' ? 'desc' : 'asc';
  const items = await prisma.game.findMany({
    orderBy: { tipsAt: direction },
    take: query.limit ?? 100,
    where: query.status ? { status: query.status } : {},
  });
  ok(res, { items });
}

export async function updateGame(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  const game = await prisma.game.update({
    data: compact(req.body),
    where: { id },
  });
  ok(res, { game });
}
