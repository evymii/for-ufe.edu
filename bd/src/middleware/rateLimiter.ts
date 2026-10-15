import type { Options, RateLimitRequestHandler } from 'express-rate-limit';

import * as rateLimitModule from 'express-rate-limit';

import { env } from '../config/env.js';

// express-rate-limit ships ESM-style declarations (`export { rateLimit as
// default }`); under Vercel's Node builder the default import is typed as
// the module namespace (not callable). Bind it ourselves — the named type
// imports keep their declared shapes, and `default` exists at runtime in
// both the CJS and ESM builds.
type RateLimitFn = (options?: Partial<Options>) => RateLimitRequestHandler;
const rateLimit = (rateLimitModule.default ?? rateLimitModule) as unknown as RateLimitFn;

function envelope(message: string) {
  return { error: { code: 'RATE_LIMITED', message }, success: false };
}

/** General limiter for the whole /api/v1 surface. */
export const apiLimiter = rateLimit({
  legacyHeaders: false,
  limit: env.RATE_LIMIT_MAX,
  message: envelope('Too many requests, please slow down and try again later.'),
  standardHeaders: 'draft-7',
  windowMs: env.RATE_LIMIT_WINDOW_MS,
});

/** Stricter limiter for credential endpoints (register / login / refresh). */
export const authLimiter = rateLimit({
  legacyHeaders: false,
  limit: env.AUTH_RATE_LIMIT_MAX,
  message: envelope('Too many authentication attempts, please try again later.'),
  standardHeaders: 'draft-7',
  windowMs: env.RATE_LIMIT_WINDOW_MS,
});

/** Strictest limiter: the admin PIN surface — short numeric codes are brute-forceable. */
export const pinLimiter = rateLimit({
  legacyHeaders: false,
  limit: env.PIN_RATE_LIMIT_MAX,
  message: envelope('Too many PIN attempts, please try again later.'),
  standardHeaders: 'draft-7',
  windowMs: env.RATE_LIMIT_WINDOW_MS,
});

/** Uploads cost real storage money — tighter than the general API limit. */
export const uploadLimiter = rateLimit({
  legacyHeaders: false,
  limit: 30,
  message: envelope('Too many uploads, please try again later.'),
  standardHeaders: 'draft-7',
  windowMs: env.RATE_LIMIT_WINDOW_MS,
});
