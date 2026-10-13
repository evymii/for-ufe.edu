import type { Request, Response } from 'express';

import type { NewsletterSubscribeInput } from '../../validators/content/content.validators.js';

import { prisma } from '../../lib/prisma.js';
import { ok } from '../../utils/http.js';

/**
 * Newsletter signups. The public subscribe endpoint is idempotent — a repeat
 * email returns success with alreadySubscribed: true rather than an error, so
 * the form never reveals whether an address is on the list.
 */

export async function deleteSubscriber(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  await prisma.newsletterSubscriber.delete({ where: { id } });
  ok(res, { deleted: true });
}

export async function listSubscribers(req: Request, res: Response): Promise<void> {
  const limit = Math.min(Number(req.query.limit) || 50, 200);
  const offset = Math.max(Number(req.query.offset) || 0, 0);
  const [total, items] = await prisma.$transaction([
    prisma.newsletterSubscriber.count(),
    prisma.newsletterSubscriber.findMany({
      orderBy: { createdAt: 'desc' },
      skip: offset,
      take: limit,
    }),
  ]);
  ok(res, { items, pagination: { limit, offset, total } });
}

export async function subscribeNewsletter(req: Request, res: Response): Promise<void> {
  const input = req.body as NewsletterSubscribeInput;
  try {
    await prisma.newsletterSubscriber.create({
      data: {
        email: input.email,
        firstName: input.firstName ?? null,
        interests: input.interests ?? [],
      },
    });
    ok(res, { subscribed: true }, 201);
  } catch (error) {
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'P2002') {
      ok(res, { alreadySubscribed: true, subscribed: true });
      return;
    }
    throw error;
  }
}
