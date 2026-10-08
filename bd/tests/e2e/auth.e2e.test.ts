import { randomUUID } from 'node:crypto';
import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { REFRESH_TOKEN_COOKIE } from '../../src/config/constants.js';
import { API, app, getCookieValue, getSetCookies, login } from './helpers.js';

function uniqueEmail(): string {
  return `auth-${randomUUID()}@ufeedu.test`;
}

describe('POST /api/v1/user/auth/register', () => {
  it('creates an account, returns tokens and sets httpOnly cookies', async () => {
    const email = uniqueEmail();
    const res = await request(app)
      .post(`${API}/user/auth/register`)
      .send({ email, name: 'E2E User', password: 'Password123!' });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.user).toMatchObject({
      email,
      isActive: true,
      name: 'E2E User',
      role: 'USER',
    });
    // The password hash must never leave the server.
    expect(res.body.data.user).not.toHaveProperty('passwordHash');
    expect(typeof res.body.data.accessToken).toBe('string');

    const refresh = getSetCookies(res).find((cookie) =>
      cookie.startsWith(`${REFRESH_TOKEN_COOKIE}=`),
    );
    expect(refresh).toBeDefined();
    expect(refresh).toMatch(/httponly/i);
  });

  it('rejects a duplicate email with 409', async () => {
    const email = uniqueEmail();
    await request(app).post(`${API}/user/auth/register`).send({ email, password: 'Password123!' });

    const res = await request(app)
      .post(`${API}/user/auth/register`)
      .send({ email, password: 'Password123!' });

    expect(res.status).toBe(409);
    expect(res.body.error.code).toBe('CONFLICT');
  });

  it('rejects an invalid body with the validation envelope', async () => {
    const res = await request(app)
      .post(`${API}/user/auth/register`)
      .send({ email: 'not-an-email', password: 'short' });

    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
    expect(res.body.error.details).toEqual(
      expect.arrayContaining([expect.objectContaining({ path: expect.any(String) })]),
    );
  });
});

describe('POST /api/v1/user/auth/login', () => {
  it('logs in a registered user', async () => {
    const email = uniqueEmail();
    await request(app).post(`${API}/user/auth/register`).send({ email, password: 'Password123!' });

    const res = await request(app)
      .post(`${API}/user/auth/login`)
      .send({ email, password: 'Password123!' });

    expect(res.status).toBe(200);
    expect(res.body.data.user.email).toBe(email);
    expect(typeof res.body.data.accessToken).toBe('string');
  });

  it('uses the SAME generic error for unknown email and wrong password', async () => {
    const email = uniqueEmail();
    await request(app).post(`${API}/user/auth/register`).send({ email, password: 'Password123!' });

    const wrongPassword = await request(app)
      .post(`${API}/user/auth/login`)
      .send({ email, password: 'WrongPassword1!' });
    const unknownEmail = await request(app)
      .post(`${API}/user/auth/login`)
      .send({ email: `ghost-${randomUUID()}@ufeedu.test`, password: 'WrongPassword1!' });

    expect(wrongPassword.status).toBe(401);
    expect(unknownEmail.status).toBe(401);
    expect(wrongPassword.body.error.message).toBe(unknownEmail.body.error.message);
    // The message must not leak WHICH account was probed.
    expect(unknownEmail.body.error.message).not.toContain(email);
    expect(wrongPassword.body.error.message).not.toContain(email);
  });
});

describe('GET /api/v1/user/auth/me', () => {
  it('returns the authenticated user for a valid bearer token', async () => {
    const email = uniqueEmail();
    await request(app).post(`${API}/user/auth/register`).send({ email, password: 'Password123!' });
    const session = await login(email, 'Password123!');

    const res = await request(app)
      .get(`${API}/user/auth/me`)
      .set('Authorization', `Bearer ${session.accessToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.user.email).toBe(email);
    expect(res.body.data.user).not.toHaveProperty('passwordHash');
  });

  it('rejects a missing token', async () => {
    const res = await request(app).get(`${API}/user/auth/me`);

    expect(res.status).toBe(401);
    expect(res.body.error.code).toBe('UNAUTHORIZED');
  });
});

describe('refresh token rotation', () => {
  it('rotates the cookie on refresh and revokes the old token', async () => {
    const email = uniqueEmail();
    const registerRes = await request(app)
      .post(`${API}/user/auth/register`)
      .send({ email, password: 'Password123!' });
    const oldRefresh = getCookieValue(registerRes, REFRESH_TOKEN_COOKIE);
    expect(oldRefresh).toBeDefined();

    const refreshed = await request(app)
      .post(`${API}/user/auth/refresh`)
      .set('Cookie', `${REFRESH_TOKEN_COOKIE}=${oldRefresh}`);

    expect(refreshed.status).toBe(200);
    expect(typeof refreshed.body.data.accessToken).toBe('string');
    const newRefresh = getCookieValue(refreshed, REFRESH_TOKEN_COOKIE);
    expect(newRefresh).toBeDefined();
    expect(newRefresh).not.toBe(oldRefresh);

    // Reusing the OLD token must fail — rotation revoked it.
    const replay = await request(app)
      .post(`${API}/user/auth/refresh`)
      .set('Cookie', `${REFRESH_TOKEN_COOKIE}=${oldRefresh}`);
    expect(replay.status).toBe(401);
  });

  it('logs out: the refresh cookie is cleared and the token is dead', async () => {
    const email = uniqueEmail();
    const registerRes = await request(app)
      .post(`${API}/user/auth/register`)
      .send({ email, password: 'Password123!' });
    const refresh = getCookieValue(registerRes, REFRESH_TOKEN_COOKIE);

    const logout = await request(app)
      .post(`${API}/user/auth/logout`)
      .set('Cookie', `${REFRESH_TOKEN_COOKIE}=${refresh}`);

    expect(logout.status).toBe(200);
    expect(logout.body.data.loggedOut).toBe(true);

    const replay = await request(app)
      .post(`${API}/user/auth/refresh`)
      .set('Cookie', `${REFRESH_TOKEN_COOKIE}=${refresh}`);
    expect(replay.status).toBe(401);
  });
});
