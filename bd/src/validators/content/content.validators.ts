import { z } from 'zod';

import { idParamSchema } from '../shared.js';

// ── Shared field builders ────────────────────────────────────────────────────
// Contract: a MISSING key stays missing (Prisma column default / untouched
// PATCH field). An EMPTY STRING normalises to null for nullable text columns.
// No `.default()` here — the database owns the defaults, so a PATCH payload
// can never silently reset a field.

const text = (max: number) => z.string().trim().min(1).max(max);

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .nullish()
    .transform((value) => (value === '' || value === null ? null : value));

const optionalInt = (min: number, max: number) =>
  z.preprocess(
    (value) => (value === '' || value === null ? undefined : value),
    z.number().int().min(min).max(max).optional(),
  );

const optionalFloat = (min: number, max: number) =>
  z.preprocess(
    (value) => (value === '' || value === null ? undefined : value),
    z.number().min(min).max(max).optional(),
  );

const optionalDate = z
  .union([z.literal(''), z.undefined(), z.coerce.date()])
  .transform((value) => (value === '' ? undefined : value));

const boolFlag = z.preprocess((value) => {
  if (value === 'true' || value === 1 || value === '1') return true;
  if (value === 'false' || value === 0 || value === '0') return false;
  return value;
}, z.boolean());

// Accepts a comma-separated string or a real array of tags.
const stringList = z.preprocess(
  (value) =>
    typeof value === 'string'
      ? value
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
      : value,
  z.array(z.string().trim().min(1).max(48)).max(12).optional(),
);

const optionalBool = boolFlag.optional();

export const slugParamSchema = z.object({
  slug: z.string().trim().min(1).max(140),
});

// ── News ─────────────────────────────────────────────────────────────────────
const newsFields = {
  category: z.string().trim().min(1).max(60).optional(),
  content: text(50_000),
  coverImage: optionalText(600),
  excerpt: text(600),
  isFeatured: optionalBool,
  isPublished: optionalBool,
  publishedAt: optionalDate,
  slug: text(140),
  sortOrder: optionalInt(0, 9999),
  tags: stringList,
  title: text(200),
};

export const createNewsSchema = z.object(newsFields);

export const listNewsQuerySchema = z.object({
  category: z.string().trim().min(1).max(60).optional(),
  featured: boolFlag.optional(),
  limit: z.coerce.number().int().min(1).max(100).optional(),
});

// ── Players ──────────────────────────────────────────────────────────────────
export const playerRoleEnum = z.enum(['COACH', 'PLAYER', 'STAFF']);

const playerFields = {
  academicYear: optionalText(40),
  actionPhoto: optionalText(600),
  apg: optionalFloat(0, 30),
  bio: optionalText(5000),
  birthYear: optionalInt(1950, 2015),
  heightCm: optionalInt(120, 250),
  hometown: optionalText(80),
  isCaptain: optionalBool,
  isPublic: optionalBool,
  name: text(80),
  number: optionalInt(0, 99),
  photo: optionalText(600),
  position: optionalText(60),
  ppg: optionalFloat(0, 60),
  role: playerRoleEnum.optional(),
  rpg: optionalFloat(0, 30),
  slug: text(140),
  sortOrder: optionalInt(0, 9999),
  weightKg: optionalInt(40, 200),
};

export const createPlayerSchema = z.object(playerFields);

export const listPlayersQuerySchema = z.object({
  role: playerRoleEnum.optional(),
});

// ── Games ────────────────────────────────────────────────────────────────────
export const gameStatusEnum = z.enum(['CANCELLED', 'FINAL', 'SCHEDULED']);

const gameFields = {
  competition: z.string().trim().min(1).max(160).optional(),
  isHome: optionalBool,
  note: optionalText(500),
  opponent: text(120),
  opponentLogo: optionalText(600),
  opponentScore: optionalInt(0, 300),
  opponentShort: optionalText(12),
  round: optionalText(80),
  sortOrder: optionalInt(0, 9999),
  status: gameStatusEnum.optional(),
  streamUrl: optionalText(600),
  teamScore: optionalInt(0, 300),
  ticketUrl: optionalText(600),
  tipsAt: z.coerce.date(),
  venue: z.string().trim().min(1).max(120).optional(),
};

export const createGameSchema = z.object(gameFields);

export const listGamesQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).optional(),
  status: gameStatusEnum.optional(),
});

// ── Standings ────────────────────────────────────────────────────────────────
const standingFields = {
  isCurrent: optionalBool,
  losses: optionalInt(0, 999),
  sortOrder: optionalInt(0, 9999),
  teamLogo: optionalText(600),
  teamName: text(120),
  teamShort: optionalText(12),
  wins: optionalInt(0, 999),
};

export const createStandingSchema = z.object(standingFields);

// ── Partners (sponsors) ──────────────────────────────────────────────────────
const partnerFields = {
  isVisible: optionalBool,
  logo: optionalText(600),
  name: text(120),
  sortOrder: optionalInt(0, 9999),
  url: optionalText(600),
};

export const createPartnerSchema = z.object(partnerFields);

// ── Media albums ─────────────────────────────────────────────────────────────
const albumImageSchema = z.object({
  caption: optionalText(200),
  url: z.string().trim().min(1).max(600),
});

const albumFields = {
  coverImage: optionalText(600),
  eventDate: optionalDate,
  images: z.array(albumImageSchema).max(80).optional(),
  isPublished: optionalBool,
  slug: text(140),
  sortOrder: optionalInt(0, 9999),
  title: text(160),
};

export const createAlbumSchema = z.object(albumFields);

// ── Update variants: everything optional (essentials included) ───────────────
export const updateNewsSchema = createNewsSchema.partial();
export const updatePlayerSchema = createPlayerSchema.partial();
export const updateGameSchema = createGameSchema.partial();
export const updateStandingSchema = createStandingSchema.partial();
export const updatePartnerSchema = createPartnerSchema.partial();
export const updateAlbumSchema = createAlbumSchema.partial();

// ── Site content (singleton copy, allowlisted by page/section) ───────────────
export const siteContentPutSchema = z.object({
  data: z.record(z.string(), z.unknown()),
});

export const pageParamSchema = z.object({
  page: z.string().trim().min(1).max(40),
});

export const sectionParamSchema = z.object({
  page: z.string().trim().min(1).max(40),
  section: z.string().trim().min(1).max(40),
});

// ── Contact inbox ────────────────────────────────────────────────────────────
export const createContactSchema = z.object({
  email: z
    .email()
    .max(254)
    .transform((value) => value.toLowerCase()),
  message: text(4000),
  name: text(80),
  phone: optionalText(30),
  subject: optionalText(140),
});

export const contactReadSchema = z.object({
  isRead: boolFlag,
});

export type CreateContactInput = z.infer<typeof createContactSchema>;
export type CreateGameInput = z.infer<typeof createGameSchema>;
export type ListGamesQuery = z.infer<typeof listGamesQuerySchema>;
export type ListNewsQuery = z.infer<typeof listNewsQuerySchema>;
export type ListPlayersQuery = z.infer<typeof listPlayersQuerySchema>;
export type SiteContentPutInput = z.infer<typeof siteContentPutSchema>;
export type UpdateGameInput = z.infer<typeof updateGameSchema>;

export { idParamSchema };
