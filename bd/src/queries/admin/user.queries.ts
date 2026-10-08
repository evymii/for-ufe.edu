import type { Prisma } from '../../generated/prisma/client.js';
import type { SafeUser } from '../../types/index.js';
import type { ListQuery } from '../../utils/pagination.js';

import { prisma } from '../../lib/prisma.js';
import { SAFE_USER_SELECT } from '../user/user.queries.js';

type UserOrderByInput = Prisma.UserOrderByWithRelationInput;
type UserWhereInput = Prisma.UserWhereInput;

export function buildUserSearchWhere(search?: string): UserWhereInput {
  if (!search) return {};
  return {
    OR: [
      { email: { contains: search, mode: 'insensitive' } },
      { name: { contains: search, mode: 'insensitive' } },
    ],
  };
}

export function countUsers(where: UserWhereInput = {}): Promise<number> {
  return prisma.user.count({ where });
}

export function findAdminViewUserById(id: string): Promise<null | SafeUser> {
  return prisma.user.findUnique({ select: SAFE_USER_SELECT, where: { id } });
}

export function listUsers(query: ListQuery, where: UserWhereInput = {}): Promise<SafeUser[]> {
  return prisma.user.findMany({
    orderBy: { [query.sortBy]: query.sortOrder } as UserOrderByInput,
    select: SAFE_USER_SELECT,
    skip: (query.page - 1) * query.pageSize,
    take: query.pageSize,
    where,
  });
}

export function setUserActive(id: string, isActive: boolean): Promise<SafeUser> {
  return prisma.user.update({ data: { isActive }, select: SAFE_USER_SELECT, where: { id } });
}
