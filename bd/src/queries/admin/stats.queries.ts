import { Prisma } from '../../generated/prisma/client.js';
import { prisma } from '../../lib/prisma.js';

export interface DailyCountRow {
  count: number;
  date: string;
}

export interface UserCounts {
  active: number;
  admins: number;
  total: number;
}

export function getDailyRegistrations(days: number): Promise<DailyCountRow[]> {
  return prisma.$queryRaw<DailyCountRow[]>(Prisma.sql`
    SELECT to_char(date_trunc('day', "createdAt"), 'YYYY-MM-DD') AS date, count(*)::int AS count
    FROM "User"
    WHERE "createdAt" >= now() - make_interval(days => ${days})
    GROUP BY 1
    ORDER BY 1
  `);
}

export async function getUserCounts(): Promise<UserCounts> {
  const [total, active, admins] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { isActive: true } }),
    prisma.user.count({ where: { role: 'ADMIN' } }),
  ]);
  return { active, admins, total };
}
