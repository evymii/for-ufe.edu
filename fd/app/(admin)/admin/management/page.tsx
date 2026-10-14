import type { Metadata } from "next";

import { ManagementManager } from "@/components/admin/managers";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Admin · Удирдлага",
};

export default function AdminManagementPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Удирдлага"
        description="Front office — удирдлагын бүрэлдэхүүн."
      />
      <ManagementManager />
    </div>
  );
}
