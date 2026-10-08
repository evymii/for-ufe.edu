import type { NextFunction, Request, RequestHandler, Response } from 'express';

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;

/** Forwards async errors to the central errorHandler — never let a rejection escape. */
export const asyncHandler =
  (fn: AsyncRequestHandler): RequestHandler =>
  (req, res, next) => {
    void Promise.resolve(fn(req, res, next)).catch(next);
  };
