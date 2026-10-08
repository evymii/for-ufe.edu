import bcrypt from 'bcrypt';
import { randomUUID } from 'node:crypto';

import type { Role, SafeUser } from '../../src/types/index.js';

import { prisma } from '../../src/lib/prisma.js';
import { SAFE_USER_SELECT } from '../../src/queries/user/user.queries.js';

export interface TestUser {
  email: string;
  id: string;
  password: string;
  role: Role;
}

/**
 * Creates a user row directly in the (test) database. Tests then log in via
 * the real HTTP endpoint to obtain tokens/cookies — the factory never
 * bypasses the code under test except for seeding.
 */
export async function createTestUser(
  overrides: {
    email?: string;
    isActive?: boolean;
    name?: string;
    password?: string;
    role?: Role;
  } = {},
): Promise<TestUser> {
  const email = overrides.email ?? `test-${randomUUID()}@ufeedu.test`;
  const password = overrides.password ?? 'Password123!';
  const passwordHash = await bcrypt.hash(password, 4);

  const user: SafeUser = await prisma.user.create({
    data: {
      email,
      isActive: overrides.isActive ?? true,
      name: overrides.name ?? 'Factory User',
      passwordHash,
      role: overrides.role ?? 'USER',
    },
    select: SAFE_USER_SELECT,
  });

  return { email, id: user.id, password, role: user.role };
}
