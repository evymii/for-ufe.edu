import type { Request, Response } from 'express';

import type { ListExecutivesQuery } from '../../validators/content/content.validators.js';

import { prisma } from '../../lib/prisma.js';
import { wantsHiddenRows } from '../../middleware/optionalAuth.js';
import { compact } from '../../utils/content-payloads.js';
import { ok } from '../../utils/http.js';

/** Front office directory — executive cards + staff list, grouped by tab. */

export async function createExecutive(req: Request, res: Response): Promise<void> {
  const executive = await prisma.executive.create({ data: compact(req.body) });
  ok(res, { executive }, 201);
}

export async function deleteExecutive(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  await prisma.executive.delete({ where: { id } });
  ok(res, { deleted: true });
}

export async function listExecutives(req: Request, res: Response): Promise<void> {
  const query = req.query as unknown as ListExecutivesQuery;
  const items = await prisma.executive.findMany({
    orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
    where: {
      ...(wantsHiddenRows(req, query) ? {} : { isPublic: true }),
      ...(query.group ? { group: query.group } : {}),
    },
  });
  ok(res, { items });
}

export async function updateExecutive(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  const executive = await prisma.executive.update({
    data: compact(req.body),
    where: { id },
  });
  ok(res, { executive });
}
