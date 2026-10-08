import { PrismaPg } from '@prisma/adapter-pg';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import 'dotenv/config';
import { fileURLToPath } from 'node:url';

import { PrismaClient } from '../../src/generated/prisma/client.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL ?? 'postgresql://ufeedu:ufeedu@localhost:5434/ufeedu_test';

/**
 * Applies migrations to the test database (via the Prisma CLI, exactly what
 * production deploy uses) and then truncates all tables so every suite run
 * starts from a clean, deterministic state.
 */
export async function resetTestDatabase(): Promise<void> {
  const bdRoot = path.resolve(__dirname, '../..');

  const migrated = spawnSync(
    process.platform === 'win32' ? 'npx.cmd' : 'npx',
    ['prisma', 'migrate', 'deploy'],
    {
      cwd: bdRoot,
      env: { ...process.env, DATABASE_URL: TEST_DATABASE_URL },
      stdio: 'inherit',
    },
  );
  if (migrated.status !== 0) {
    throw new Error(
      'prisma migrate deploy failed for the test database — is docker compose up? (postgres-test on :5434)',
    );
  }

  const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: TEST_DATABASE_URL }),
  });
  try {
    await prisma.$executeRawUnsafe('TRUNCATE "RefreshToken", "User" CASCADE');
  } finally {
    await prisma.$disconnect();
  }
}
