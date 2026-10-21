/**
 * Client-safe environment. NEXT_PUBLIC_ variables are inlined at build time;
 * everything else must reach the browser through the API only.
 */
const apiUrl = process.env.NEXT_PUBLIC_API_URL?.trim();

if (!apiUrl && process.env.NODE_ENV === "production") {
  throw new Error(
    "NEXT_PUBLIC_API_URL must be configured for production deployments.",
  );
}

export const env = {
  /** Base URL of the Express API (bd/), configurable per environment. */
  // Trailing slashes would double up on `${apiUrl}${path}` (…app//api),
  // which Vercel answers with a redirect — fatal for CORS preflights.
  apiUrl: (apiUrl ?? "http://localhost:4010").replace(
    /\/+$/u,
    "",
  ),
} as const;
