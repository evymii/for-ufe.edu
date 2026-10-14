import type { Metadata } from "next";

import { VideosManager } from "@/components/admin/managers";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Admin · Бичлэгүүд",
};

export default function AdminVideosPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Бичлэгүүд" description="Бичлэгүүдийн сан." />
      <VideosManager />
    </div>
  );
}
