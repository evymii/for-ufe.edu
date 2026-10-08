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
  contact: ['info', 'tickets'],
  footer: ['social'],
  home: ['fanmail', 'hero'],
} as const satisfies Record<string, readonly string[]>;

export const SITE_CONTENT_MAX_JSON_LENGTH = 8000;
