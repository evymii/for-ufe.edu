import type { Metadata } from "next";

import { ShopManager } from "@/components/admin/managers";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Admin · Дэлгүүр",
};

export default function AdminShopPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Дэлгүүр" description="Мерчийн бүтээгдэхүүнүүд." />
      <ShopManager />
    </div>
  );
}
