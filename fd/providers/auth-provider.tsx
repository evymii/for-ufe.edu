"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useQueryClient } from "@tanstack/react-query";

import { setAccessToken } from "@/lib/api-client";
import { refreshSession } from "@/lib/api-client";
import { authService } from "@/services/user/auth.service";
import type { User } from "@/types/api";

type AuthStatus = "loading" | "authenticated" | "unauthenticated";

interface AuthState {
  user: User | null;
  status: AuthStatus;
  login: (email: string, password: string) => Promise<User>;
  register: (input: {
    name: string;
    email: string;
    password: string;
  }) => Promise<User>;
  logout: () => Promise<void>;
  setUser: (user: User) => void;
}

const AuthContext = createContext<AuthState | null>(null);

/**
 * Holds the authenticated user in memory, bootstrapped from the httpOnly
 * session cookie via a silent refresh-token exchange. The access token never
 * touches localStorage — the API client keeps it in module memory only.
 */
export function AuthProvider({
  children,
  hasSession,
}: {
  children: ReactNode;
  hasSession: boolean;
}) {
  const [user, setUserState] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>(
    hasSession ? "loading" : "unauthenticated",
  );
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!hasSession) return;
    let cancelled = false;

    refreshSession()
      .then((payload) => {
        if (!cancelled) {
          setUserState(payload.user);
          setStatus("authenticated");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("unauthenticated");
      });

    return () => {
      cancelled = true;
    };
  }, [hasSession]);

  const login = useCallback(async (email: string, password: string) => {
    const payload = await authService.login({ email, password });
    setUserState(payload.user);
    setStatus("authenticated");
    return payload.user;
  }, []);

  const register = useCallback(
    async (input: { name: string; email: string; password: string }) => {
      const payload = await authService.register(input);
      setUserState(payload.user);
      setStatus("authenticated");
      return payload.user;
    },
    [],
  );

  const logout = useCallback(async () => {
    await authService.logout();
    setAccessToken(null);
    setUserState(null);
    setStatus("unauthenticated");
    queryClient.clear();
  }, [queryClient]);

  const setUser = useCallback((next: User) => setUserState(next), []);

  const value = useMemo(
    () => ({ user, status, login, register, logout, setUser }),
    [user, status, login, register, logout, setUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within <AuthProvider>");
  }
  return context;
}
