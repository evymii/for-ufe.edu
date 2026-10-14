"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useAuth } from "@/providers/auth-provider";
import {
  adminContentService,
  contactInboxService,
  newsletterAdminService,
} from "@/services/admin/content.service";

/** Query keys for the CMS panels. */
export const contentAdminKeys = {
  all: ["admin", "content"] as const,
  resource: (key: string) => [...contentAdminKeys.all, key] as const,
  subscribers: () => [...contentAdminKeys.all, "subscribers"] as const,
  inbox: () => [...contentAdminKeys.all, "contact-inbox"] as const,
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

export function useContactInbox() {
  const { user } = useAuth();
  return useQuery({
    queryKey: contentAdminKeys.inbox(),
    queryFn: () => contactInboxService.list(),
    enabled: user?.role === "ADMIN",
  });
}

export function useMarkContactRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, isRead }: { id: string; isRead: boolean }) =>
      contactInboxService.markRead(id, isRead),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: contentAdminKeys.inbox(),
      });
    },
  });
}

export function useDeleteContactMessage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => contactInboxService.remove(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: contentAdminKeys.inbox(),
      });
    },
  });
}
