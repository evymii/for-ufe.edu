import { defineConfig } from 'vitest/config';

// Unit tests: node environment, everything DB-touching is mocked, so the
// env below only needs to satisfy the zod schema at boot.
export default defineConfig({
  test: {
    env: {
      BCRYPT_COST: '4',
      DATABASE_URL:
        process.env.DATABASE_URL ?? 'postgresql://ufeedu:ufeedu@localhost:5433/ufeedu_dev',
      JWT_ACCESS_SECRET:
        process.env.JWT_ACCESS_SECRET ?? 'unit-test-access-secret-0123456789abcdef012345',
      JWT_REFRESH_SECRET:
        process.env.JWT_REFRESH_SECRET ?? 'unit-test-refresh-secret-0123456789abcdef01234',
      NODE_ENV: 'test',
    },
    environment: 'node',
    include: ['tests/unit/**/*.test.ts'],
  },
});
