import type { Request, Response } from 'express';

import { REFRESH_TOKEN_COOKIE } from '../../config/constants.js';
import { ApiError } from '../../lib/ApiError.js';
import * as authService from '../../services/user/auth.service.js';
import { clearAuthCookies, setAuthCookies } from '../../utils/cookies.js';
import { ok } from '../../utils/http.js';

export async function login(req: Request, res: Response): Promise<void> {
  const result = await authService.login(req.body);
  setAuthCookies(res, result.user, result.refreshToken);
  ok(res, { accessToken: result.accessToken, user: result.user });
}

export async function logout(req: Request, res: Response): Promise<void> {
  await authService.logout(req.cookies?.[REFRESH_TOKEN_COOKIE]);
  clearAuthCookies(res);
  ok(res, { loggedOut: true });
}

export async function me(req: Request, res: Response): Promise<void> {
  const user = await authService.me(requireUser(req).id);
  ok(res, { user });
}

export async function refresh(req: Request, res: Response): Promise<void> {
  const result = await authService.refresh(req.cookies?.[REFRESH_TOKEN_COOKIE]);
  setAuthCookies(res, result.user, result.refreshToken);
  ok(res, { accessToken: result.accessToken, user: result.user });
}

export async function register(req: Request, res: Response): Promise<void> {
  const result = await authService.register(req.body);
  setAuthCookies(res, result.user, result.refreshToken);
  ok(res, { accessToken: result.accessToken, user: result.user }, 201);
}

function requireUser(req: Request) {
  if (!req.user) {
    throw ApiError.unauthorized('Authentication required');
  }
  return req.user;
}
