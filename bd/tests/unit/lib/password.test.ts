import { describe, expect, it } from 'vitest';

import { hashPassword, verifyDummyPassword, verifyPassword } from '../../../src/lib/password.js';

describe('password helpers', () => {
  it('hashes a password into a verifiable bcrypt hash', async () => {
    const hash = await hashPassword('correct horse battery staple');

    expect(hash).not.toContain('correct');
    expect(hash).toMatch(/^\$2[aby]\$/);
    await expect(verifyPassword('correct horse battery staple', hash)).resolves.toBe(true);
    await expect(verifyPassword('wrong password', hash)).resolves.toBe(false);
  });

  it('produces a different hash for the same input (salted)', async () => {
    const [a, b] = await Promise.all([hashPassword('same-input'), hashPassword('same-input')]);
    expect(a).not.toBe(b);
  });

  it('verifyDummyPassword is always false (timing-equalisation decoy)', async () => {
    await expect(verifyDummyPassword('whatever')).resolves.toBe(false);
    await expect(verifyDummyPassword('')).resolves.toBe(false);
  });
});
