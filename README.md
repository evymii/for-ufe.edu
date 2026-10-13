# ufeedu

Monorepo for ufeedu — an education platform.

- `fd/` — frontend: Next.js 16 + React 19 + Tailwind CSS 4
- `bd/` — backend: Express 5 + TypeScript + PostgreSQL (Prisma)
- Root `docker-compose.yml` — local Postgres instances (dev on port 5433, test on 5434)

Requires Node 22 (see `.nvmrc`) and Docker.

## Quick start

```bash
# 1. Start local Postgres (dev :5433, test :5434)
docker compose up -d

# 2. Backend
cd bd
cp .env.example .env
npm install
npm run db:migrate     # create schema
npm run db:seed        # optional: seed demo accounts
npm run dev            # http://localhost:4000

# 3. Frontend (new terminal)
cd fd
cp .env.example .env.local
npm install
npm run dev            # http://localhost:3000
```

## Common commands

Run from `bd/` or `fd/` respectively:

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start dev server (bd: 4000, fd: 3000)     |
| `npm run build`   | Production build                          |
| `npm run start`   | Run the production build                  |
| `npm run lint`    | ESLint check                              |
| `npm run type-check` | TypeScript check                       |
| `npm test`        | Unit tests (Vitest)                       |
| `npm run test:e2e` | E2E tests (bd: Vitest, fd: Playwright)   |
| `npm run verify`  | Format + lint + types + tests + build     |

Backend-only (from `bd/`):

| Command                | What it does                          |
| ---------------------- | ------------------------------------- |
| `npm run db:migrate`   | Create/apply a dev migration          |
| `npm run db:deploy`    | Apply pending migrations (CI/prod)    |
| `npm run db:generate`  | Regenerate the Prisma client          |
| `npm run db:seed`      | Seed demo data                        |
| `npm run db:reset:test`| Reset the test database               |

Media uploads go through **Cloudinary** — set `STORAGE_PROVIDER=cloudinary`
plus the four `CLOUDINARY_*` variables in `bd/.env` (Cloudinary dashboard →
Settings → API Keys; the API secret is server-only and never goes in the
frontend or git). Leaving storage unconfigured disables the media endpoints
(503). Set `DATABASE_SSL=true` when the database host requires TLS (not
needed for local docker Postgres).

**Admin login (dev):** `POST /api/v1/user/auth/pin` with `{"code": "..."}` —
the code comes from `ADMIN_PIN_CODE` in `bd/.env` (4–8 digits; empty disables
the route; production refuses to boot on the default `1234`). It issues the
same JWT session as email/password login.

**Live site text (content blocks):** text is stored per
`page/key/locale` and edited without redeploys:

| Endpoint | Who | What |
| ------------------------------- | ------ | --------------------------------- |
| `GET /api/v1/content/blocks/:page?locale=mn` | public | all values as `{ key: value }` |
| `GET /api/v1/content/blocks/:page/stream` | public | SSE live updates (25s heartbeat) |
| `PUT /api/v1/content/blocks/:page/:key` | admin | edit one value (history + notify) |
| `POST /api/v1/content/blocks/:page/ensure` | admin | register defaults, never overwrites |
| `GET /api/v1/content/blocks/:page/history` | admin | audit trail with old values |
| `GET /api/v1/content/blocks` | admin | page overview: counts + last update |
| `GET /api/v1/content/blocks/:page/blocks?locale=` | admin | per-block metadata for the editor |

**Media library (Cloudinary, admin):** block types are `text | richtext | json
| image` (image = a single http(s) URL). Uploads are magic-byte verified
(JPEG/PNG/WebP/GIF/AVIF only, SVG rejected), size-capped by `MAX_UPLOAD_MB`,
stored with random public ids, and deleting a media row also deletes the
Cloudinary asset (a failed provider delete is logged and reported, never
silent):

| Endpoint | Who | What |
| ------------------------------- | ------ | --------------------------------- |
| `GET /api/v1/admin/media?limit&offset` | admin | paginated library |
| `POST /api/v1/admin/media` (multipart `image`, `alt`, `folder`) | admin | upload |
| `PATCH /api/v1/admin/media/:id` `{alt}` | admin | edit alt text |
| `DELETE /api/v1/admin/media/:id` | admin | delete row + asset |

Docker (from repo root):

```bash
docker compose up -d    # start Postgres
docker compose down     # stop (keeps data)
docker compose down -v  # stop and wipe data
```
