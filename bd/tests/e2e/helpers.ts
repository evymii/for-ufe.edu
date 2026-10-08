import request, { type Response } from 'supertest';

import { buildApp } from '../../src/app.js';

export const app = buildApp();

export const API = '/api/v1';

export interface Session {
  accessToken: string;
  cookies: string;
}

/** Condenses a response's Set-Cookie headers into a single Cookie header value. */
export function cookieHeader(res: Response): string {
  return getSetCookies(res)
    .map((cookie) => cookie.split(';')[0])
    .join('; ');
}

export function getCookieValue(res: Response, name: string): string | undefined {
  for (const cookie of getSetCookies(res)) {
    if (cookie.startsWith(`${name}=`)) {
      return cookie.split(';')[0]?.slice(name.length + 1);
    }
  }
  return undefined;
}

/** Normalises supertest's set-cookie header typing into a plain string array. */
export function getSetCookies(res: Response): string[] {
  const header: unknown = res.headers['set-cookie'];
  if (!header) return [];
  return Array.isArray(header) ? (header as string[]) : [header as string];
}

export async function login(email: string, password: string): Promise<Session> {
  const res = await request(app).post(`${API}/user/auth/login`).send({ email, password });
  if (res.status !== 200) {
    throw new Error(`login failed for ${email}: ${res.status} ${JSON.stringify(res.body)}`);
  }
  return { accessToken: res.body.data.accessToken as string, cookies: cookieHeader(res) };
}
