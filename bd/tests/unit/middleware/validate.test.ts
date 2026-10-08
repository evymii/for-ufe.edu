import type { NextFunction, Request, Response } from 'express';

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { z } from 'zod';
import { ZodError } from 'zod';

import { validate } from '../../../src/middleware/validate.js';

function buildReq(overrides: Partial<Request> = {}): Request {
  return { body: {}, headers: {}, params: {}, query: {}, ...overrides } as unknown as Request;
}

function buildRes(): Response {
  return {} as Response;
}

describe('validate middleware', () => {
  let next: NextFunction;

  beforeEach(() => {
    next = vi.fn();
  });

  const bodySchema = z.object({ name: z.string().min(3) });

  it('replaces req.body with the parsed value on success', () => {
    const req = buildReq({ body: { name: '  Ada  ' } });
    validate({ body: z.object({ name: z.string().transform((v) => v.trim()) }) })(
      req,
      buildRes(),
      next,
    );

    expect(req.body).toEqual({ name: 'Ada' });
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith();
  });

  it('rejects an invalid body with a ZodError', () => {
    const req = buildReq({ body: { name: 'x' } });
    validate({ body: bodySchema })(req, buildRes(), next);

    expect(next).toHaveBeenCalledTimes(1);
    const error = vi.mocked(next).mock.calls[0]?.[0];
    expect(error).toBeInstanceOf(ZodError);
  });

  it('parses and replaces req.query with coercion and defaults', () => {
    const querySchema = z.object({
      includeDeleted: z.coerce.boolean().default(false),
      page: z.coerce.number().int().min(1).default(1),
    });
    const req = buildReq({ query: { page: '3' } as unknown as Request['query'] });
    validate({ query: querySchema })(req, buildRes(), next);

    expect(req.query).toEqual({ includeDeleted: false, page: 3 });
    expect(next).toHaveBeenCalledWith();
  });

  it('parses and replaces req.params', () => {
    const req = buildReq({ params: { id: 'c0ffee00-0000-4000-8000-000000000000' } });
    validate({ params: z.object({ id: z.uuid() }) })(req, buildRes(), next);

    expect(req.params).toEqual({ id: 'c0ffee00-0000-4000-8000-000000000000' });
    expect(next).toHaveBeenCalledWith();
  });

  it('validates body, query and params together and fails on the first error', () => {
    const req = buildReq({
      body: { name: 'long enough' },
      params: {},
      query: { page: '0' } as unknown as Request['query'],
    });
    validate({
      body: bodySchema,
      params: z.object({}).optional(),
      query: z.object({ page: z.coerce.number().int().min(1) }),
    })(req, buildRes(), next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(vi.mocked(next).mock.calls[0]?.[0]).toBeInstanceOf(ZodError);
  });
});
