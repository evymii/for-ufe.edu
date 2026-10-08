import type { AuthUser, SafeUser } from '../../types/index.js';

import { env } from '../../config/env.js';
import { ApiError } from '../../lib/ApiError.js';
import { signAccessToken } from '../../lib/jwt.js';
import { hashPassword, verifyDummyPassword, verifyPassword } from '../../lib/password.js';
import { generateRefreshToken, hashRefreshToken } from '../../lib/tokens.js';
import * as tokenQueries from '../../queries/user/refreshToken.queries.js';
import * as userQueries from '../../queries/user/user.queries.js';

export interface AuthResult {
  accessToken: string;
  refreshToken: string;
  user: SafeUser;
}

// Deliberately generic — identical for unknown email and wrong password.
export const INVALID_CREDENTIALS_MESSAGE = 'Invalid email or password';

export async function login(input: { email: string; password: string }): Promise<AuthResult> {
  const user = await userQueries.findUserWithPasswordByEmail(input.email);
  // Compare against a dummy hash when the account doesn't exist so both
  // failure paths cost the same — no enumeration via timing.
  const passwordOk = user
    ? await verifyPassword(input.password, user.passwordHash)
    : await verifyDummyPassword(input.password);

  if (!user || !passwordOk || !user.isActive) {
    throw ApiError.unauthorized(INVALID_CREDENTIALS_MESSAGE);
  }

  const { passwordHash: _passwordHash, ...safeUser } = user;
  const tokens = await issueTokens(safeUser);
  return { user: safeUser, ...tokens };
}

export async function logout(refreshToken: string | undefined): Promise<void> {
  if (!refreshToken) return;
  try {
    await tokenQueries.deleteRefreshTokenByHash(hashRefreshToken(refreshToken));
  } catch {
    // Token already deleted (e.g. double logout) — nothing to do.
  }
}

export async function me(userId: string): Promise<SafeUser> {
  const user = await userQueries.findUserById(userId);
  if (!user) {
    throw ApiError.unauthorized('Authentication required');
  }
  return user;
}

export async function refresh(refreshToken: string | undefined): Promise<AuthResult> {
  if (!refreshToken) {
    throw ApiError.unauthorized('Invalid refresh token');
  }
  const tokenHash = hashRefreshToken(refreshToken);
  const record = await tokenQueries.findRefreshTokenWithUserByHash(tokenHash);
  const now = new Date();
  if (!record || record.revokedAt || record.expiresAt < now || !record.user.isActive) {
    throw ApiError.unauthorized('Invalid refresh token');
  }

  const next = generateRefreshToken();
  await tokenQueries.rotateRefreshToken({
    expiresAt: refreshTokenExpiry(),
    newTokenHash: next.tokenHash,
    oldTokenHash: tokenHash,
    userId: record.user.id,
  });
  const accessToken = signAccessToken(record.user);
  return { accessToken, refreshToken: next.token, user: record.user };
}

export async function register(input: {
  email: string;
  name?: string;
  password: string;
}): Promise<AuthResult> {
  const existing = await userQueries.findUserAuthByEmail(input.email);
  if (existing) {
    throw ApiError.conflict('An account with this email already exists');
  }
  const passwordHash = await hashPassword(input.password);
  const user = await userQueries.createUser({
    email: input.email,
    name: input.name ?? null,
    passwordHash,
  });
  const tokens = await issueTokens(user);
  return { user, ...tokens };
}

async function issueTokens(user: AuthUser): Promise<{ accessToken: string; refreshToken: string }> {
  const accessToken = signAccessToken(user);
  const { token, tokenHash } = generateRefreshToken();
  await tokenQueries.createRefreshToken({
    expiresAt: refreshTokenExpiry(),
    tokenHash,
    userId: user.id,
  });
  return { accessToken, refreshToken: token };
}

function refreshTokenExpiry(): Date {
  return new Date(Date.now() + env.REFRESH_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000);
}
