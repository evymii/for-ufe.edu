"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useAuth } from "@/providers/auth-provider";
import {
  adminContentService,
  newsletterAdminService,
} from "@/services/admin/content.service";

/** Query keys for the CMS panels. */
export const contentAdminKeys = {
  all: ["admin", "content"] as const,
  resource: (key: string) => [...contentAdminKeys.all, key] as const,
  pageCopy: (page: string) =>
    [...contentAdminKeys.all, "page-copy", page] as const,
  subscribers: () => [...contentAdminKeys.all, "subscribers"] as const,
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

export function usePageCopy(page: string) {
  const { user } = useAuth();
  return useQuery({
    queryKey: contentAdminKeys.pageCopy(page),
    queryFn: () => adminContentService.getPageCopy(page),
    enabled: user?.role === "ADMIN",
  });
}

export function usePutPageCopy(page: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      section,
      data,
    }: {
      section: string;
      data: Record<string, unknown>;
    }) => adminContentService.putPageCopy(page, section, data),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: contentAdminKeys.pageCopy(page),
      });
    },
  });
}

export function useSubscribers() {
  const { user } = useAuth();
  return useQuery({
    queryKey: contentAdminKeys.subscribers(),
    queryFn: () => newsletterAdminService.list(),
    enabled: user?.role === "ADMIN",
  });
}

export function useDeleteSubscriber() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => newsletterAdminService.remove(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: contentAdminKeys.subscribers(),
      });
    },
  });
}
