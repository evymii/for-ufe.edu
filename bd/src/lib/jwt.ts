import jwt from 'jsonwebtoken';

import type { AuthUser, Role } from '../types/index.js';

import { JWT_ISSUER } from '../config/constants.js';
import { env } from '../config/env.js';
import { ApiError } from './ApiError.js';

export interface AccessTokenClaims {
  email: string;
  role: Role;
  sub: string;
}

/** Short-lived access token. The role is embedded as a claim but is always re-checked against the DB on sensitive actions. */
export function signAccessToken(user: AuthUser): string {
  return jwt.sign({ email: user.email, role: user.role }, env.JWT_ACCESS_SECRET, {
    // Access TTL comes from env as a plain string; @types/jsonwebtoken types it narrowly.
    expiresIn: env.ACCESS_TOKEN_TTL as jwt.SignOptions['expiresIn'],
    issuer: JWT_ISSUER,
    subject: user.id,
  });
}

export function verifyAccessToken(token: string): AccessTokenClaims {
  try {
    const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET, { issuer: JWT_ISSUER });
    if (typeof decoded === 'string' || decoded === null) throw new Error('unexpected payload');
    const claims = decoded as Partial<Record<keyof AccessTokenClaims, unknown>> & { sub?: unknown };
    if (
      typeof claims.sub !== 'string' ||
      typeof claims.email !== 'string' ||
      (claims.role !== 'USER' && claims.role !== 'ADMIN')
    ) {
      throw new Error('malformed payload');
    }
    return { email: claims.email, role: claims.role, sub: claims.sub };
  } catch {
    throw ApiError.unauthorized('Invalid or expired access token');
  }
}
