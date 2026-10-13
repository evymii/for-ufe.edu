import type { Metadata } from "next";

import { AdminStatsPanel } from "@/components/admin/stats-panel";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Admin dashboard",
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Admin dashboard"
        description="Live totals and the last 14 days of registrations."
      />
      <AdminStatsPanel />
    </div>
  );
}
