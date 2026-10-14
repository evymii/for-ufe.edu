import { redirect } from "next/navigation";

/** History text now lives under the per-page text editors. */
export default function AdminHistoryPage() {
  redirect("/admin/text/history");
}
