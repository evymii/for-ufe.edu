import type { Metadata } from "next";

import { StaffManager } from "@/components/admin/managers";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Admin · Багийн ажилчид",
};

export default function AdminStaffPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Багийн ажилчид"
        description="Дасгалжуулагчид, багийн ажилтнууд."
      />
      <StaffManager />
    </div>
  );
}
