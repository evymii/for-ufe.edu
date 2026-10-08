import type { Paginated, SafeUser } from '../../types/index.js';
import type { ListQuery } from '../../utils/pagination.js';

import { ApiError } from '../../lib/ApiError.js';
import * as adminUserQueries from '../../queries/admin/user.queries.js';
import { buildPaginationMeta } from '../../utils/pagination.js';

export async function getUser(userId: string): Promise<SafeUser> {
  const user = await adminUserQueries.findAdminViewUserById(userId);
  if (!user) {
    throw ApiError.notFound('User not found');
  }
  return user;
}

export async function listUsers(query: ListQuery): Promise<Paginated<SafeUser>> {
  const where = adminUserQueries.buildUserSearchWhere(query.search);
  const [items, total] = await Promise.all([
    adminUserQueries.listUsers(query, where),
    adminUserQueries.countUsers(where),
  ]);
  return { items, meta: buildPaginationMeta(total, query) };
}

export async function setUserStatus(
  actorId: string,
  targetId: string,
  isActive: boolean,
): Promise<SafeUser> {
  const target = await adminUserQueries.findAdminViewUserById(targetId);
  if (!target) {
    throw ApiError.notFound('User not found');
  }
  if (actorId === targetId && !isActive) {
    throw ApiError.conflict('You cannot deactivate your own account');
  }
  return adminUserQueries.setUserActive(targetId, isActive);
}
