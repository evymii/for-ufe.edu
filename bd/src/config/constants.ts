export const API_PREFIX = '/api/v1';

export const JWT_ISSUER = 'ufeedu-api';

export const REFRESH_TOKEN_COOKIE = 'uf_refresh';
export const SESSION_COOKIE = 'uf_session';

export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

export const REGISTRATION_CHART_DAYS = 14;

export const USER_SORT_FIELDS = ['createdAt', 'updatedAt', 'email', 'name', 'role'] as const;

/**
 * Site-content allowlist: the only page/section pairs the singleton copy
 * store accepts. The future admin copy editor is generated from this map —
 * free-form JSON outside these keys is rejected server-side.
 */
export const SITE_CONTENT_PAGES = {
  'city-edition': ['page'],
  contact: ['info', 'tickets'],
  'fan-club': ['page'],
  footer: ['social'],
  'front-office': ['hero'],
  general: ['brand', 'contact'],
  history: ['page'],
  home: ['fanmail', 'hero', 'news', 'stats', 'thanks'],
  newsletter: ['page'],
  photos: ['hero'],
  players: ['page'],
  schedule: ['hero'],
  videos: ['hero'],
} as const satisfies Record<string, readonly string[]>;

export const SITE_CONTENT_MAX_JSON_LENGTH = 8000;

// ─── Content blocks (live-editable site text) ────────────────────────────────

export const CONTENT_BLOCK_TYPES = ['image', 'json', 'richtext', 'text'] as const;

export const CONTENT_DEFAULT_LOCALE = 'mn';

export const CONTENT_ENSURE_MAX_BLOCKS = 200;

export const CONTENT_KEY_PATTERN = /^[a-z0-9][a-z0-9._-]{0,78}$/;

export const CONTENT_LOCALE_PATTERN = /^[a-z]{2}(-[A-Z]{2})?$/;

export const CONTENT_PAGE_PATTERN = /^[a-z0-9][a-z0-9-]{0,58}$/;

export const CONTENT_VALUE_MAX_LENGTH = 20_000;

/** `image` blocks hold a single http(s) URL (short by nature). */
export const CONTENT_IMAGE_URL_MAX_LENGTH = 2_048;

// ─── Media uploads (Cloudinary) ──────────────────────────────────────────────

/** Verified from magic bytes — the client MIME/extension is never trusted. */
export const MEDIA_MIME_ALLOWLIST = [
  'image/avif',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/webp',
] as const;

/** Optional upload subfolder inside the Cloudinary folder. */
export const MEDIA_FOLDER_PATTERN = /^[a-z0-9][a-z0-9-]{0,31}$/;

export const MEDIA_ALT_MAX_LENGTH = 200;

export const MEDIA_LIST_MAX_LIMIT = 100;

// ─── SSE live updates ────────────────────────────────────────────────────────

export const SSE_HEARTBEAT_INTERVAL_MS = 25_000;

export const SSE_MAX_CONNECTIONS_PER_IP = 6;
