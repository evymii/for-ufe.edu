import { AdminShell } from "@/components/admin/admin-shell";
import { RequireAuth } from "@/components/shared/require-auth";

export default function AdminAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminShell>
      <RequireAuth requireAdmin>{children}</RequireAuth>
    </AdminShell>
  );
}
