import type { SafeUser } from '../../types/index.js';

import { ApiError } from '../../lib/ApiError.js';
import { findUserById, updateUserProfile } from '../../queries/user/user.queries.js';

export async function getProfile(userId: string): Promise<SafeUser> {
  const user = await findUserById(userId);
  if (!user) {
    throw ApiError.notFound('User not found');
  }
  return user;
}

export async function updateProfile(userId: string, input: { name: string }): Promise<SafeUser> {
  const existing = await findUserById(userId);
  if (!existing) {
    throw ApiError.notFound('User not found');
  }
  return updateUserProfile(userId, { name: input.name });
}
