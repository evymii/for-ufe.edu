import type { RequestHandler } from 'express';

/**
 * Browser/CDN cache policy for the public content surface: anonymous GETs
 * are cacheable for 60s (matching the frontend's ISR window); authed reads
 * and every write are never stored. `Vary: Authorization` keeps shared
 * caches from serving one caller's response under another's request.
 */
export const publicReadCache: RequestHandler = (req, res, next) => {
  if (req.method === 'GET' && !req.headers.authorization) {
    res.set('Cache-Control', 'public, max-age=60, s-maxage=60');
    res.set('Vary', 'Authorization');
  } else {
    res.set('Cache-Control', 'no-store');
  }
  next();
};
