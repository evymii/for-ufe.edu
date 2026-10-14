import type { Metadata } from "next";

import { GalleryManager } from "@/components/admin/managers";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Admin · Галерей",
};

export default function AdminGalleryPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Галерей" description="Фото цомгууд." />
      <GalleryManager />
    </div>
  );
}
