import { describe, expect, it } from 'vitest';

import { generateRefreshToken, hashRefreshToken } from '../../../src/lib/tokens.js';

describe('refresh token helpers', () => {
  it('generates an opaque token plus its SHA-256 hash', () => {
    const { token, tokenHash } = generateRefreshToken();

    expect(token.length).toBeGreaterThan(30);
    expect(tokenHash).toBe(hashRefreshToken(token));
    expect(tokenHash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('never generates the same token twice', () => {
    const a = generateRefreshToken();
    const b = generateRefreshToken();
    expect(a.token).not.toBe(b.token);
  });

  it('hashes deterministically (same input, same hash)', () => {
    expect(hashRefreshToken('abc')).toBe(hashRefreshToken('abc'));
    expect(hashRefreshToken('abc')).not.toBe(hashRefreshToken('abd'));
  });
});
