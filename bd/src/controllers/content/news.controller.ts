import type { Request, Response } from 'express';

import type { ListNewsQuery } from '../../validators/content/content.validators.js';

import { ApiError } from '../../lib/ApiError.js';
import { prisma } from '../../lib/prisma.js';
import { compact } from '../../utils/content-payloads.js';
import { ok } from '../../utils/http.js';

/**
 * Team news (мэдээ). Public reads are filtered to published posts; writes are
 * mounted behind ADMIN auth in the router, so controllers can hand validated
 * payloads straight to Prisma (compact() keeps absent PATCH keys untouched).
 */

export async function createNews(req: Request, res: Response): Promise<void> {
  const post = await prisma.newsPost.create({ data: compact(req.body) });
  ok(res, { post }, 201);
}

export async function deleteNews(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  await prisma.newsPost.delete({ where: { id } });
  ok(res, { deleted: true });
}

export async function getNewsBySlug(req: Request, res: Response): Promise<void> {
  const { slug } = req.params as unknown as { slug: string };
  const post = await prisma.newsPost.findFirst({ where: { isPublished: true, slug } });
  if (!post) {
    throw ApiError.notFound('News post not found');
  }
  ok(res, { post });
}

export async function listNews(req: Request, res: Response): Promise<void> {
  const query = req.query as unknown as ListNewsQuery;
  const items = await prisma.newsPost.findMany({
    orderBy: { publishedAt: 'desc' },
    take: query.limit ?? 50,
    where: {
      isPublished: true,
      ...(query.category ? { category: query.category } : {}),
      ...(query.featured === undefined ? {} : { isFeatured: query.featured }),
    },
  });
  ok(res, { items });
}

export async function updateNews(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  const post = await prisma.newsPost.update({
    data: compact(req.body),
    where: { id },
  });
  ok(res, { post });
}
