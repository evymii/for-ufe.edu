import rateLimit from 'express-rate-limit';

import { env } from '../config/env.js';

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
