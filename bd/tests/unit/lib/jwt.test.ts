import jwt from 'jsonwebtoken';
import { describe, expect, it } from 'vitest';

import type { AuthUser } from '../../../src/types/index.js';

import { env } from '../../../src/config/env.js';
import { ApiError } from '../../../src/lib/ApiError.js';
import { signAccessToken, verifyAccessToken } from '../../../src/lib/jwt.js';

const user: AuthUser = {
  email: 'jwt@test.local',
  id: '9b7affbb-7f36-4a3b-9c1e-1a2b3c4d5e6f',
  role: 'USER',
};

describe('jwt helpers', () => {
  it('round-trips an access token', () => {
    const token = signAccessToken(user);
    const claims = verifyAccessToken(token);

    expect(claims.sub).toBe(user.id);
    expect(claims.email).toBe(user.email);
    expect(claims.role).toBe('USER');
  });

  it('rejects garbage input', () => {
    expect(() => verifyAccessToken('not-a-token')).toThrow(ApiError);
    try {
      verifyAccessToken('not-a-token');
    } catch (error) {
      expect((error as ApiError).statusCode).toBe(401);
    }
  });

  it('rejects a token signed with a different secret', () => {
    const forged = jwt.sign({ email: user.email, role: 'ADMIN' }, 'a-completely-different-secret', {
      subject: user.id,
    });
    expect(() => verifyAccessToken(forged)).toThrow(ApiError);
  });

  it('rejects an expired token', () => {
    const expired = jwt.sign(
      { email: user.email, exp: Math.floor(Date.now() / 1000) - 60, role: user.role },
      env.JWT_ACCESS_SECRET,
      {
        subject: user.id,
      },
    );
    expect(() => verifyAccessToken(expired)).toThrow(ApiError);
  });

  it('rejects a payload with a missing role claim', () => {
    const malformed = jwt.sign({ email: user.email }, env.JWT_ACCESS_SECRET, { subject: user.id });
    expect(() => verifyAccessToken(malformed)).toThrow(ApiError);
  });
});
