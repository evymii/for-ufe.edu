import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { SafeUser } from '../../../src/types/index.js';

import { ApiError } from '../../../src/lib/ApiError.js';
import * as refreshTokenQueries from '../../../src/queries/user/refreshToken.queries.js';
import * as userQueries from '../../../src/queries/user/user.queries.js';
import * as authService from '../../../src/services/user/auth.service.js';

// The ONLY layer the service talks to for persistence — fully mocked here.
vi.mock('../../../src/queries/user/user.queries.js');
vi.mock('../../../src/queries/user/refreshToken.queries.js');

const mockedUserQueries = vi.mocked(userQueries);
const mockedTokenQueries = vi.mocked(refreshTokenQueries);

const now = new Date('2026-01-01T00:00:00.000Z');

function safeUser(overrides: Partial<SafeUser> = {}): SafeUser {
  return {
    createdAt: now,
    email: 'service@test.local',
    id: '11111111-1111-4111-8111-111111111111',
    isActive: true,
    name: 'Service Test',
    role: 'USER',
    updatedAt: now,
    ...overrides,
  };
}

const authUserShape: {
  createdAt: Date;
  email: string;
  id: string;
  isActive: boolean;
  name: null | string;
  passwordHash: string;
  role: SafeUser['role'];
  updatedAt: Date;
} = {
  createdAt: now,
  email: 'service@test.local',
  id: '11111111-1111-4111-8111-111111111111',
  isActive: true,
  name: 'Service Test',
  passwordHash: '$2b$04$somehashsomehashsomehashsomehashsomehashsomehashso',
  role: 'USER',
  updatedAt: now,
};

beforeEach(() => {
  vi.clearAllMocks();
  mockedTokenQueries.createRefreshToken.mockResolvedValue({} as never);
});

describe('auth.service (queries mocked)', () => {
  describe('register', () => {
    it('creates the user and issues tokens', async () => {
      mockedUserQueries.findUserAuthByEmail.mockResolvedValue(null);
      mockedUserQueries.createUser.mockResolvedValue(safeUser());

      const result = await authService.register({
        email: 'Service@Test.local',
        name: 'Service Test',
        password: 'Password123!',
      });

      expect(result.user).toEqual(safeUser());
      expect(result.user).not.toHaveProperty('passwordHash');
      expect(typeof result.accessToken).toBe('string');
      expect(typeof result.refreshToken).toBe('string');
      // The service passes validated input through verbatim — email
      // lowercasing happens in the zod emailSchema at the route boundary.
      expect(mockedUserQueries.createUser).toHaveBeenCalledWith(
        expect.objectContaining({ email: 'Service@Test.local', name: 'Service Test' }),
      );
      expect(mockedTokenQueries.createRefreshToken).toHaveBeenCalledTimes(1);
    });

    it('throws a 409 conflict when the email already exists', async () => {
      mockedUserQueries.findUserAuthByEmail.mockResolvedValue(authUserShape);

      const error = await authService
        .register({ email: 'service@test.local', password: 'Password123!' })
        .catch((e: unknown) => e);

      expect(error).toBeInstanceOf(ApiError);
      expect((error as ApiError).statusCode).toBe(409);
      expect(mockedUserQueries.createUser).not.toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('returns a safe user and tokens for valid credentials', async () => {
      const hash = await import('bcrypt').then((b) => b.hash('Password123!', 4));
      mockedUserQueries.findUserWithPasswordByEmail.mockResolvedValue({
        ...safeUser(),
        passwordHash: hash,
      });

      const result = await authService.login({
        email: 'service@test.local',
        password: 'Password123!',
      });

      expect(result.user.email).toBe('service@test.local');
      expect(result.user).not.toHaveProperty('passwordHash');
      expect(mockedTokenQueries.createRefreshToken).toHaveBeenCalledTimes(1);
    });

    it('rejects a wrong password with the generic message', async () => {
      const hash = await import('bcrypt').then((b) => b.hash('Password123!', 4));
      mockedUserQueries.findUserWithPasswordByEmail.mockResolvedValue({
        ...safeUser(),
        passwordHash: hash,
      });

      const error = await authService
        .login({ email: 'service@test.local', password: 'WrongPassword1!' })
        .catch((e: unknown) => e);

      expect(error).toBeInstanceOf(ApiError);
      expect((error as ApiError).statusCode).toBe(401);
      expect((error as ApiError).message).toBe(authService.INVALID_CREDENTIALS_MESSAGE);
    });

    it('rejects an unknown email with the SAME generic message (no enumeration)', async () => {
      mockedUserQueries.findUserWithPasswordByEmail.mockResolvedValue(null);

      const error = await authService
        .login({ email: 'ghost@test.local', password: 'Whatever123!' })
        .catch((e: unknown) => e);

      expect((error as ApiError).statusCode).toBe(401);
      expect((error as ApiError).message).toBe(authService.INVALID_CREDENTIALS_MESSAGE);
    });

    it('rejects an inactive user even with valid credentials', async () => {
      const hash = await import('bcrypt').then((b) => b.hash('Password123!', 4));
      mockedUserQueries.findUserWithPasswordByEmail.mockResolvedValue({
        ...safeUser({ isActive: false }),
        passwordHash: hash,
      });

      const error = await authService
        .login({ email: 'service@test.local', password: 'Password123!' })
        .catch((e: unknown) => e);

      expect((error as ApiError).statusCode).toBe(401);
      expect(mockedTokenQueries.createRefreshToken).not.toHaveBeenCalled();
    });
  });

  describe('refresh', () => {
    it('rejects a missing token without touching the database', async () => {
      const error = await authService.refresh(undefined).catch((e: unknown) => e);

      expect(error).toBeInstanceOf(ApiError);
      expect((error as ApiError).statusCode).toBe(401);
      expect(mockedTokenQueries.findRefreshTokenWithUserByHash).not.toHaveBeenCalled();
    });

    it('rotates the token and returns a fresh access token', async () => {
      mockedTokenQueries.findRefreshTokenWithUserByHash.mockResolvedValue({
        expiresAt: new Date(Date.now() + 60_000),
        id: '22222222-2222-4222-8222-222222222222',
        revokedAt: null,
        tokenHash: 'a'.repeat(64),
        user: safeUser(),
        userId: safeUser().id,
      });
      mockedTokenQueries.rotateRefreshToken.mockResolvedValue(undefined);

      const result = await authService.refresh('opaque-token-value');

      expect(result.user.id).toBe(safeUser().id);
      expect(result.refreshToken).not.toBe('opaque-token-value');
      expect(mockedTokenQueries.rotateRefreshToken).toHaveBeenCalledTimes(1);
    });

    it('rejects a revoked token', async () => {
      mockedTokenQueries.findRefreshTokenWithUserByHash.mockResolvedValue({
        expiresAt: new Date(Date.now() + 60_000),
        id: '22222222-2222-4222-8222-222222222222',
        revokedAt: new Date(),
        tokenHash: 'a'.repeat(64),
        user: safeUser(),
        userId: safeUser().id,
      });

      const error = await authService.refresh('opaque-token-value').catch((e: unknown) => e);
      expect((error as ApiError).statusCode).toBe(401);
      expect(mockedTokenQueries.rotateRefreshToken).not.toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('is a no-op when no cookie is presented', async () => {
      await authService.logout(undefined);
      expect(mockedTokenQueries.deleteRefreshTokenByHash).not.toHaveBeenCalled();
    });

    it('deletes the token record and swallows double-logout', async () => {
      mockedTokenQueries.deleteRefreshTokenByHash.mockRejectedValueOnce(new Error('already gone'));
      await expect(authService.logout('opaque-token-value')).resolves.toBeUndefined();
      expect(mockedTokenQueries.deleteRefreshTokenByHash).toHaveBeenCalledTimes(1);
    });
  });
});
