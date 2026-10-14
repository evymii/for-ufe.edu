import { beforeEach, describe, expect, it, vi } from "vitest";

import { setAccessToken } from "@/lib/api-client";
import { revalidatePublicTag } from "@/lib/admin/revalidate";

const fetchMock = vi.fn();

beforeEach(() => {
  setAccessToken(null);
  fetchMock.mockReset();
  vi.stubGlobal("fetch", fetchMock);
});

describe("revalidatePublicTag", () => {
  it("is a no-op without a session token (ISR window stays the net)", async () => {
    await expect(revalidatePublicTag("games")).resolves.toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("posts the tag with the in-memory bearer token", async () => {
    setAccessToken("tok-123");
    fetchMock.mockResolvedValueOnce(new Response("{}", { status: 200 }));

    await expect(revalidatePublicTag("news")).resolves.toBe(true);

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/revalidate",
      expect.objectContaining({
        body: JSON.stringify({ tag: "news" }),
        headers: {
          Authorization: "Bearer tok-123",
          "Content-Type": "application/json",
        },
        method: "POST",
      }),
    );
  });

  it("swallows failures so a missed purge never breaks the save flow", async () => {
    setAccessToken("tok-123");
    fetchMock.mockRejectedValueOnce(new TypeError("offline"));

    await expect(revalidatePublicTag("news")).resolves.toBe(false);
  });

  it("reports a non-OK purge response as not revalidated", async () => {
    setAccessToken("tok-123");
    fetchMock.mockResolvedValueOnce(new Response("{}", { status: 403 }));

    await expect(revalidatePublicTag("news")).resolves.toBe(false);
  });
});
