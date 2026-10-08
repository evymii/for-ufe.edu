"use client";

import { useState } from "react";
import { Loader2, Search } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAdminUsers, useSetUserStatus } from "@/hooks/use-admin";
import { ApiClientError } from "@/lib/api-client";
import type { User } from "@/types/api";
import { toast } from "sonner";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function UserStatusBadge({ user }: { user: User }) {
  return user.isActive ? (
    <Badge variant="outline">Active</Badge>
  ) : (
    <Badge variant="secondary">Inactive</Badge>
  );
}

export function UsersTable() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const { data, isPending, isError, error, refetch, isFetching } =
    useAdminUsers({
      page,
      pageSize: 10,
      search: submittedSearch || undefined,
    });
  const setStatus = useSetUserStatus();

  function onSearchSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setPage(1);
    setSubmittedSearch(search.trim());
  }

  function onToggleStatus(user: User): void {
    setStatus.mutate(
      { id: user.id, isActive: !user.isActive },
      {
        onSuccess: ({ user: updated }) => {
          toast.success(
            `${updated.email} is now ${updated.isActive ? "active" : "inactive"}`,
          );
        },
        onError: (mutationError) => {
          const message =
            mutationError instanceof ApiClientError
              ? mutationError.message
              : "Could not update the user";
          toast.error(message);
        },
      },
    );
  }

  return (
    <div className="space-y-4">
      <PageHeader
        title="Users"
        description="Search, browse and activate or deactivate accounts. Changes take effect immediately."
      />

      <form
        onSubmit={onSearchSubmit}
        className="flex max-w-sm gap-2"
        role="search"
      >
        <div className="relative flex-1">
          <Search
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2"
            aria-hidden="true"
          />
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by email or name…"
            aria-label="Search users"
            className="pl-8"
          />
        </div>
        <Button type="submit" variant="outline" disabled={isFetching}>
          Search
        </Button>
      </form>

      {isPending ? (
        <div className="space-y-2" aria-busy="true" aria-label="Loading users">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-12 w-full" />
          ))}
        </div>
      ) : isError ? (
        <div
          className="text-destructive flex flex-col gap-2 text-sm"
          role="alert"
        >
          <p>
            {error instanceof ApiClientError
              ? error.message
              : "Failed to load users."}
          </p>
          <Button
            variant="outline"
            className="w-fit"
            onClick={() => void refetch()}
          >
            Try again
          </Button>
        </div>
      ) : !data || data.items.length === 0 ? (
        <p
          className="text-muted-foreground py-12 text-center text-sm"
          role="status"
        >
          No users match your search.
        </p>
      ) : (
        <>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.items.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      {user.name ?? "—"}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant={user.role === "ADMIN" ? "default" : "outline"}
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <UserStatusBadge user={user} />
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(user.createdAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        variant={user.isActive ? "destructive" : "default"}
                        disabled={setStatus.isPending}
                        onClick={() => onToggleStatus(user)}
                      >
                        {setStatus.isPending ? (
                          <Loader2
                            className="animate-spin"
                            aria-hidden="true"
                          />
                        ) : null}
                        {user.isActive ? "Deactivate" : "Activate"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div
            className="flex items-center justify-between gap-2"
            aria-label="Pagination"
          >
            <p className="text-muted-foreground text-sm">
              Page {data.meta.page} of {data.meta.totalPages} ·{" "}
              {data.meta.total} users
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={!data.meta.hasPrev}
                onClick={() => setPage((p) => p - 1)}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={!data.meta.hasNext}
                onClick={() => setPage((p) => p + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
