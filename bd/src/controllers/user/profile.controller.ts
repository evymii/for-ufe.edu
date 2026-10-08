import type { Request, Response } from 'express';

import { ApiError } from '../../lib/ApiError.js';
import * as profileService from '../../services/user/profile.service.js';
import { ok } from '../../utils/http.js';

export async function getProfile(req: Request, res: Response): Promise<void> {
  if (!req.user) throw ApiError.unauthorized('Authentication required');
  const user = await profileService.getProfile(req.user.id);
  ok(res, { user });
}

export async function updateProfile(req: Request, res: Response): Promise<void> {
  if (!req.user) throw ApiError.unauthorized('Authentication required');
  const user = await profileService.updateProfile(req.user.id, req.body);
  ok(res, { user });
}
