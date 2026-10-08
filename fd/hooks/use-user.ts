"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useAuth } from "@/providers/auth-provider";
import { profileService } from "@/services/user/profile.service";
import type { UpdateProfileValues } from "@/lib/validators/auth";

export const userKeys = {
  all: ["user"] as const,
  profile: () => [...userKeys.all, "profile"] as const,
};

export function useProfile() {
  const { status } = useAuth();
  return useQuery({
    queryKey: userKeys.profile(),
    queryFn: profileService.getProfile,
    enabled: status === "authenticated",
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: (input: UpdateProfileValues) =>
      profileService.updateProfile(input),
    onSuccess: ({ user }) => {
      setUser(user);
      void queryClient.invalidateQueries({ queryKey: userKeys.all });
    },
  });
}
