import type { Request, Response } from 'express';

import type { CreateContactInput } from '../../validators/content/content.validators.js';

import { ApiError } from '../../lib/ApiError.js';
import { prisma } from '../../lib/prisma.js';
import { ok } from '../../utils/http.js';

/** Public contact inbox (холбоо барих): anyone may submit, only admins read. */

export async function deleteContact(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  const existing = await prisma.contactMessage.findUnique({ where: { id } });
  if (!existing) {
    throw ApiError.notFound('Message not found');
  }
  await prisma.contactMessage.delete({ where: { id } });
  ok(res, { deleted: true });
}

export async function listInbox(_req: Request, res: Response): Promise<void> {
  const [items, unread] = await Promise.all([
    prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' }, take: 100 }),
    prisma.contactMessage.count({ where: { isRead: false } }),
  ]);
  ok(res, { items, unread });
}

export async function markContactRead(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  const { isRead } = req.body as unknown as { isRead: boolean };
  const message = await prisma.contactMessage.update({
    data: { isRead },
    where: { id },
  });
  ok(res, { message });
}

export async function submitContact(req: Request, res: Response): Promise<void> {
  const input = req.body as unknown as CreateContactInput;
  await prisma.contactMessage.create({ data: input });
  ok(res, { received: true }, 201);
}
