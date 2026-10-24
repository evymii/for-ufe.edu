import { beforeEach, describe, expect, it, vi } from "vitest";

import type { AuthPayload, User } from "@/types/api";

/**
 * The api client is pure fetch plumbing — no React involved — so we drive it
 * with a stubbed global fetch and reset its module state between tests.
 */

const user: User = {
  id: "11111111-1111-4111-8111-111111111111",
  email: "client@test.local",
  username: null,
  name: "Client Test",
  role: "USER",
  isActive: true,
  createdAt: "2026-01-01T00:00:00.000Z",
  updatedAt: "2026-01-01T00:00:00.000Z",
};

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

async function importFreshClient() {
  vi.resetModules();
  return import("@/lib/api-client");
}

beforeEach(() => {
  vi.unstubAllGlobals();
});

describe("api client", () => {
  it("unwraps the success envelope into data", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(
        jsonResponse(200, { success: true, data: { hello: "world" } }),
      );
    vi.stubGlobal("fetch", fetchMock);

    const { api } = await importFreshClient();
    await expect(api.get("/api/v1/ping")).resolves.toEqual({ hello: "world" });

    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:4010/api/v1/ping",
      expect.objectContaining({ method: "GET", credentials: "include" }),
    );
  });

  it("throws ApiClientError with the envelope's code and message", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        jsonResponse(409, {
          success: false,
          error: {
            code: "CONFLICT",
            message: "An account with this email already exists",
          },
        }),
      ),
    );

    const { api, ApiClientError } = await importFreshClient();
    const error = await api
      .post("/api/v1/user/auth/register", {})
      .catch((e: unknown) => e);

    expect(error).toBeInstanceOf(ApiClientError);
    expect((error as InstanceType<typeof ApiClientError>).code).toBe(
      "CONFLICT",
    );
    expect((error as InstanceType<typeof ApiClientError>).message).toBe(
      "An account with this email already exists",
    );
  });

  it("maps a dead network to a readable NETWORK_ERROR", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new TypeError("fetch failed")),
    );

    const { api, ApiClientError } = await importFreshClient();
    const error = await api
      .get("/api/v1/user/auth/me")
      .catch((e: unknown) => e);

    expect(error).toBeInstanceOf(ApiClientError);
    expect((error as InstanceType<typeof ApiClientError>).code).toBe(
      "NETWORK_ERROR",
    );
    expect((error as InstanceType<typeof ApiClientError>).message).toContain(
      "Could not reach the API",
    );
  });

  it("reports a real HTTP answer without our envelope as HTTP_ERROR with its status (no replay)", async () => {
    // Vercel answers oversized function bodies with a plain-text 413 — the
    // api client must say "413", not the misleading "backend not running".
    const fetchMock = vi.fn().mockResolvedValue(
      new Response("FUNCTION_PAYLOAD_TOO_LARGE", {
        status: 413,
        headers: { "Content-Type": "text/plain" },
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const { api, ApiClientError } = await importFreshClient();
    const error = await api
      .postForm("/api/v1/admin/media", new FormData())
      .catch((e: unknown) => e);

    expect(error).toBeInstanceOf(ApiClientError);
    expect((error as InstanceType<typeof ApiClientError>).status).toBe(413);
    expect((error as InstanceType<typeof ApiClientError>).code).toBe(
      "HTTP_ERROR",
    );
    expect((error as InstanceType<typeof ApiClientError>).message).toContain(
      "413",
    );
    // No silent refresh/replay: the answer was a hard HTTP error, and
    // replaying would re-upload the whole file for nothing.
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("silently refreshes once after a 401 and replays the request with the new token", async () => {
    const payload: AuthPayload = {
      user,
      accessToken: "fresh-access-token",
    };
    const fetchMock = vi
      .fn()
      // 1) original call → expired token
      .mockResolvedValueOnce(
        jsonResponse(401, {
          success: false,
          error: { code: "UNAUTHORIZED", message: "expired" },
        }),
      )
      // 2) refresh exchange via httpOnly cookie
      .mockResolvedValueOnce(
        jsonResponse(200, { success: true, data: payload }),
      )
      // 3) replayed original call
      .mockResolvedValueOnce(
        jsonResponse(200, { success: true, data: { user } }),
      );
    vi.stubGlobal("fetch", fetchMock);

    const { api } = await importFreshClient();
    await expect(api.get("/api/v1/user/auth/me")).resolves.toEqual({ user });

    expect(fetchMock).toHaveBeenCalledTimes(3);
    const refreshCall = fetchMock.mock.calls[1];
    const replayCall = fetchMock.mock.calls[2];
    expect(String(refreshCall[0])).toBe(
      "http://localhost:4010/api/v1/user/auth/refresh",
    );
    expect(replayCall[1].headers.get("Authorization")).toBe(
      "Bearer fresh-access-token",
    );
  });

  it("does not recurse when the refresh call itself fails", async () => {
    // A dead session also bounces to /login — stub the location so jsdom
    // doesn't attempt a real navigation.
    const assign = vi.fn();
    vi.stubGlobal("location", { pathname: "/profile", search: "", assign });
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        jsonResponse(401, {
          success: false,
          error: { code: "UNAUTHORIZED", message: "expired" },
        }),
      )
      .mockResolvedValueOnce(
        jsonResponse(401, {
          success: false,
          error: { code: "UNAUTHORIZED", message: "no session" },
        }),
      );
    vi.stubGlobal("fetch", fetchMock);

    const { api, ApiClientError } = await importFreshClient();
    const error = await api
      .get("/api/v1/user/profile")
      .catch((e: unknown) => e);

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(error).toBeInstanceOf(ApiClientError);
    // When the refresh exchange fails, the ORIGINAL request's error envelope
    // is what the caller sees (the endpoint they called is what 401'd).
    expect((error as InstanceType<typeof ApiClientError>).message).toBe(
      "expired",
    );
    expect(assign).toHaveBeenCalledWith("/login?next=%2Fprofile");
  });

  it("bounces to /login with the current path and clears the session hint when the session is dead beyond recovery", async () => {
    const assign = vi.fn();
    vi.stubGlobal("location", { pathname: "/admin", search: "", assign });
    document.cookie = `uf_session=${encodeURIComponent(
      JSON.stringify({ id: "u1", role: "ADMIN" }),
    )}; Path=/`;
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        jsonResponse(401, {
          success: false,
          error: { code: "UNAUTHORIZED", message: "expired" },
        }),
      )
      .mockResolvedValueOnce(
        jsonResponse(401, {
          success: false,
          error: { code: "UNAUTHORIZED", message: "no session" },
        }),
      );
    vi.stubGlobal("fetch", fetchMock);

    const { api } = await importFreshClient();
    await api.get("/api/v1/admin/stats").catch(() => null);

    expect(assign).toHaveBeenCalledTimes(1);
    expect(assign).toHaveBeenCalledWith("/login?next=%2Fadmin");
    // The routing-hint cookie must go too — otherwise middleware would bounce
    // the user straight off /login back to /admin.
    expect(document.cookie).not.toContain("uf_session");
  });

  it("navigates only once when several requests fail on the same dead session", async () => {
    const assign = vi.fn();
    vi.stubGlobal("location", { pathname: "/admin", search: "", assign });
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        jsonResponse(401, {
          success: false,
          error: { code: "UNAUTHORIZED", message: "expired" },
        }),
      ),
    );

    const { api } = await importFreshClient();
    await Promise.allSettled([
      api.get("/api/v1/admin/stats"),
      api.get("/api/v1/admin/users"),
    ]);

    expect(assign).toHaveBeenCalledTimes(1);
  });

  it("does not bounce on a wrong-password login (the form shows the error inline)", async () => {
    const assign = vi.fn();
    vi.stubGlobal("location", { pathname: "/login", search: "", assign });
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        jsonResponse(401, {
          success: false,
          error: { code: "UNAUTHORIZED", message: "Invalid credentials" },
        }),
      ),
    );

    const { api } = await importFreshClient();
    await api
      .post("/api/v1/user/auth/login", { identifier: "x", password: "y" })
      .catch(() => null);

    expect(assign).not.toHaveBeenCalled();
  });
});
