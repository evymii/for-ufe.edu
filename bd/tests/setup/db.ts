import { spawnSync } from 'node:child_process';
import path from 'node:path';
import 'dotenv/config';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL ??
  'mongodb://ufeedu:ufeedu@localhost:27019/ufeedu_test?authSource=admin&directConnection=true';

/**
 * Resets the test MongoDB: `prisma db push --force-reset` drops the database
 * and re-applies the schema in one step, so every suite run starts from a
 * clean, deterministic state. (MongoDB has no migration history to deploy.)
 */
export async function resetTestDatabase(): Promise<void> {
  const bdRoot = path.resolve(__dirname, '../..');

  const pushed = spawnSync(
    process.platform === 'win32' ? 'npx.cmd' : 'npx',
    ['prisma', 'db', 'push', '--force-reset', '--skip-generate'],
    {
      cwd: bdRoot,
      env: { ...process.env, DATABASE_URL: TEST_DATABASE_URL },
      stdio: 'inherit',
    },
  );
  if (pushed.status !== 0) {
    throw new Error(
      'prisma db push failed for the test database — is docker compose up? (mongo-test on :27019, replica set initiated?)',
    );
  }
}
