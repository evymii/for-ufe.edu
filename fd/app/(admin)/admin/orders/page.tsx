import type { Metadata } from "next";

import { OrdersManager } from "@/components/admin/orders-manager";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Admin · Захиалгууд",
};

export default function AdminOrdersPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Захиалгууд"
        description="Дэлгүүрийн захиалгууд — төлөв, устгалт."
      />
      <OrdersManager />
    </div>
  );
}
