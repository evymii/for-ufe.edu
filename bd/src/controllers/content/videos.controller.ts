import type { Request, Response } from 'express';

import type { ListVideosQuery } from '../../validators/content/content.validators.js';

import { ApiError } from '../../lib/ApiError.js';
import { prisma } from '../../lib/prisma.js';
import { compact } from '../../utils/content-payloads.js';
import { ok } from '../../utils/http.js';

/** Video library — featured player + category grid on /videos. */

export async function createVideo(req: Request, res: Response): Promise<void> {
  const video = await prisma.video.create({ data: compact(req.body) });
  ok(res, { video }, 201);
}

export async function deleteVideo(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  await prisma.video.delete({ where: { id } });
  ok(res, { deleted: true });
}

export async function getVideoBySlug(req: Request, res: Response): Promise<void> {
  const { slug } = req.params as unknown as { slug: string };
  const video = await prisma.video.findFirst({
    where: { isPublished: true, slug },
  });
  if (!video) {
    throw ApiError.notFound('Video not found');
  }
  ok(res, { video });
}

export async function listVideos(req: Request, res: Response): Promise<void> {
  const query = req.query as unknown as ListVideosQuery;
  const items = await prisma.video.findMany({
    orderBy: [{ sortOrder: 'asc' }, { publishedAt: 'desc' }],
    take: query.limit ?? 100,
    where: {
      isPublished: true,
      ...(query.category ? { category: query.category } : {}),
      ...(query.featured ? { isFeatured: true } : {}),
    },
  });
  ok(res, { items });
}

export async function updateVideo(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  const video = await prisma.video.update({
    data: compact(req.body),
    where: { id },
  });
  ok(res, { video });
}
