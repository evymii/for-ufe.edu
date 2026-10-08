import { describe, expect, it } from 'vitest';

import { USER_SORT_FIELDS } from '../../../src/config/constants.js';
import { buildPaginationMeta, listQuerySchema } from '../../../src/utils/pagination.js';

describe('listQuerySchema', () => {
  it('applies safe defaults for page, pageSize and sorting', () => {
    const parsed = listQuerySchema(USER_SORT_FIELDS, 'createdAt').parse({});

    expect(parsed).toEqual({
      page: 1,
      pageSize: 20,
      search: undefined,
      sortBy: 'createdAt',
      sortOrder: 'desc',
    });
  });

  it('coerces string query params and trims search', () => {
    const parsed = listQuerySchema(USER_SORT_FIELDS, 'createdAt').parse({
      page: '2',
      pageSize: '50',
      search: '  ada  ',
    });

    expect(parsed.page).toBe(2);
    expect(parsed.pageSize).toBe(50);
    expect(parsed.search).toBe('ada');
  });

  it('rejects an unknown sort field', () => {
    expect(() =>
      listQuerySchema(USER_SORT_FIELDS, 'createdAt').parse({ sortBy: 'passwordHash' }),
    ).toThrow();
  });

  it('rejects out-of-range pagination', () => {
    expect(() => listQuerySchema(USER_SORT_FIELDS, 'createdAt').parse({ page: '0' })).toThrow();
    expect(() =>
      listQuerySchema(USER_SORT_FIELDS, 'createdAt').parse({ pageSize: '1000' }),
    ).toThrow();
  });
});

describe('buildPaginationMeta', () => {
  it('computes totals and neighbour flags', () => {
    const meta = buildPaginationMeta(45, { page: 2, pageSize: 20 });

    expect(meta).toEqual({
      hasNext: true,
      hasPrev: true,
      page: 2,
      pageSize: 20,
      total: 45,
      totalPages: 3,
    });
  });

  it('always reports at least one page for empty results', () => {
    const meta = buildPaginationMeta(0, { page: 1, pageSize: 20 });

    expect(meta.totalPages).toBe(1);
    expect(meta.hasNext).toBe(false);
    expect(meta.hasPrev).toBe(false);
  });
});
