/**
 * Client-safe environment. NEXT_PUBLIC_ variables are inlined at build time;
 * everything else must reach the browser through the API only.
 */
export const env = {
  /** Base URL of the Express API (bd/), configurable per environment. */
  // Trailing slashes would double up on `${apiUrl}${path}` (…app//api),
  // which Vercel answers with a redirect — fatal for CORS preflights.
  apiUrl: (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4010").replace(
    /\/+$/u,
    "",
  ),
} as const;
