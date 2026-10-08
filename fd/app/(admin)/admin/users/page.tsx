import type { Metadata } from "next";

import { UsersTable } from "@/components/admin/users-table";

export const metadata: Metadata = {
  title: "Admin · Users",
};

export default function AdminUsersPage() {
  return <UsersTable />;
}
