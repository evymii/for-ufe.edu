/**
 * Manual live verification (run: npx tsx tests/manual/live-verify.ts).
 * Boots the real app on an ephemeral port IN-PROCESS and drives it over
 * real HTTP — the same code path as production, just without needing an
 * externally reachable port. Exits non-zero on any failed expectation.
 */
import request from 'supertest';

import { buildApp } from '../../src/app.js';

const API = '/api/v1';
let failures = 0;

function check(label: string, actual: unknown, expected: unknown): void {
  const ok = actual === expected;
  if (!ok) failures += 1;
  console.log(
    `${ok ? '✓' : '✗'} ${label}: ${String(actual)}${ok ? '' : ` (expected ${String(expected)})`}`,
  );
}

async function main(): Promise<void> {
  const app = buildApp();

  const health = await request(app).get('/health/ready');
  check('health/ready status', health.status, 200);

  const pin = await request(app).post(`${API}/user/auth/pin`).send({ code: '1234' });
  check('pin login status', pin.status, 200);
  const bearer = `Bearer ${pin.body.data.accessToken as string}`;

  // Admin overview
  const overviewNoAuth = await request(app).get(`${API}/content/blocks`);
  check('overview without token', overviewNoAuth.status, 401);
  const overview = await request(app).get(`${API}/content/blocks`).set('Authorization', bearer);
  check('overview status', overview.status, 200);
  check('overview has pages array', Array.isArray(overview.body.data.pages), true);

  // Image block type
  const imagePut = await request(app)
    .put(`${API}/content/blocks/live-verify/hero.background`)
    .set('Authorization', bearer)
    .send({ type: 'image', value: 'https://res.cloudinary.com/ufeedu/image/upload/hero.webp' });
  check('image block PUT status', imagePut.status, 200);
  check('image block type echoed', imagePut.body.data.block.type, 'image');

  const badUrl = await request(app)
    .put(`${API}/content/blocks/live-verify/hero.bad`)
    .set('Authorization', bearer)
    .send({ type: 'image', value: 'javascript:alert(1)' });
  check('javascript: URL rejected', badUrl.status, 400);

  // Per-block metadata listing
  const meta = await request(app)
    .get(`${API}/content/blocks/live-verify/blocks?locale=mn`)
    .set('Authorization', bearer);
  check('metadata listing status', meta.status, 200);
  const block = (meta.body.data.blocks as Array<Record<string, unknown>>)[0];
  check('metadata has type', typeof block?.type, 'string');
  check('metadata has updatedAt', typeof block?.updatedAt, 'string');

  // Public read sees the image URL as a plain string
  const pub = await request(app).get(`${API}/content/blocks/live-verify`);
  check(
    'public read returns image URL',
    pub.body.data.blocks['hero.background'],
    'https://res.cloudinary.com/ufeedu/image/upload/hero.webp',
  );

  // Media upload with storage disabled in this environment → 503
  const upload = await request(app)
    .post(`${API}/admin/media`)
    .set('Authorization', bearer)
    .attach('image', Buffer.from('fakepng'), { contentType: 'image/png', filename: 'x.png' });
  check('media upload without provider config', upload.status, 503);

  console.log(failures === 0 ? '\nALL LIVE CHECKS PASSED' : `\n${failures} CHECK(S) FAILED`);
  process.exit(failures === 0 ? 0 : 1);
}

void main();
