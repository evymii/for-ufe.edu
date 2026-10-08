import type { Request, Response } from 'express';

import { ApiError } from '../../lib/ApiError.js';
import { prisma } from '../../lib/prisma.js';
import { compact } from '../../utils/content-payloads.js';
import { ok } from '../../utils/http.js';

/** Standings (хүснэгт), partners (ивээн тэтгэгчид) and media albums (галерей). */

export async function createAlbum(req: Request, res: Response): Promise<void> {
  const album = await prisma.mediaAlbum.create({ data: compact(req.body) });
  ok(res, { album }, 201);
}

export async function createPartner(req: Request, res: Response): Promise<void> {
  const partner = await prisma.partner.create({ data: compact(req.body) });
  ok(res, { partner }, 201);
}

export async function createStanding(req: Request, res: Response): Promise<void> {
  const row = await prisma.standingRow.create({ data: compact(req.body) });
  ok(res, { row }, 201);
}

export async function deleteAlbum(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  await prisma.mediaAlbum.delete({ where: { id } });
  ok(res, { deleted: true });
}

export async function deletePartner(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  await prisma.partner.delete({ where: { id } });
  ok(res, { deleted: true });
}

export async function deleteStanding(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  await prisma.standingRow.delete({ where: { id } });
  ok(res, { deleted: true });
}

export async function getAlbumBySlug(req: Request, res: Response): Promise<void> {
  const { slug } = req.params as unknown as { slug: string };
  const album = await prisma.mediaAlbum.findFirst({
    where: { isPublished: true, slug },
  });
  if (!album) {
    throw ApiError.notFound('Album not found');
  }
  ok(res, { album });
}

// ── Media albums ─────────────────────────────────────────────────────────────
export async function listAlbums(_req: Request, res: Response): Promise<void> {
  const items = await prisma.mediaAlbum.findMany({
    orderBy: { sortOrder: 'asc' },
    where: { isPublished: true },
  });
  ok(res, { items });
}

// ── Partners ─────────────────────────────────────────────────────────────────
export async function listPartners(_req: Request, res: Response): Promise<void> {
  const items = await prisma.partner.findMany({
    orderBy: { sortOrder: 'asc' },
    where: { isVisible: true },
  });
  ok(res, { items });
}

// ── Standings ────────────────────────────────────────────────────────────────
export async function listStandings(_req: Request, res: Response): Promise<void> {
  const items = await prisma.standingRow.findMany({
    orderBy: [{ sortOrder: 'asc' }, { wins: 'desc' }],
    where: { isCurrent: true },
  });
  ok(res, { items });
}

export async function updateAlbum(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  const album = await prisma.mediaAlbum.update({
    data: compact(req.body),
    where: { id },
  });
  ok(res, { album });
}

export async function updatePartner(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  const partner = await prisma.partner.update({
    data: compact(req.body),
    where: { id },
  });
  ok(res, { partner });
}

export async function updateStanding(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  const row = await prisma.standingRow.update({
    data: compact(req.body),
    where: { id },
  });
  ok(res, { row });
}
