# ufeedu

Monorepo for the UFE basketball team platform.

- `fd/` — frontend: Next.js 16 + React 19 + Tailwind CSS 4
- `bd/` — backend: Express 5 + TypeScript + MongoDB (Prisma) + Cloudinary
- Root `docker-compose.yml` — local MongoDB (dev :27018, test :27019, replica sets)

Requires Node 22 (`.nvmrc`) and Docker.

## Quick start

```bash
docker compose up -d    # MongoDB (dev :27018, test :27019)

cd bd
cp .env.example .env
npm install
npm run db:migrate      # push Prisma schema to MongoDB
npm run db:seed         # staff accounts only — no demo data
npm run dev             # http://localhost:4010

cd ../fd
cp .env.example .env.local
npm install
npm run dev             # http://localhost:3000
```

## Commands

Run from `bd/` or `fd/`:

| Command                                      | What it does                                |
| -------------------------------------------- | ------------------------------------------- |
| `npm run dev` / `build` / `start`            | Dev server, production build, run the build |
| `npm run lint` / `type-check`                | ESLint / TypeScript                         |
| `npm test` / `npm run test:e2e`              | Vitest units; e2e: Vitest (bd), Playwright (fd) |
| `npm run verify`                             | Format + lint + types + tests + build       |

Backend-only (`bd/`): `db:migrate` / `db:deploy` (push schema), `db:generate` (regenerate client), `db:seed` (bootstrap staff logins), `db:reset:test` (reset test DB).

Docker: `docker compose up -d` · `down` (keep data) · `down -v` (wipe).

## Configuration

`bd/.env` (copy from `.env.example`):

- `DATABASE_URL` / `TEST_DATABASE_URL` — MongoDB connection strings (dev / e2e test).
- `STORAGE_PROVIDER=cloudinary` + the four `CLOUDINARY_*` values — enables media uploads (Cloudinary dashboard → Settings → API Keys; the API secret is server-only). Left unset, media endpoints return 503.
- `STAFF_PASSWORD` — shared password for the seeded admin logins; rotate for production.

**Admin access:** log in as `manager` / `editor` / `edumanager` (all ADMIN, same admin side), or `POST /api/v1/user/auth/pin` with `ADMIN_PIN_CODE` (4–8 digits; empty disables; production refuses the default `1234`). Both issue the same JWT session.

**Content & media:** live site text is stored per `page/key/locale` — public at `GET /api/v1/content/blocks/:page` (with SSE live updates via `/stream`), edited through the admin block endpoints (single-value `PUT`, defaults `ensure`, `history` audit). Media uploads (`POST /api/v1/admin/media`) are magic-byte verified, capped by `MAX_UPLOAD_MB`, and deleting a media row also deletes the Cloudinary asset.
