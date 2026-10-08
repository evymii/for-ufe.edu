import { RequireAuth } from "@/components/shared/require-auth";
import { UserShell } from "@/components/user/user-shell";

export default function UserAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserShell>
      <RequireAuth>{children}</RequireAuth>
    </UserShell>
  );
}
