import type { Request, RequestHandler } from 'express';

import { asyncHandler } from '../lib/asyncHandler.js';
import { verifyAccessToken } from '../lib/jwt.js';
import { findUserAuthById } from '../queries/user/user.queries.js';

/**
 * Optional Bearer auth for public content reads. Same verification as
 * `authenticate`, but never rejects: a missing, stale or invalid token just
 * means the request continues anonymous (public rows only). The admin panel
 * attaches its token to list calls so editors can preview unpublished rows.
 */
export const optionalAuth: RequestHandler = asyncHandler(async (req, _res, next) => {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    next();
    return;
  }
  try {
    const claims = verifyAccessToken(header.slice('Bearer '.length));
    const user = await findUserAuthById(claims.sub);
    if (user?.isActive) {
      // MongoDB stores roles as plain strings — narrow to the union, failing
      // closed (non-admin) on anything unexpected.
      req.user = {
        email: user.email,
        id: user.id,
        role: user.role === 'ADMIN' ? 'ADMIN' : 'USER',
      };
    }
  } catch {
    // Anonymous on any token problem — public reads must not 401.
  }
  next();
});

/**
 * Hidden-row visibility for list endpoints. `includeHidden=true` in the query
 * is a request, not permission: only a verified ADMIN bearer actually gets
 * unpublished rows; everyone else silently falls back to public rows only.
 */
export function wantsHiddenRows(
  req: Request,
  query: { includeHidden?: boolean | null | undefined },
): boolean {
  return query.includeHidden === true && req.user?.role === 'ADMIN';
}
