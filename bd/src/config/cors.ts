import type { CorsOptions } from 'cors';

import { env } from './env.js';

// Allowlist from CORS_ORIGIN (comma-separated) with credentials. Local
// development origins (localhost / 127.0.0.1 / ::1) are accepted on ANY port,
// so the frontend works no matter which port `next dev` starts on.
function isLocalOrigin(origin: string): boolean {
  try {
    const { hostname } = new URL(origin);
    return (
      hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1'
    );
  } catch {
    return false;
  }
}

export const corsOptions: CorsOptions = {
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 600,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  origin(origin, callback) {
    if (
      !origin ||
      env.CORS_ORIGINS.includes(origin) ||
      isLocalOrigin(origin)
    ) {
      callback(null, true);
    } else {
      // Unknown origin: serve the request, but without CORS headers.
      callback(null, false);
    }
  },
};
