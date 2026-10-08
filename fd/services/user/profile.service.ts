import { api } from "@/lib/api-client";
import type { UpdateProfileValues } from "@/lib/validators/auth";
import type { User } from "@/types/api";

/** User-side profile API calls. */
export const profileService = {
  getProfile(): Promise<{ user: User }> {
    return api.get<{ user: User }>("/api/v1/user/profile");
  },

  updateProfile(input: UpdateProfileValues): Promise<{ user: User }> {
    return api.patch<{ user: User }>("/api/v1/user/profile", input);
  },
};
