import type { RequestHandler } from 'express';
import type { ZodType } from 'zod';

interface ValidationSchemas {
  body?: ZodType;
  params?: ZodType;
  query?: ZodType;
}

/**
 * Zod validation middleware for body / query / params. On success the parsed
 * (and coerced/trimmed/defaulted) value REPLACES the raw input, so handlers
 * only ever see validated data. Never trust raw input.
 */
export function validate({ body, params, query }: ValidationSchemas): RequestHandler {
  return (req, _res, next) => {
    try {
      if (body) req.body = body.parse(req.body);
      if (query) {
        const parsed = query.parse(req.query);
        Object.defineProperty(req, 'query', { configurable: true, value: parsed, writable: true });
      }
      if (params) {
        const parsed = params.parse(req.params);
        Object.defineProperty(req, 'params', { configurable: true, value: parsed, writable: true });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}
