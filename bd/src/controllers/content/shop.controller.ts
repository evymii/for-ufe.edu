import type { Request, Response } from 'express';

import type { ListShopQuery } from '../../validators/content/content.validators.js';

import { prisma } from '../../lib/prisma.js';
import { wantsHiddenRows } from '../../middleware/optionalAuth.js';
import { compact } from '../../utils/content-payloads.js';
import { ok } from '../../utils/http.js';

/** Fan club shop catalogue — category tiles + product grid on /fan-club. */

export async function createShopProduct(req: Request, res: Response): Promise<void> {
  const product = await prisma.shopProduct.create({ data: compact(req.body) });
  ok(res, { product }, 201);
}

export async function deleteShopProduct(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  await prisma.shopProduct.delete({ where: { id } });
  ok(res, { deleted: true });
}

export async function listShopProducts(req: Request, res: Response): Promise<void> {
  const query = req.query as unknown as ListShopQuery;
  const items = await prisma.shopProduct.findMany({
    orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
    where: {
      ...(wantsHiddenRows(req, query) ? {} : { isVisible: true }),
      ...(query.category ? { category: query.category } : {}),
    },
  });
  ok(res, { items });
}

export async function updateShopProduct(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as { id: string };
  const product = await prisma.shopProduct.update({
    data: compact(req.body),
    where: { id },
  });
  ok(res, { product });
}
