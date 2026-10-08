import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { app } from './helpers.js';

describe('GET /health', () => {
  it('reports liveness without touching the database', async () => {
    const res = await request(app).get('/health');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      data: { status: 'ok', uptimeSeconds: expect.any(Number) },
      success: true,
    });
  });
});

describe('GET /health/ready', () => {
  it('reports readiness with the database reachable', async () => {
    const res = await request(app).get('/health/ready');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ data: { database: 'up', status: 'ok' }, success: true });
  });

  it('returns a 404 envelope for unknown routes', async () => {
    const res = await request(app).get('/api/v1/definitely-not-a-route');

    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
    expect(res.body.error.code).toBe('NOT_FOUND');
  });
});
