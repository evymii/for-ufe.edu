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
| `npm run db:generate`  | Regenerate the Prisma client          |
| `npm run db:seed`      | Seed demo data                        |
| `npm run db:reset:test`| Reset the test database               |

Docker (from repo root):

```bash
docker compose up -d    # start Postgres
docker compose down     # stop (keeps data)
docker compose down -v  # stop and wipe data
```
