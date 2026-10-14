import type { Metadata } from "next";

import { NewsManager } from "@/components/admin/managers";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Admin · Мэдээ",
};

export default function AdminNewsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Мэдээ" description="Мэдээ, зарлагууд." />
      <NewsManager />
    </div>
  );
}
