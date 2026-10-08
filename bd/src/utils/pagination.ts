import { z } from 'zod';

import type { PaginationMeta } from '../types/index.js';

import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from '../config/constants.js';

export type ListQuery = z.infer<ReturnType<typeof listQuerySchema>>;

export function buildPaginationMeta(
  total: number,
  query: Pick<ListQuery, 'page' | 'pageSize'>,
): PaginationMeta {
  const totalPages = Math.max(1, Math.ceil(total / query.pageSize));
  return {
    hasNext: query.page < totalPages,
    hasPrev: query.page > 1,
    page: query.page,
    pageSize: query.pageSize,
    total,
    totalPages,
  };
}

/**
 * Shared pagination/sorting/filtering query schema. `allowedSortFields` is
 * per-resource: pass the list of columns the endpoint accepts.
 */
export function listQuerySchema(allowedSortFields: readonly string[], fallbackSort: string) {
  return z.object({
    page: z.coerce.number().int().min(1).default(1),
    pageSize: z.coerce.number().int().min(1).max(MAX_PAGE_SIZE).default(DEFAULT_PAGE_SIZE),
    search: z.string().trim().max(100).optional(),
    sortBy: z
      .string()
      .trim()
      .refine((value) => allowedSortFields.includes(value), {
        message: `sortBy must be one of: ${allowedSortFields.join(', ')}`,
      })
      .default(fallbackSort),
    sortOrder: z.enum(['asc', 'desc']).default('desc'),
  });
}
