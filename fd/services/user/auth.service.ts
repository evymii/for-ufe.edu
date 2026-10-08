import { api, refreshSession } from "@/lib/api-client";
import type { AuthPayload, User } from "@/types/api";

/** User-side auth API calls (register/login/logout/me/refresh). */
export const authService = {
  register(input: {
    name: string;
    email: string;
    password: string;
  }): Promise<AuthPayload> {
    return api.post<AuthPayload>("/api/v1/user/auth/register", input);
  },

  login(input: { email: string; password: string }): Promise<AuthPayload> {
    return api.post<AuthPayload>("/api/v1/user/auth/login", input);
  },

  logout(): Promise<{ loggedOut: boolean }> {
    return api.post<{ loggedOut: boolean }>("/api/v1/user/auth/logout");
  },

  me(): Promise<{ user: User }> {
    return api.get<{ user: User }>("/api/v1/user/auth/me");
  },

  refresh: refreshSession,
};
