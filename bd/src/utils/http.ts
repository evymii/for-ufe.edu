import type { Response } from 'express';

/** Standard success envelope: { success: true, data }. */
export function ok<T>(res: Response, data: T, status = 200): void {
  res.status(status).json({ data, success: true });
}
