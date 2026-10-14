import { beforeEach, describe, expect, it, vi } from "vitest";

import type { NextRequest } from "next/server";

const { revalidateTagMock } = vi.hoisted(() => ({
  revalidateTagMock: vi.fn(),
}));

vi.mock("next/cache", () => ({
  revalidateTag: revalidateTagMock,
}));

import { POST } from "@/app/api/revalidate/route";

/** Builds a POST Request carrying a Bearer header + { tag } body. */
function makeRequest(tag: unknown, token?: string): NextRequest {
  const headers = new Headers({ "Content-Type": "application/json" });
  if (token) headers.set("Authorization", `Bearer ${token}`);
  return new Request("http://localhost:3000/api/revalidate", {
    body: JSON.stringify({ tag }),
    headers,
    method: "POST",
  }) as unknown as NextRequest;
}

function meResponse(role: string): Response {
  return new Response(
    JSON.stringify({ data: { user: { role } }, success: true }),
    { status: 200 },
  );
}

const fetchMock = vi.fn();

beforeEach(() => {
  revalidateTagMock.mockReset();
  fetchMock.mockReset();
  vi.stubGlobal("fetch", fetchMock);
});

describe("POST /api/revalidate", () => {
  it("requires a bearer token (401, nothing verified or purged)", async () => {
    const res = await POST(makeRequest("games"));

    expect(res.status).toBe(401);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(revalidateTagMock).not.toHaveBeenCalled();
  });

  it("rejects an unknown tag with 400 before hitting the backend", async () => {
    const res = await POST(makeRequest("not-a-tag", "tok"));

    expect(res.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(revalidateTagMock).not.toHaveBeenCalled();
  });

  it("fails closed when the backend is unreachable (403, no purge)", async () => {
    fetchMock.mockRejectedValueOnce(new Error("backend down"));

    const res = await POST(makeRequest("games", "tok"));

    expect(res.status).toBe(403);
    expect(revalidateTagMock).not.toHaveBeenCalled();
  });

  it("refuses a non-admin token (403, no purge)", async () => {
    fetchMock.mockResolvedValueOnce(meResponse("USER"));

    const res = await POST(makeRequest("games", "tok"));

    expect(res.status).toBe(403);
    expect(revalidateTagMock).not.toHaveBeenCalled();
  });

  it("purges an allowed tag for a verified admin", async () => {
    fetchMock.mockResolvedValueOnce(meResponse("ADMIN"));

    const res = await POST(makeRequest("site-content", "tok"));
    const body = (await res.json()) as { revalidated: boolean; tag: string };

    expect(res.status).toBe(200);
    expect(body).toEqual({ revalidated: true, tag: "site-content" });
    // External invalidation: immediate expiry, not stale-while-revalidate.
    expect(revalidateTagMock).toHaveBeenCalledWith("site-content", {
      expire: 0,
    });
    // Verification went to bd with the caller's token, uncached.
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:4010/api/v1/user/auth/me",
      expect.objectContaining({
        cache: "no-store",
        headers: { Authorization: "Bearer tok" },
      }),
    );
  });
});
