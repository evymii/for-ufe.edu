import type { AdminStats, DailyCount } from '../../types/index.js';

import { REGISTRATION_CHART_DAYS } from '../../config/constants.js';
import { getDailyRegistrations, getUserCounts } from '../../queries/admin/stats.queries.js';

/** Totals + daily registration counts for the last N days (missing days zero-filled). */
export async function getStats(): Promise<AdminStats> {
  const [users, rows] = await Promise.all([
    getUserCounts(),
    getDailyRegistrations(REGISTRATION_CHART_DAYS),
  ]);

  const countByDate = new Map(rows.map((row) => [row.date, row.count]));
  const registrations: DailyCount[] = [];
  for (let daysAgo = REGISTRATION_CHART_DAYS - 1; daysAgo >= 0; daysAgo--) {
    const date = isoDay(daysAgo);
    registrations.push({ count: countByDate.get(date) ?? 0, date });
  }

  return { registrations, users };
}

function isoDay(offsetDaysAgo: number): string {
  return new Date(Date.now() - offsetDaysAgo * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}
