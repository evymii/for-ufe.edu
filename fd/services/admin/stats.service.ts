import { api } from "@/lib/api-client";
import type { AdminStats } from "@/types/api";

/** Admin-only dashboard statistics. */
export const adminStatsService = {
  getStats(): Promise<AdminStats> {
    return api.get<AdminStats>("/api/v1/admin/stats");
  },
};
