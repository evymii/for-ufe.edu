"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/providers/auth-provider";

/**
 * Client-side guard for authenticated areas. middleware.ts already blocks
 * most unauthenticated traffic at the edge; this catches the remaining race
 * (e.g. session revoked while a tab stayed open) and redirects to /login.
 */
export function RequireAuth({
  children,
  requireAdmin = false,
}: {
  children: React.ReactNode;
  requireAdmin?: boolean;
}) {
  const { status, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status !== "authenticated" || (requireAdmin && user?.role !== "ADMIN")) {
    return (
      <div className="space-y-4 p-6" aria-busy="true" aria-label="Loading">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  return <>{children}</>;
}
