import type { ApiErrorBody, AuthPayload } from "@/types/api";
import { env } from "@/lib/env";

/**
 * Typed fetch wrapper for the bd/ API. Every request goes through here —
 * components never call fetch directly.
 *
 * - Sends/receives the standard envelope: { success, data } | { success, false, error }
 * - Attaches the in-memory access token as a Bearer header
 * - Uses the httpOnly refresh cookie (credentials: "include") to silently
 *   recover exactly once from an expired access token
 */

export class ApiClientError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
    readonly details?: ApiErrorBody["details"],
  ) {
    super(message);
    this.name = "ApiClientError";
  }
}

/** Access token lives in memory only — the refresh token is an httpOnly cookie. */
let accessToken: string | null = null;

export function setAccessToken(token: string | null): void {
  accessToken = token;
}

export function getAccessToken(): string | null {
  return accessToken;
}

interface Envelope<T> {
  success: boolean;
  data?: T;
  error?: ApiErrorBody;
}

const REFRESH_PATH = "/api/v1/user/auth/refresh";

async function rawRequest<T>(
  path: string,
  init: RequestInit,
): Promise<Envelope<T> | null> {
  const headers = new Headers(init.headers);
  if (
    init.body !== undefined &&
    !(init.body instanceof FormData) &&
    !headers.has("Content-Type")
  ) {
    headers.set("Content-Type", "application/json");
  }
  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }

  let response: Response;
  try {
    response = await fetch(`${env.apiUrl}${path}`, {
      ...init,
      headers,
      credentials: "include",
    });
  } catch {
    // Network failure (backend down, DNS, offline) — surfaces as a null
    // envelope so callers always receive an ApiClientError, never a raw
    // TypeError.
    return null;
  }

  return (await response.json().catch(() => null)) as Envelope<T> | null;
}

async function request<T>(
  path: string,
  init: RequestInit,
  allowRetry = true,
): Promise<T> {
  const body = await rawRequest<T>(path, init);

  if (body?.success && body.data !== undefined) {
    return body.data;
  }

  // Expired access token: silently refresh once via the httpOnly cookie,
  // then replay the original request.
  if (
    allowRetry &&
    path !== REFRESH_PATH &&
    (body?.error?.code === "UNAUTHORIZED" || body === null)
  ) {
    const refreshed = await refreshSession().catch(() => null);
    if (refreshed) {
      return request<T>(path, init, false);
    }
  }

  throw new ApiClientError(
    0,
    body?.error?.code ?? "NETWORK_ERROR",
    body?.error?.message ?? "Could not reach the API. Is the backend running?",
    body?.error?.details,
  );
}

export const api = {
  get: <T>(path: string) => request<T>(path, { method: "GET" }),
  post: <T>(path: string, payload?: unknown) =>
    request<T>(path, {
      method: "POST",
      body: payload === undefined ? undefined : JSON.stringify(payload),
    }),
  /** Multipart upload — the browser sets the Content-Type boundary. */
  postForm: <T>(path: string, form: FormData) =>
    request<T>(path, { method: "POST", body: form }),
  put: <T>(path: string, payload?: unknown) =>
    request<T>(path, {
      method: "PUT",
      body: payload === undefined ? undefined : JSON.stringify(payload),
    }),
  patch: <T>(path: string, payload?: unknown) =>
    request<T>(path, {
      method: "PATCH",
      body: payload === undefined ? undefined : JSON.stringify(payload),
    }),
  delete: <T>(path: string) => request<T>(path, { method: "DELETE" }),
};

/** Single-flight refresh: concurrent callers (React effect double-mounts,
 *  parallel requests recovering from the same expired token) share ONE
 *  network call. Without this, two simultaneous rotations of the same
 *  refresh cookie conflict server-side (Mongo transaction P2034) and the
 *  loser would kill the session. */
let refreshInFlight: null | Promise<AuthPayload> = null;

/** Exchanges the httpOnly refresh cookie for a fresh access token + user. */
export async function refreshSession(): Promise<AuthPayload> {
  if (refreshInFlight) return refreshInFlight;
  refreshInFlight = (async () => {
    const body = await rawRequest<AuthPayload>(REFRESH_PATH, {
      method: "POST",
    });
    if (!body?.success || !body.data) {
      throw new ApiClientError(401, "UNAUTHORIZED", "Session expired");
    }
    accessToken = body.data.accessToken;
    return body.data;
  })().finally(() => {
    refreshInFlight = null;
  });
  return refreshInFlight;
}
