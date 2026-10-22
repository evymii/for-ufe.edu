import { createHash, randomUUID } from 'node:crypto';
import request from 'supertest';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// Cloudinary is mocked at the module boundary: the storage service's real
// logic (magic-byte checks, DB rows, delete reporting) runs against the real
// app + test database; only the network call to the provider is fake.
vi.mock('cloudinary', () => ({
  v2: {
    api: {
      resource: vi.fn(async (publicId: string) => ({
        bytes: 1_000,
        format: 'png',
        height: 4,
        public_id: publicId,
        secure_url: `https://res.cloudinary.com/test/image/upload/${publicId}.png`,
        width: 6,
      })),
    },
    config: vi.fn(),
    uploader: {
      destroy: vi.fn(async () => ({ result: 'ok' })),
      upload_stream: vi.fn(
        (_options: unknown, callback: (error: null, response: unknown) => void) => ({
          end: (buffer: Buffer) =>
            callback(null, {
              bytes: buffer.length,
              height: 4,
              public_id: `test-folder/e2e-${randomUUID()}`,
              secure_url: `https://res.cloudinary.com/test/image/upload/e2e-${randomUUID()}.png`,
              width: 6,
            }),
        }),
      ),
    },
  },
}));

import { v2 as cloudinary } from 'cloudinary';

import { prisma } from '../../src/lib/prisma.js';
import { createTestUser } from '../setup/factories.js';
import { API, app, login } from './helpers.js';

// 1x1 transparent PNG — real magic bytes, detected as image/png.
const PNG_BYTES = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
  'base64',
);

async function adminBearer(): Promise<string> {
  const res = await request(app).post(`${API}/user/auth/pin`).send({ code: '1234' });
  expect(res.status).toBe(200);
  return `Bearer ${res.body.data.accessToken as string}`;
}

const upload = (bearer: string) =>
  request(app)
    .post(`${API}/admin/media`)
    .set('Authorization', bearer)
    .field('alt', 'Test image')
    .attach('image', PNG_BYTES, { contentType: 'image/png', filename: 'photo.png' });

beforeEach(async () => {
  vi.mocked(cloudinary.uploader.destroy).mockClear();
  vi.mocked(cloudinary.api.resource).mockClear();
  await prisma.media.deleteMany({});
});

describe('POST /api/v1/admin/media (upload)', () => {
  it('stores a real PNG: 201, provider metadata, DB row', async () => {
    const bearer = await adminBearer();
    const res = await upload(bearer);

    expect(res.status).toBe(201);
    expect(res.body.data.media).toMatchObject({
      altText: 'Test image',
      mime: 'image/png',
      provider: 'cloudinary',
      sizeBytes: PNG_BYTES.length,
    });
    expect(res.body.data.media.url).toMatch(/^https:\/\//);

    const rows = await prisma.media.count();
    expect(rows).toBe(1);
  });

  it('rejects an unauthenticated request with 401', async () => {
    const res = await request(app)
      .post(`${API}/admin/media`)
      .attach('image', PNG_BYTES, { contentType: 'image/png', filename: 'x.png' });

    expect(res.status).toBe(401);
  });

  it('rejects a USER-role token with 403', async () => {
    const user = await createTestUser();
    const session = await login(user.email, user.password);

    const res = await request(app)
      .post(`${API}/admin/media`)
      .set('Authorization', `Bearer ${session.accessToken}`)
      .attach('image', PNG_BYTES, { contentType: 'image/png', filename: 'x.png' });

    expect(res.status).toBe(403);
  });

  it('rejects a fake .jpg whose bytes are an executable (magic-byte check)', async () => {
    const bearer = await adminBearer();
    const exeBytes = Buffer.concat([Buffer.from('MZ'), Buffer.alloc(64, 0x41)]);

    const res = await request(app)
      .post(`${API}/admin/media`)
      .set('Authorization', bearer)
      .attach('image', exeBytes, { contentType: 'image/jpeg', filename: 'evil.jpg' });

    expect(res.status).toBe(400);
    expect(await prisma.media.count()).toBe(0);
  });

  it('rejects SVG regardless of the declared content type', async () => {
    const bearer = await adminBearer();
    const svg = Buffer.from(
      '<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>',
    );

    const res = await request(app)
      .post(`${API}/admin/media`)
      .set('Authorization', bearer)
      .attach('image', svg, { contentType: 'image/svg+xml', filename: 'icon.svg' });

    expect(res.status).toBe(400);
  });

  it('rejects an oversized file with 413 (MAX_UPLOAD_MB=1 in tests)', async () => {
    const bearer = await adminBearer();
    const big = Buffer.concat([PNG_BYTES, Buffer.alloc(1_100_000, 0)]);

    const res = await request(app)
      .post(`${API}/admin/media`)
      .set('Authorization', bearer)
      .attach('image', big, { contentType: 'image/png', filename: 'big.png' });

    expect(res.status).toBe(413);
    expect(res.body.error.code).toBe('FILE_TOO_LARGE');
  });

  it('rejects a request without a file part', async () => {
    const bearer = await adminBearer();
    const res = await request(app).post(`${API}/admin/media`).set('Authorization', bearer);

    expect(res.status).toBe(400);
  });
});

describe('GET /api/v1/admin/media (list)', () => {
  it('paginates uploaded media', async () => {
    const bearer = await adminBearer();
    await upload(bearer);
    await upload(bearer);

    const res = await request(app)
      .get(`${API}/admin/media?limit=1&offset=0`)
      .set('Authorization', bearer);

    expect(res.status).toBe(200);
    expect(res.body.data.items).toHaveLength(1);
    expect(res.body.data.pagination).toMatchObject({ limit: 1, offset: 0, total: 2 });
  });
});

describe('PATCH /api/v1/admin/media/:id (alt text)', () => {
  it('updates alt text', async () => {
    const bearer = await adminBearer();
    const uploaded = await upload(bearer);

    const res = await request(app)
      .patch(`${API}/admin/media/${uploaded.body.data.media.id as string}`)
      .set('Authorization', bearer)
      .send({ alt: 'СЭЗИС багийн лого' });

    expect(res.status).toBe(200);
    expect(res.body.data.media.altText).toBe('СЭЗИС багийн лого');
  });

  it('rejects empty alt and unknown ids', async () => {
    const bearer = await adminBearer();
    const uploaded = await upload(bearer);

    const empty = await request(app)
      .patch(`${API}/admin/media/${uploaded.body.data.media.id as string}`)
      .set('Authorization', bearer)
      .send({ alt: '' });
    expect(empty.status).toBe(400);

    const missing = await request(app)
      .patch(`${API}/admin/media/ffffffffffffffffffffffff`)
      .set('Authorization', bearer)
      .send({ alt: 'x' });
    expect(missing.status).toBe(404);
  });
});

describe('DELETE /api/v1/admin/media/:id', () => {
  it('deletes the DB row AND the provider asset', async () => {
    const bearer = await adminBearer();
    const uploaded = await upload(bearer);
    const id = uploaded.body.data.media.id as string;
    const publicId = uploaded.body.data.media.publicId as string;

    const res = await request(app).delete(`${API}/admin/media/${id}`).set('Authorization', bearer);

    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({ assetDeleted: true, id });
    expect(cloudinary.uploader.destroy).toHaveBeenCalledWith(
      publicId,
      expect.objectContaining({ invalidate: true }),
    );
    expect(await prisma.media.count()).toBe(0);
  });

  it('reports (does not hide) a failed provider delete as an orphaned asset', async () => {
    const bearer = await adminBearer();
    const uploaded = await upload(bearer);
    vi.mocked(cloudinary.uploader.destroy).mockRejectedValueOnce(new Error('provider down'));

    const res = await request(app)
      .delete(`${API}/admin/media/${uploaded.body.data.media.id as string}`)
      .set('Authorization', bearer);

    expect(res.status).toBe(200);
    expect(res.body.data.assetDeleted).toBe(false); // surfaced to the admin UI
    expect(await prisma.media.count()).toBe(0); // row still deleted
  });

  it('404s for unknown ids', async () => {
    const bearer = await adminBearer();
    const res = await request(app)
      .delete(`${API}/admin/media/ffffffffffffffffffffffff`)
      .set('Authorization', bearer);

    expect(res.status).toBe(404);
  });
});

describe('POST /api/v1/admin/media/direct-params (signed direct upload)', () => {
  it('returns params whose signature matches Cloudinary’s sha1(folder&timestamp + secret) scheme', async () => {
    const bearer = await adminBearer();

    const res = await request(app)
      .post(`${API}/admin/media/direct-params`)
      .set('Authorization', bearer)
      .send({});

    expect(res.status).toBe(200);
    const params = res.body.data.params as {
      apiKey: string;
      cloudName: string;
      folder: string;
      signature: string;
      timestamp: number;
    };
    expect(params).toMatchObject({
      apiKey: 'test-key',
      cloudName: 'test-cloud',
      folder: 'test-folder/uploads',
    });
    const expected = createHash('sha1')
      .update(`folder=${params.folder}&timestamp=${params.timestamp}test-secret`)
      .digest('hex');
    expect(params.signature).toBe(expected);
  });

  it('accepts a valid subfolder but rejects an arbitrary one', async () => {
    const bearer = await adminBearer();

    const ok = await request(app)
      .post(`${API}/admin/media/direct-params`)
      .set('Authorization', bearer)
      .send({ folder: 'brand' });
    expect(ok.status).toBe(200);
    expect(ok.body.data.params).toMatchObject({ folder: 'test-folder/brand' });

    const bad = await request(app)
      .post(`${API}/admin/media/direct-params`)
      .set('Authorization', bearer)
      .send({ folder: 'Not_A-Folder' });
    expect(bad.status).toBe(400);
  });

  it('rejects unauthenticated (401) and USER-role (403) requests', async () => {
    const anon = await request(app).post(`${API}/admin/media/direct-params`).send({});
    expect(anon.status).toBe(401);

    const user = await createTestUser();
    const session = await login(user.email, user.password);
    const forbidden = await request(app)
      .post(`${API}/admin/media/direct-params`)
      .set('Authorization', `Bearer ${session.accessToken}`)
      .send({});
    expect(forbidden.status).toBe(403);
  });
});

describe('POST /api/v1/admin/media/register (direct upload, step 2)', () => {
  it('creates a media row from provider-verified asset data', async () => {
    const bearer = await adminBearer();

    const res = await request(app)
      .post(`${API}/admin/media/register`)
      .set('Authorization', bearer)
      .send({ alt: 'Direct upload', publicId: 'test-folder/uploads/e2e-direct-1' });

    expect(res.status).toBe(201);
    // Metadata comes from the Cloudinary Admin API mock, not the client body.
    expect(res.body.data.media).toMatchObject({
      altText: 'Direct upload',
      folder: 'uploads',
      mime: 'image/png',
      provider: 'cloudinary',
      publicId: 'test-folder/uploads/e2e-direct-1',
      sizeBytes: 1_000,
      url: 'https://res.cloudinary.com/test/image/upload/test-folder/uploads/e2e-direct-1.png',
    });
    expect(await prisma.media.count()).toBe(1);
  });

  it('rejects a publicId outside this server’s folder', async () => {
    const bearer = await adminBearer();

    const res = await request(app)
      .post(`${API}/admin/media/register`)
      .set('Authorization', bearer)
      .send({ publicId: 'evil-folder/uploads/x' });

    expect(res.status).toBe(400);
    expect(await prisma.media.count()).toBe(0);
  });

  it('rejects an asset Cloudinary does not know about', async () => {
    const bearer = await adminBearer();
    vi.mocked(cloudinary.api.resource).mockRejectedValueOnce(new Error('not found'));

    const res = await request(app)
      .post(`${API}/admin/media/register`)
      .set('Authorization', bearer)
      .send({ publicId: 'test-folder/uploads/never-uploaded' });

    expect(res.status).toBe(400);
  });

  it('rejects a non-allowlisted format (e.g. SVG)', async () => {
    const bearer = await adminBearer();
    vi.mocked(cloudinary.api.resource).mockResolvedValueOnce({
      bytes: 100,
      format: 'svg',
      height: 4,
      secure_url: 'https://res.cloudinary.com/test/image/upload/x.svg',
      width: 6,
    });

    const res = await request(app)
      .post(`${API}/admin/media/register`)
      .set('Authorization', bearer)
      .send({ publicId: 'test-folder/uploads/x' });

    expect(res.status).toBe(400);
    expect(await prisma.media.count()).toBe(0);
  });

  it('rejects an oversized asset with 413 AND deletes it from the provider', async () => {
    const bearer = await adminBearer();
    vi.mocked(cloudinary.api.resource).mockResolvedValueOnce({
      bytes: 2_000_000, // MAX_UPLOAD_MB=1 in tests
      format: 'png',
      height: 4,
      secure_url: 'https://res.cloudinary.com/test/image/upload/big.png',
      width: 6,
    });

    const res = await request(app)
      .post(`${API}/admin/media/register`)
      .set('Authorization', bearer)
      .send({ publicId: 'test-folder/uploads/big' });

    expect(res.status).toBe(413);
    expect(res.body.error.code).toBe('FILE_TOO_LARGE');
    expect(cloudinary.uploader.destroy).toHaveBeenCalledWith(
      'test-folder/uploads/big',
      expect.objectContaining({ invalidate: true }),
    );
    expect(await prisma.media.count()).toBe(0);
  });

  it('rejects an unauthenticated request with 401', async () => {
    const res = await request(app)
      .post(`${API}/admin/media/register`)
      .send({ publicId: 'test-folder/uploads/x' });

    expect(res.status).toBe(401);
  });
});
