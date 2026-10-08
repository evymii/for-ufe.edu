/**
 * Client-safe environment. NEXT_PUBLIC_ variables are inlined at build time;
 * everything else must reach the browser through the API only.
 */
export const env = {
  /** Base URL of the Express API (bd/), configurable per environment. */
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000",
} as const;
