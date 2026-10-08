import 'dotenv/config';
import { defineConfig } from 'vitest/config';

// E2E tests run the real app against the real TEST database (see
// docker-compose.yml, service `postgres-test`). The global setup resets and
// migrates it before the suite; DATABASE_URL is pointed at the test instance
// BEFORE any module (including the Prisma singleton) is imported.
const TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL ?? 'postgresql://ufeedu:ufeedu@localhost:5434/ufeedu_test';

export default defineConfig({
  test: {
    env: {
      AUTH_RATE_LIMIT_MAX: '1000',
      // Cheap hashing and generous rate limits so the suite is fast and never
      // trips the limiter — the limiter itself has its own unit-level coverage.
      BCRYPT_COST: '4',
      DATABASE_URL: TEST_DATABASE_URL,
      JWT_ACCESS_SECRET:
        process.env.JWT_ACCESS_SECRET ?? 'e2e-test-access-secret-0123456789abcdef0123456',
      JWT_REFRESH_SECRET:
        process.env.JWT_REFRESH_SECRET ?? 'e2e-test-refresh-secret-0123456789abcdef012345',
      NODE_ENV: 'test',
      RATE_LIMIT_MAX: '10000',
    },
    environment: 'node',
    globalSetup: './tests/setup/e2e-global-setup.ts',
    hookTimeout: 120_000,
    include: ['tests/e2e/**/*.e2e.test.ts'],
    testTimeout: 30_000,
  },
});
