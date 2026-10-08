import type { Response } from 'express';

import { getStats } from '../../services/admin/stats.service.js';
import { ok } from '../../utils/http.js';

export async function getAdminStats(_req: unknown, res: Response): Promise<void> {
  const stats = await getStats();
  ok(res, stats);
}
