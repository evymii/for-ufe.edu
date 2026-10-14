import type { RequestHandler } from 'express';

import { Router } from 'express';

import * as collections from '../../controllers/content/collections.controller.js';
import * as executives from '../../controllers/content/executives.controller.js';
import * as games from '../../controllers/content/games.controller.js';
import * as news from '../../controllers/content/news.controller.js';
import * as players from '../../controllers/content/players.controller.js';
import * as shop from '../../controllers/content/shop.controller.js';
import * as siteContent from '../../controllers/content/site-content.controller.js';
import * as videos from '../../controllers/content/videos.controller.js';
import { asyncHandler } from '../../lib/asyncHandler.js';
import { authenticate } from '../../middleware/authenticate.js';
import { optionalAuth } from '../../middleware/optionalAuth.js';
import { publicReadCache } from '../../middleware/publicReadCache.js';
import { requireRole } from '../../middleware/requireRole.js';
import { validate } from '../../middleware/validate.js';
import {
  createAlbumSchema,
  createExecutiveSchema,
  createGameSchema,
  createNewsSchema,
  createPartnerSchema,
  createPlayerSchema,
  createShopProductSchema,
  createStandingSchema,
  createVideoSchema,
  idParamSchema,
  listAlbumsQuerySchema,
  listExecutivesQuerySchema,
  listGamesQuerySchema,
  listNewsQuerySchema,
  listPlayersQuerySchema,
  listShopQuerySchema,
  listVideosQuerySchema,
  pageParamSchema,
  sectionParamSchema,
  siteContentPutSchema,
  slugParamSchema,
  updateAlbumSchema,
  updateExecutiveSchema,
  updateGameSchema,
  updateNewsSchema,
  updatePartnerSchema,
  updatePlayerSchema,
  updateShopProductSchema,
  updateStandingSchema,
  updateVideoSchema,
} from '../../validators/content/content.validators.js';
import { blocksRouter } from './blocks.routes.js';

/**
 * Team site content surface, mounted at /api/v1/content.
 *
 * Public side only ever GETs (unauthenticated, ISR-cached upstream). Every
 * write verb is guarded by authenticate + requireRole('ADMIN') — the same
 * resource path serves both sides; the verb decides the auth.
 */

/** Router-level guard pair for every mutating route below. */
const adminWrite = [authenticate, requireRole('ADMIN')] as unknown as RequestHandler[];

export const contentRouter = Router();

// Public GETs (no Authorization header) are browser/CDN-cacheable for 60s;
// writes and authed reads are never cached.
contentRouter.use(publicReadCache);

// ── Content blocks (live-editable site text, SSE updates) ────────────────────
contentRouter.use('/blocks', blocksRouter);

// ── News (мэдээ) ─────────────────────────────────────────────────────────────
contentRouter.get('/news', validate({ query: listNewsQuerySchema }), asyncHandler(news.listNews));
contentRouter.get(
  '/news/slug/:slug',
  validate({ params: slugParamSchema }),
  asyncHandler(news.getNewsBySlug),
);
contentRouter.post(
  '/news',
  ...adminWrite,
  validate({ body: createNewsSchema }),
  asyncHandler(news.createNews),
);
contentRouter.patch(
  '/news/:id',
  ...adminWrite,
  validate({ body: updateNewsSchema, params: idParamSchema }),
  asyncHandler(news.updateNews),
);
contentRouter.delete(
  '/news/:id',
  ...adminWrite,
  validate({ params: idParamSchema }),
  asyncHandler(news.deleteNews),
);

// ── Players (багийн бүрэлдэхүүн) ─────────────────────────────────────────────
contentRouter.get(
  '/players',
  optionalAuth,
  validate({ query: listPlayersQuerySchema }),
  asyncHandler(players.listPlayers),
);
contentRouter.get(
  '/players/slug/:slug',
  validate({ params: slugParamSchema }),
  asyncHandler(players.getPlayerBySlug),
);
contentRouter.post(
  '/players',
  ...adminWrite,
  validate({ body: createPlayerSchema }),
  asyncHandler(players.createPlayer),
);
contentRouter.patch(
  '/players/:id',
  ...adminWrite,
  validate({ body: updatePlayerSchema, params: idParamSchema }),
  asyncHandler(players.updatePlayer),
);
contentRouter.delete(
  '/players/:id',
  ...adminWrite,
  validate({ params: idParamSchema }),
  asyncHandler(players.deletePlayer),
);

// ── Games (хуваарь & үр дүн) ─────────────────────────────────────────────────
contentRouter.get(
  '/games',
  validate({ query: listGamesQuerySchema }),
  asyncHandler(games.listGames),
);
contentRouter.post(
  '/games',
  ...adminWrite,
  validate({ body: createGameSchema }),
  asyncHandler(games.createGame),
);
contentRouter.patch(
  '/games/:id',
  ...adminWrite,
  validate({ body: updateGameSchema, params: idParamSchema }),
  asyncHandler(games.updateGame),
);
contentRouter.delete(
  '/games/:id',
  ...adminWrite,
  validate({ params: idParamSchema }),
  asyncHandler(games.deleteGame),
);

// ── Standings (хүснэгт) ──────────────────────────────────────────────────────
contentRouter.get('/standings', asyncHandler(collections.listStandings));
contentRouter.post(
  '/standings',
  ...adminWrite,
  validate({ body: createStandingSchema }),
  asyncHandler(collections.createStanding),
);
contentRouter.patch(
  '/standings/:id',
  ...adminWrite,
  validate({ body: updateStandingSchema, params: idParamSchema }),
  asyncHandler(collections.updateStanding),
);
contentRouter.delete(
  '/standings/:id',
  ...adminWrite,
  validate({ params: idParamSchema }),
  asyncHandler(collections.deleteStanding),
);

// ── Partners (ивээн тэтгэгчид) ───────────────────────────────────────────────
contentRouter.get('/partners', asyncHandler(collections.listPartners));
contentRouter.post(
  '/partners',
  ...adminWrite,
  validate({ body: createPartnerSchema }),
  asyncHandler(collections.createPartner),
);
contentRouter.patch(
  '/partners/:id',
  ...adminWrite,
  validate({ body: updatePartnerSchema, params: idParamSchema }),
  asyncHandler(collections.updatePartner),
);
contentRouter.delete(
  '/partners/:id',
  ...adminWrite,
  validate({ params: idParamSchema }),
  asyncHandler(collections.deletePartner),
);

// ── Media albums (галерей) ───────────────────────────────────────────────────
contentRouter.get(
  '/media',
  optionalAuth,
  validate({ query: listAlbumsQuerySchema }),
  asyncHandler(collections.listAlbums),
);
contentRouter.get(
  '/media/slug/:slug',
  validate({ params: slugParamSchema }),
  asyncHandler(collections.getAlbumBySlug),
);
contentRouter.post(
  '/media',
  ...adminWrite,
  validate({ body: createAlbumSchema }),
  asyncHandler(collections.createAlbum),
);
contentRouter.patch(
  '/media/:id',
  ...adminWrite,
  validate({ body: updateAlbumSchema, params: idParamSchema }),
  asyncHandler(collections.updateAlbum),
);
contentRouter.delete(
  '/media/:id',
  ...adminWrite,
  validate({ params: idParamSchema }),
  asyncHandler(collections.deleteAlbum),
);

// ── Executives (front office) ────────────────────────────────────────────────
contentRouter.get(
  '/executives',
  optionalAuth,
  validate({ query: listExecutivesQuerySchema }),
  asyncHandler(executives.listExecutives),
);
contentRouter.post(
  '/executives',
  ...adminWrite,
  validate({ body: createExecutiveSchema }),
  asyncHandler(executives.createExecutive),
);
contentRouter.patch(
  '/executives/:id',
  ...adminWrite,
  validate({ body: updateExecutiveSchema, params: idParamSchema }),
  asyncHandler(executives.updateExecutive),
);
contentRouter.delete(
  '/executives/:id',
  ...adminWrite,
  validate({ params: idParamSchema }),
  asyncHandler(executives.deleteExecutive),
);

// ── Videos (видео сан) ───────────────────────────────────────────────────────
contentRouter.get(
  '/videos',
  optionalAuth,
  validate({ query: listVideosQuerySchema }),
  asyncHandler(videos.listVideos),
);
contentRouter.get(
  '/videos/slug/:slug',
  validate({ params: slugParamSchema }),
  asyncHandler(videos.getVideoBySlug),
);
contentRouter.post(
  '/videos',
  ...adminWrite,
  validate({ body: createVideoSchema }),
  asyncHandler(videos.createVideo),
);
contentRouter.patch(
  '/videos/:id',
  ...adminWrite,
  validate({ body: updateVideoSchema, params: idParamSchema }),
  asyncHandler(videos.updateVideo),
);
contentRouter.delete(
  '/videos/:id',
  ...adminWrite,
  validate({ params: idParamSchema }),
  asyncHandler(videos.deleteVideo),
);

// ── Shop products (фэн клаб) ─────────────────────────────────────────────────
contentRouter.get(
  '/shop',
  optionalAuth,
  validate({ query: listShopQuerySchema }),
  asyncHandler(shop.listShopProducts),
);
contentRouter.post(
  '/shop',
  ...adminWrite,
  validate({ body: createShopProductSchema }),
  asyncHandler(shop.createShopProduct),
);
contentRouter.patch(
  '/shop/:id',
  ...adminWrite,
  validate({ body: updateShopProductSchema, params: idParamSchema }),
  asyncHandler(shop.updateShopProduct),
);
contentRouter.delete(
  '/shop/:id',
  ...adminWrite,
  validate({ params: idParamSchema }),
  asyncHandler(shop.deleteShopProduct),
);

// ── Site content (singleton copy) ────────────────────────────────────────────
contentRouter.get('/site-content', asyncHandler(siteContent.getAllSiteContent));
contentRouter.get(
  '/site-content/:page',
  validate({ params: pageParamSchema }),
  asyncHandler(siteContent.getPageSiteContent),
);
contentRouter.put(
  '/site-content/:page/:section',
  ...adminWrite,
  validate({ body: siteContentPutSchema, params: sectionParamSchema }),
  asyncHandler(siteContent.putSiteContent),
);
