import { randomUUID } from 'node:crypto';
import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';

import { startContentListener } from '../../src/lib/content-events.js';
import { prisma } from '../../src/lib/prisma.js';
import { createTestUser } from '../setup/factories.js';
import { API, app, getCookieValue, login } from './helpers.js';

const pinLogin = (code: string) => request(app).post(`${API}/user/auth/pin`).send({ code });

/** Admin session obtained through the surface under test (the PIN login). */
async function adminBearer(): Promise<string> {
  const res = await pinLogin('1234');
  expect(res.status).toBe(200);
  return `Bearer ${res.body.data.accessToken as string}`;
}

const putBlock = (page: string, key: string, bearer: string, body: Record<string, unknown>) =>
  request(app).put(`${API}/content/blocks/${page}/${key}`).set('Authorization', bearer).send(body);

beforeEach(async () => {
  await prisma.contentBlock.deleteMany({}); // history cascades
});

describe('POST /api/v1/user/auth/pin', () => {
  it('rejects a wrong PIN with 401 and a generic message', async () => {
    const res = await pinLogin('0000');

    expect(res.status).toBe(401);
    expect(res.body.error.code).toBe('UNAUTHORIZED');
    expect(res.body.error.message).toBe('Invalid PIN code');
  });

  it('rejects a malformed code with 400 before touching auth', async () => {
    const res = await pinLogin('12');

    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('logs in the admin: access token, ADMIN role, refresh cookie', async () => {
    const res = await pinLogin('1234');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.accessToken).toEqual(expect.any(String));
    expect(res.body.data.user.role).toBe('ADMIN');
    expect(res.body.data.user).not.toHaveProperty('passwordHash');
    expect(getCookieValue(res, 'uf_refresh')).toEqual(expect.any(String));
  });
});

describe('GET /api/v1/content/blocks/:page (public)', () => {
  it('returns an empty map for a page with no blocks', async () => {
    const res = await request(app).get(`${API}/content/blocks/home`);

    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({ blocks: {}, locale: 'mn', page: 'home' });
  });

  it('rejects malformed page slugs and locales', async () => {
    expect((await request(app).get(`${API}/content/blocks/Bad_Page`)).status).toBe(400);
    expect((await request(app).get(`${API}/content/blocks/home?locale=MN`)).status).toBe(400);
  });
});

describe('PUT /api/v1/content/blocks/:page/:key (admin)', () => {
  it('rejects unauthenticated and non-admin callers', async () => {
    const noAuth = await request(app)
      .put(`${API}/content/blocks/home/hero.title`)
      .send({ type: 'text', value: 'x' });
    expect(noAuth.status).toBe(401);

    const user = await createTestUser();
    const session = await login(user.email, user.password);
    const wrongRole = await putBlock('home', 'hero.title', `Bearer ${session.accessToken}`, {
      type: 'text',
      value: 'x',
    });
    expect(wrongRole.status).toBe(403);
  });

  it('creates a text block, then serves it on the public read', async () => {
    const bearer = await adminBearer();
    const put = await putBlock('home', 'hero.title', bearer, {
      type: 'text',
      value: 'Сайн байна уу',
    });
    expect(put.status).toBe(200);
    expect(put.body.data.block.value).toBe('Сайн байна уу');

    const read = await request(app).get(`${API}/content/blocks/home`);
    expect(read.body.data.blocks['hero.title']).toBe('Сайн байна уу');
  });

  it('sanitizes richtext server-side — scripts never reach storage', async () => {
    const bearer = await adminBearer();
    const put = await putBlock('about', 'intro', bearer, {
      type: 'richtext',
      value: '<p>Hi <script>alert(1)</script><a href="javascript:evil()">click</a></p>',
    });
    expect(put.status).toBe(200);

    const read = await request(app).get(`${API}/content/blocks/about`);
    const html = read.body.data.blocks.intro as string;
    expect(html).toContain('<p>Hi');
    expect(html).not.toContain('script');
    expect(html).not.toContain('javascript:');
  });

  it('stores json canonically and returns it parsed', async () => {
    const bearer = await adminBearer();
    const put = await putBlock('home', 'hero.stats', bearer, {
      type: 'json',
      value: '{"wins": 12,  "losses": 1}',
    });
    expect(put.status).toBe(200);

    const read = await request(app).get(`${API}/content/blocks/home`);
    expect(read.body.data.blocks['hero.stats']).toEqual({ losses: 1, wins: 12 });
  });

  it('rejects invalid json with 400', async () => {
    const bearer = await adminBearer();
    const res = await putBlock('home', 'hero.stats', bearer, { type: 'json', value: '{oops' });
    expect(res.status).toBe(400);
  });

  it('rejects a type change on an existing key with 409', async () => {
    const bearer = await adminBearer();
    await putBlock('home', 'hero.title', bearer, { type: 'text', value: 'v1' });

    const res = await putBlock('home', 'hero.title', bearer, {
      type: 'richtext',
      value: '<p>v</p>',
    });
    expect(res.status).toBe(409);
  });

  it('rejects oversized values', async () => {
    const bearer = await adminBearer();
    const res = await putBlock('home', 'hero.title', bearer, {
      type: 'text',
      value: 'x'.repeat(20_001),
    });
    expect(res.status).toBe(400);
  });
});

describe('POST /api/v1/content/blocks/:page/ensure (admin)', () => {
  it('creates missing keys but never overwrites edited values', async () => {
    const bearer = await adminBearer();
    await putBlock('home', 'hero.title', bearer, { type: 'text', value: 'edited' });

    const ensure = await request(app)
      .post(`${API}/content/blocks/home/ensure`)
      .set('Authorization', bearer)
      .send({
        blocks: [
          { key: 'hero.title', type: 'text', value: 'default-should-not-win' },
          { key: 'hero.subtitle', type: 'text', value: 'default-subtitle' },
        ],
      });
    expect(ensure.status).toBe(200);
    expect(ensure.body.data.createdCount).toBe(1);

    const read = await request(app).get(`${API}/content/blocks/home`);
    expect(read.body.data.blocks['hero.title']).toBe('edited'); // untouched
    expect(read.body.data.blocks['hero.subtitle']).toBe('default-subtitle');
  });
});

describe('GET /api/v1/content/blocks/:page/history (admin)', () => {
  it('records every edit with the previous value', async () => {
    const bearer = await adminBearer();
    await putBlock('home', 'hero.title', bearer, { type: 'text', value: 'v1' });
    await putBlock('home', 'hero.title', bearer, { type: 'text', value: 'v2' });

    const res = await request(app)
      .get(`${API}/content/blocks/home/history?key=hero.title`)
      .set('Authorization', bearer);

    expect(res.status).toBe(200);
    expect(res.body.data.pagination.total).toBe(2);
    const [latest, first] = res.body.data.items;
    expect(latest.oldValue).toBe('v1');
    expect(latest.newValue).toBe('v2');
    expect(first.oldValue).toBeNull(); // creation entry
    expect(first.newValue).toBe('v1');
  });

  it('is admin-only and paginates', async () => {
    expect((await request(app).get(`${API}/content/blocks/home/history`)).status).toBe(401);

    const bearer = await adminBearer();
    const res = await request(app)
      .get(`${API}/content/blocks/home/history?limit=1&offset=0`)
      .set('Authorization', bearer);
    expect(res.status).toBe(200);
    expect(res.body.data.items.length).toBeLessThanOrEqual(1);
    expect(res.body.data.pagination).toMatchObject({ limit: 1, offset: 0 });
  });
});

describe('image block type', () => {
  it('accepts a valid https URL and serves it on the public read', async () => {
    const bearer = await adminBearer();
    const put = await putBlock('home', 'hero.background', bearer, {
      type: 'image',
      value: 'https://res.cloudinary.com/test/image/upload/hero.webp',
    });
    expect(put.status).toBe(200);
    expect(put.body.data.block.type).toBe('image');

    const read = await request(app).get(`${API}/content/blocks/home`);
    expect(read.body.data.blocks['hero.background']).toBe(
      'https://res.cloudinary.com/test/image/upload/hero.webp',
    );
  });

  it('rejects non-URL and non-http values with 400', async () => {
    const bearer = await adminBearer();
    expect(
      (await putBlock('home', 'hero.bad', bearer, { type: 'image', value: 'not a url' })).status,
    ).toBe(400);
    expect(
      (await putBlock('home', 'hero.bad', bearer, { type: 'image', value: 'ftp://x/y.png' }))
        .status,
    ).toBe(400);
  });
});

describe('GET /api/v1/content/blocks (admin overview + metadata listing)', () => {
  it('lists pages with block counts and last-update time (admin-only)', async () => {
    expect((await request(app).get(`${API}/content/blocks`)).status).toBe(401);

    const user = await createTestUser();
    const session = await login(user.email, user.password);
    expect(
      (
        await request(app)
          .get(`${API}/content/blocks`)
          .set('Authorization', `Bearer ${session.accessToken}`)
      ).status,
    ).toBe(403);

    const bearer = await adminBearer();
    await putBlock('home', 'hero.title', bearer, { type: 'text', value: 'v' });
    await putBlock('about', 'intro', bearer, { type: 'text', value: 'v' });

    const res = await request(app).get(`${API}/content/blocks`).set('Authorization', bearer);
    expect(res.status).toBe(200);
    const pages = res.body.data.pages as Array<{ blockCount: number; page: string }>;
    expect(pages).toContainEqual(expect.objectContaining({ blockCount: 1, page: 'home' }));
    expect(pages).toContainEqual(expect.objectContaining({ blockCount: 1, page: 'about' }));
  });

  it('lists per-block metadata for the editor (admin-only)', async () => {
    expect((await request(app).get(`${API}/content/blocks/home/blocks`)).status).toBe(401);

    const bearer = await adminBearer();
    await putBlock('home', 'hero.title', bearer, { type: 'text', value: 'meta' });

    const res = await request(app)
      .get(`${API}/content/blocks/home/blocks?locale=mn`)
      .set('Authorization', bearer);

    expect(res.status).toBe(200);
    const block = (res.body.data.blocks as Array<Record<string, unknown>>).find(
      (b) => b.key === 'hero.title',
    );
    expect(block).toMatchObject({ key: 'hero.title', locale: 'mn', type: 'text', value: 'meta' });
    expect(block).toHaveProperty('updatedAt');
    expect(block).toHaveProperty('updatedBy'); // editor email (or null)
  });
});

describe('GET /api/v1/content/blocks/:page/stream (SSE)', () => {
  it('streams content_changed after an edit on the same page+locale', async () => {
    await startContentListener(); // deterministic: LISTEN before the write

    const server = app.listen(0, '127.0.0.1');
    await new Promise<void>((resolve) => server.once('listening', resolve));
    const address = server.address() as { port: number };
    const controller = new AbortController();

    try {
      const page = `live-${randomUUID().slice(0, 8)}`;
      const response = await fetch(
        `http://127.0.0.1:${address.port}${API}/content/blocks/${page}/stream`,
        { headers: { accept: 'text/event-stream' }, signal: controller.signal },
      );
      expect(response.status).toBe(200);
      expect(response.headers.get('content-type')).toContain('text/event-stream');

      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      const readUntil = async (match: (text: string) => boolean, what: string) => {
        const deadline = Date.now() + 5_000;
        while (!match(buffer)) {
          if (Date.now() > deadline)
            throw new Error(`timed out waiting for ${what}; got: ${buffer}`);
          const chunk = await Promise.race([
            reader.read(),
            new Promise<never>((_, reject) =>
              setTimeout(
                () => reject(new Error(`read timeout waiting for ${what}`)),
                deadline - Date.now(),
              ),
            ),
          ]);
          if (chunk.done) throw new Error('stream closed early');
          buffer += decoder.decode(chunk.value, { stream: true });
        }
      };

      await readUntil((text) => text.includes('event: connected'), 'connected event');

      const bearer = await adminBearer();
      const put = await request(app)
        .put(`${API}/content/blocks/${page}/hero.title`)
        .set('Authorization', bearer)
        .send({ type: 'text', value: 'live!' });
      expect(put.status).toBe(200);

      await readUntil(
        (text) => text.includes('event: content_changed') && text.includes(page),
        'content_changed event',
      );
    } finally {
      controller.abort();
      server.closeAllConnections();
      await new Promise<void>((resolve) => server.close(() => resolve()));
    }
  }, 15_000);
});
