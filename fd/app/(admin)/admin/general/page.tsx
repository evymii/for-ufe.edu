import type { Metadata } from "next";

import { GeneralManager } from "@/components/admin/general-manager";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Admin · Ерөнхий мэдээлэл",
};

export default function AdminGeneralPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Ерөнхий мэдээлэл"
        description="Лого болон холбоо барих мэдээлэл."
      />
      <GeneralManager />
    </div>
  );
}
