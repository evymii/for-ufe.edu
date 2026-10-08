import type { Prisma } from '../../generated/prisma/client.js';
import type { Role, SafeUser } from '../../types/index.js';

import { prisma } from '../../lib/prisma.js';

/** Fields safe to return to clients — passwordHash is deliberately absent. */
export const SAFE_USER_SELECT = {
  createdAt: true,
  email: true,
  id: true,
  isActive: true,
  name: true,
  role: true,
  updatedAt: true,
} satisfies Prisma.UserSelect;

export interface CreateUserData {
  createdAt?: Date;
  email: string;
  name?: null | string;
  passwordHash: string;
  role?: Role;
}

export function createUser(data: CreateUserData): Promise<SafeUser> {
  return prisma.user.create({ data, select: SAFE_USER_SELECT });
}

/** Auth lookups: includes passwordHash — only the auth service may call these. */
export function findUserAuthByEmail(email: string) {
  return prisma.user.findUnique({
    select: { email: true, id: true, isActive: true, passwordHash: true, role: true },
    where: { email },
  });
}

export function findUserAuthById(id: string) {
  return prisma.user.findUnique({
    select: { email: true, id: true, isActive: true, role: true },
    where: { id },
  });
}

export function findUserById(id: string): Promise<null | SafeUser> {
  return prisma.user.findUnique({ select: SAFE_USER_SELECT, where: { id } });
}

export function findUserWithPasswordByEmail(email: string) {
  return prisma.user.findUnique({
    select: { ...SAFE_USER_SELECT, passwordHash: true },
    where: { email },
  });
}

export function updateUserProfile(id: string, data: { name?: null | string }): Promise<SafeUser> {
  return prisma.user.update({ data, select: SAFE_USER_SELECT, where: { id } });
}
