import type { RequestHandler } from 'express';

import type { Role } from '../types/index.js';

import { ApiError } from '../lib/ApiError.js';
import { asyncHandler } from '../lib/asyncHandler.js';
import { findUserAuthById } from '../queries/user/user.queries.js';

/**
 * Role gate for sensitive areas. The JWT claim is checked first, then the
 * role is re-verified against the database so a demoted or deactivated
 * account loses access immediately, even with a still-valid token.
 *
 * Apply at the ROUTER level (see routes/admin/index.ts) so new routes under
 * that router can never be accidentally public.
 */
export function requireRole(role: Role): RequestHandler {
  return asyncHandler(async (req, _res, next) => {
    if (!req.user) {
      throw ApiError.unauthorized('Authentication required');
    }
    if (req.user.role !== role) {
      throw ApiError.forbidden();
    }
    const current = await findUserAuthById(req.user.id);
    if (!current?.isActive || current.role !== role) {
      throw ApiError.forbidden();
    }
    next();
  });
}
