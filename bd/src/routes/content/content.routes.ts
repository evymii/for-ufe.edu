import type { RequestHandler } from 'express';

import { Router } from 'express';

import * as collections from '../../controllers/content/collections.controller.js';
import * as contact from '../../controllers/content/contact.controller.js';
import * as games from '../../controllers/content/games.controller.js';
import * as news from '../../controllers/content/news.controller.js';
import * as players from '../../controllers/content/players.controller.js';
import * as siteContent from '../../controllers/content/site-content.controller.js';
import { asyncHandler } from '../../lib/asyncHandler.js';
import { authenticate } from '../../middleware/authenticate.js';
import { requireRole } from '../../middleware/requireRole.js';
import { validate } from '../../middleware/validate.js';
import {
  contactReadSchema,
  createAlbumSchema,
  createContactSchema,
  createGameSchema,
  createNewsSchema,
  createPartnerSchema,
  createPlayerSchema,
  createStandingSchema,
  idParamSchema,
  listGamesQuerySchema,
  listNewsQuerySchema,
  listPlayersQuerySchema,
  pageParamSchema,
  sectionParamSchema,
  siteContentPutSchema,
  slugParamSchema,
  updateAlbumSchema,
  updateGameSchema,
  updateNewsSchema,
  updatePartnerSchema,
  updatePlayerSchema,
  updateStandingSchema,
} from '../../validators/content/content.validators.js';

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
contentRouter.get('/media', asyncHandler(collections.listAlbums));
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

// ── Contact inbox (холбоо барих) ────────────────────────────────────────────
contentRouter.post(
  '/contact',
  validate({ body: createContactSchema }),
  asyncHandler(contact.submitContact),
);
contentRouter.get('/contact/inbox', ...adminWrite, asyncHandler(contact.listInbox));
contentRouter.patch(
  '/contact/:id/read',
  ...adminWrite,
  validate({ body: contactReadSchema, params: idParamSchema }),
  asyncHandler(contact.markContactRead),
);
contentRouter.delete(
  '/contact/:id',
  ...adminWrite,
  validate({ params: idParamSchema }),
  asyncHandler(contact.deleteContact),
);
