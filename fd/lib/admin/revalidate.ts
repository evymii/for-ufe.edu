import { getAccessToken } from "@/lib/api-client";

/**
 * Admin-side cache purge: asks the frontend's /api/revalidate route to drop
 * the tagged ISR entries after a successful write, so the public site shows
 * the change on the next request instead of after the 60s window.
 *
 * Fire-and-forget by design — callers `void` it right after `refetch()`.
 * If it fails (offline, expired session), nothing breaks: the 60s ISR
 * window is the safety net and the edit still lands.
 */
export async function revalidatePublicTag(tag: string): Promise<boolean> {
  const token = getAccessToken();
  if (!token) return false;
  try {
    const response = await fetch("/api/revalidate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tag }),
    });
    return response.ok;
  } catch {
    return false; // swallowed on purpose — see note above
  }
}
