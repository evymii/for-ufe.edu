import { createHash, randomBytes } from 'node:crypto';

export interface RefreshTokenPair {
  /** Opaque token handed to the client as an httpOnly cookie. */
  token: string;
  /** SHA-256 hash stored in the database — the raw token is never persisted. */
  tokenHash: string;
}

export function generateRefreshToken(): RefreshTokenPair {
  const token = randomBytes(48).toString('base64url');
  return { token, tokenHash: hashRefreshToken(token) };
}

export function hashRefreshToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}
