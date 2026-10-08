import type { Response } from 'express';

import type { AuthUser } from '../types/index.js';

import { REFRESH_TOKEN_COOKIE, SESSION_COOKIE } from '../config/constants.js';
import { env } from '../config/env.js';

export function clearAuthCookies(res: Response): void {
  res.clearCookie(REFRESH_TOKEN_COOKIE, baseCookieOptions());
  res.clearCookie(SESSION_COOKIE, baseCookieOptions());
}

export function setAuthCookies(res: Response, user: AuthUser, refreshToken: string): void {
  const maxAge = env.REFRESH_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000;
  res.cookie(REFRESH_TOKEN_COOKIE, refreshToken, {
    ...baseCookieOptions(),
    httpOnly: true,
    maxAge,
  });
  // Minimal session marker (also httpOnly) so the Next.js middleware can gate
  // routes server-side without exposing anything to client-side JavaScript.
  res.cookie(SESSION_COOKIE, JSON.stringify({ id: user.id, role: user.role }), {
    ...baseCookieOptions(),
    httpOnly: true,
    maxAge,
  });
}

function baseCookieOptions() {
  return {
    path: '/',
    sameSite: 'lax' as const,
    secure: env.isProd,
    ...(env.COOKIE_DOMAIN ? { domain: env.COOKIE_DOMAIN } : {}),
  };
}
