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
  // month=YYYY-MM narrows to that calendar month (UB evenings, UTC+8).
  const monthStart = query.month ? new Date(`${query.month}-01T00:00:00.000Z`) : null;
  const monthEnd = monthStart ? new Date(monthStart.getTime() + 32 * 24 * 60 * 60 * 1000) : null;
  if (monthEnd) monthEnd.setUTCDate(1);
  const items = await prisma.game.findMany({
    orderBy: { tipsAt: direction },
    take: query.limit ?? 100,
    where: {
      ...(query.status ? { status: query.status } : {}),
      ...(monthStart && monthEnd ? { tipsAt: { gte: monthStart, lt: monthEnd } } : {}),
    },
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
