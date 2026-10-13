import type { Metadata } from "next";

import { ContentManager } from "@/components/admin/content/content-manager";

export const metadata: Metadata = {
  title: "Admin · Агуулга",
};

export default function AdminContentPage() {
  return <ContentManager />;
}
