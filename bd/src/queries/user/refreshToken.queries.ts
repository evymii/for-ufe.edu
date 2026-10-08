import type { SafeUser } from '../../types/index.js';

import { prisma } from '../../lib/prisma.js';
import { SAFE_USER_SELECT } from './user.queries.js';

export interface RefreshTokenRecord {
  expiresAt: Date;
  id: string;
  revokedAt: Date | null;
  tokenHash: string;
  user: SafeUser;
  userId: string;
}

export function createRefreshToken(data: { expiresAt: Date; tokenHash: string; userId: string }) {
  return prisma.refreshToken.create({ data });
}

/** Housekeeping: drop expired tokens and tokens revoked more than 24h ago. */
export function deleteExpiredRefreshTokens() {
  const now = new Date();
  return prisma.refreshToken.deleteMany({
    where: {
      OR: [
        { expiresAt: { lt: now } },
        { revokedAt: { lt: new Date(now.getTime() - 24 * 60 * 60 * 1000) } },
      ],
    },
  });
}

export function deleteRefreshTokenByHash(tokenHash: string) {
  return prisma.refreshToken.delete({ where: { tokenHash } });
}

export function findRefreshTokenWithUserByHash(tokenHash: string) {
  return prisma.refreshToken.findUnique({
    include: { user: { select: SAFE_USER_SELECT } },
    where: { tokenHash },
  }) as Promise<null | RefreshTokenRecord>;
}

/**
 * Refresh-token rotation: revoke the old token and persist the new one in ONE
 * transaction, so a partially-completed rotation can never leave two live tokens.
 */
export async function rotateRefreshToken(params: {
  expiresAt: Date;
  newTokenHash: string;
  oldTokenHash: string;
  userId: string;
}): Promise<void> {
  await prisma.$transaction([
    prisma.refreshToken.update({
      data: { revokedAt: new Date() },
      where: { tokenHash: params.oldTokenHash },
    }),
    prisma.refreshToken.create({
      data: { expiresAt: params.expiresAt, tokenHash: params.newTokenHash, userId: params.userId },
    }),
  ]);
}
