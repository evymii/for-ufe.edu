import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  ACCESS_TOKEN_TTL: z.string().default('15m'),
  ADMIN_EMAIL: z.string().default('admin@ufeedu.local'),
  ADMIN_NAME: z.string().default('Site Admin'),
  ADMIN_PASSWORD: z.string().min(8).default('Admin123!'),
  AUTH_RATE_LIMIT_MAX: z.coerce.number().int().min(1).default(20),
  BCRYPT_COST: z.coerce.number().int().min(4).max(15).default(12),
  COOKIE_DOMAIN: z.string().optional(),
  CORS_ORIGIN: z.string().default('http://localhost:3000'),
  DATABASE_URL: z.string().min(1, 'is required — copy .env.example to .env (see README)'),
  DEMO_USER_EMAIL: z.string().default('demo@ufeedu.local'),
  DEMO_USER_PASSWORD: z.string().min(8).default('Demo123!'),
  JWT_ACCESS_SECRET: z.string().min(32, 'must be at least 32 characters'),
  JWT_REFRESH_SECRET: z.string().min(32, 'must be at least 32 characters'),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  RATE_LIMIT_MAX: z.coerce.number().int().min(1).default(300),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().int().min(1_000).default(900_000),
  REFRESH_TOKEN_TTL_DAYS: z.coerce.number().int().min(1).max(90).default(7),
  TEST_DATABASE_URL: z.string().min(1).optional(),
});

function loadEnv() {
  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error('❌ Invalid or missing environment variables:');
    for (const issue of parsed.error.issues) {
      console.error(`   • ${issue.path.join('.') || '(root)'}: ${issue.message}`);
    }
    console.error('   Fix bd/.env (see bd/.env.example) and restart.');
    process.exit(1);
  }

  const data = parsed.data;
  return {
    ...data,
    CORS_ORIGINS: data.CORS_ORIGIN.split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
    isDev: data.NODE_ENV === 'development',
    isProd: data.NODE_ENV === 'production',
    isTest: data.NODE_ENV === 'test',
  };
}

export const env = loadEnv();
export type Env = ReturnType<typeof loadEnv>;
