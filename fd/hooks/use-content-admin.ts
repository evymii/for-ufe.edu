"use client";

import { useQuery } from "@tanstack/react-query";

import { useAuth } from "@/providers/auth-provider";
import { adminContentService } from "@/services/admin/content.service";

/** Query keys for the CMS panels. */
export const contentAdminKeys = {
  all: ["admin", "content"] as const,
  resource: (key: string) => [...contentAdminKeys.all, key] as const,
};

export function useContentResource(
  key: string,
  endpoint: string,
  query: Record<string, string> = {},
) {
  const { user } = useAuth();
  return useQuery({
    queryKey: [...contentAdminKeys.resource(key), query],
    queryFn: () =>
      adminContentService.list<Record<string, unknown>>(endpoint, query),
    enabled: user?.role === "ADMIN",
  });
}
