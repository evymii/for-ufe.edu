import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { getAccessToken } from "@/lib/api-client";
import { AuthProvider, useAuth } from "@/providers/auth-provider";
import type { AuthPayload, User } from "@/types/api";

/**
 * Regression guard for the missing-setAccessToken bug: after login/register
 * the api client must hold the access token, otherwise the first post-login
 * request (admin stats, …) goes out without a Bearer header and 401s.
 */

const authService = vi.hoisted(() => ({
  login: vi.fn(),
  register: vi.fn(),
  logout: vi.fn(),
  me: vi.fn(),
  refresh: vi.fn(),
}));

vi.mock("@/services/user/auth.service", () => ({ authService }));

const user: User = {
  id: "22222222-2222-4222-8222-222222222222",
  email: "manager@ufeedu.local",
  username: "manager",
  name: "Менежер",
  role: "ADMIN",
  isActive: true,
  createdAt: "2026-01-01T00:00:00.000Z",
  updatedAt: "2026-01-01T00:00:00.000Z",
};

/** Exposes the auth actions to the test through the real context. */
function Probe() {
  const { login, register, status } = useAuth();
  return (
    <div>
      <span data-testid="status">{status}</span>
      <button type="button" onClick={() => void login("manager", "pw")}>
        login
      </button>
      <button
        type="button"
        onClick={() =>
          void register({ name: "N", email: "e@x.test", password: "pw" })
        }
      >
        register
      </button>
    </div>
  );
}

function mountProvider(): void {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  render(
    <QueryClientProvider client={client}>
      <AuthProvider>
        <Probe />
      </AuthProvider>
    </QueryClientProvider>,
  );
}

beforeEach(() => {
  vi.unstubAllGlobals();
  authService.login.mockReset();
  authService.register.mockReset();
  // AuthProvider bootstraps via refreshSession() → real fetch; answer 401 so
  // the provider starts (and stays) unauthenticated.
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          success: false,
          error: { code: "UNAUTHORIZED", message: "no session" },
        }),
        { status: 401, headers: { "Content-Type": "application/json" } },
      ),
    ),
  );
  document.cookie = "uf_session=; Path=/; Max-Age=0";
});

describe("AuthProvider", () => {
  it("stores the login access token in the api client and the session hint cookie", async () => {
    const payload: AuthPayload = { accessToken: "tok-login", user };
    authService.login.mockResolvedValue(payload);

    mountProvider();
    await waitFor(() =>
      expect(screen.getByTestId("status").textContent).toBe("unauthenticated"),
    );

    await act(async () => {
      screen.getByRole("button", { name: "login" }).click();
    });

    await waitFor(() =>
      expect(screen.getByTestId("status").textContent).toBe("authenticated"),
    );
    expect(getAccessToken()).toBe("tok-login");
    expect(document.cookie).toContain("uf_session");
  });

  it("stores the register access token too", async () => {
    const payload: AuthPayload = {
      accessToken: "tok-register",
      user: { ...user, role: "USER" },
    };
    authService.register.mockResolvedValue(payload);

    mountProvider();
    await waitFor(() =>
      expect(screen.getByTestId("status").textContent).toBe("unauthenticated"),
    );

    await act(async () => {
      screen.getByRole("button", { name: "register" }).click();
    });

    await waitFor(() =>
      expect(screen.getByTestId("status").textContent).toBe("authenticated"),
    );
    expect(getAccessToken()).toBe("tok-register");
  });
});
