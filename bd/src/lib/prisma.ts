import { PrismaPg } from '@prisma/adapter-pg';

import { env } from '../config/env.js';
import { PrismaClient } from '../generated/prisma/client.js';

// The ONLY place a PrismaClient is instantiated. Everything else imports `prisma`.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createPrismaClient(): PrismaClient {
  const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
  return new PrismaClient({
    adapter,
    log: env.isDev ? ['warn', 'error'] : ['error'],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (!env.isProd) {
  globalForPrisma.prisma = prisma;
}
