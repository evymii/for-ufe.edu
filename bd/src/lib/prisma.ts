import { PrismaClient } from '../generated/prisma/client.js';

// The ONLY place a PrismaClient is instantiated. Everything else imports `prisma`.
// MongoDB needs no driver adapter — Prisma's built-in MongoDB driver is used.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createPrismaClient(): PrismaClient {
  return new PrismaClient();
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
