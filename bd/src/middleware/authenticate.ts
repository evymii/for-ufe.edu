import type { RequestHandler } from 'express';

import { ApiError } from '../lib/ApiError.js';
import { asyncHandler } from '../lib/asyncHandler.js';
import { verifyAccessToken } from '../lib/jwt.js';
import { findUserAuthById } from '../queries/user/user.queries.js';

/**
 * Bearer-token authentication. Verifies the JWT signature, then confirms the
 * user still exists and is active — a deleted/deactivated user's token dies
 * immediately, even before it expires.
 */
export const authenticate: RequestHandler = asyncHandler(async (req, _res, next) => {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    throw ApiError.unauthorized('Authentication required');
  }
  const claims = verifyAccessToken(header.slice('Bearer '.length));
  const user = await findUserAuthById(claims.sub);
  if (!user?.isActive) {
    throw ApiError.unauthorized('Authentication required');
  }
  req.user = { email: user.email, id: user.id, role: user.role };
  next();
});
