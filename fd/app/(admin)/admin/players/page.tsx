import type { Metadata } from "next";

import { PlayersManager } from "@/components/admin/managers";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Admin · Тоглогчид",
};

export default function AdminPlayersPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Тоглогчид"
        description="Багийн бүрэлдэхүүн — тоглогчид."
      />
      <PlayersManager />
    </div>
  );
}
