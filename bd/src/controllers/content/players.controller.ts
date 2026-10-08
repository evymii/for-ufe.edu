import type { Request, Response } from 'express';

import type { ListPlayersQuery } from '../../validators/content/content.validators.js';

import { ApiError } from '../../lib/ApiError.js';
import { prisma } from '../../lib/prisma.js';
import { compact } from '../../utils/content-payloads.js';
import { ok } from '../../utils/http.js';

/** Roster (тоглогчид, дасгалжуулагчид). Public reads: isPublic only. */

export async function createPlayer(req: Request, res: Response): Promise<void> {
  const player = await prisma.player.create({ data: compact(req.body) });
  ok(res, { player }, 201);
}

export async function deletePlayer(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  await prisma.player.delete({ where: { id } });
  ok(res, { deleted: true });
}

export async function getPlayerBySlug(req: Request, res: Response): Promise<void> {
  const { slug } = req.params as unknown as { slug: string };
  const player = await prisma.player.findFirst({ where: { isPublic: true, slug } });
  if (!player) {
    throw ApiError.notFound('Player not found');
  }
  ok(res, { player });
}

export async function listPlayers(req: Request, res: Response): Promise<void> {
  const query = req.query as unknown as ListPlayersQuery;
  const items = await prisma.player.findMany({
    orderBy: [{ sortOrder: 'asc' }, { number: 'asc' }],
    where: {
      isPublic: true,
      ...(query.role ? { role: query.role } : {}),
    },
  });
  ok(res, { items });
}

export async function updatePlayer(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  const player = await prisma.player.update({
    data: compact(req.body),
    where: { id },
  });
  ok(res, { player });
}
