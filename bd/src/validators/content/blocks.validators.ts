import { z } from 'zod';

import {
  CONTENT_BLOCK_TYPES,
  CONTENT_DEFAULT_LOCALE,
  CONTENT_ENSURE_MAX_BLOCKS,
  CONTENT_KEY_PATTERN,
  CONTENT_LOCALE_PATTERN,
  CONTENT_PAGE_PATTERN,
  CONTENT_VALUE_MAX_LENGTH,
} from '../../config/constants.js';

const pageSchema = z.string().regex(CONTENT_PAGE_PATTERN, {
  message: 'page must be 1–59 chars of lowercase letters, digits and dashes',
});
const keySchema = z.string().regex(CONTENT_KEY_PATTERN, {
  message: 'key must be 1–79 chars of lowercase letters, digits, dots, dashes or underscores',
});
const localeSchema = z
  .string()
  .regex(CONTENT_LOCALE_PATTERN, { message: 'locale must look like "mn" or "en-US"' });
const valueSchema = z.string().min(1, 'value is required').max(CONTENT_VALUE_MAX_LENGTH);

export const contentPageParamSchema = z.object({ page: pageSchema });

export const contentBlockParamSchema = z.object({ key: keySchema, page: pageSchema });

export const contentLocaleQuerySchema = z.object({
  locale: localeSchema.default(CONTENT_DEFAULT_LOCALE),
});

export const contentBlockPutSchema = z.object({
  locale: localeSchema.default(CONTENT_DEFAULT_LOCALE),
  type: z.enum(CONTENT_BLOCK_TYPES),
  value: valueSchema,
});

export const contentBlocksEnsureSchema = z.object({
  blocks: z
    .array(z.object({ key: keySchema, type: z.enum(CONTENT_BLOCK_TYPES), value: valueSchema }))
    .min(1, 'at least one block is required')
    .max(CONTENT_ENSURE_MAX_BLOCKS, `at most ${CONTENT_ENSURE_MAX_BLOCKS} blocks per call`),
  locale: localeSchema.default(CONTENT_DEFAULT_LOCALE),
});

export const contentHistoryQuerySchema = z.object({
  key: keySchema.optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  locale: localeSchema.default(CONTENT_DEFAULT_LOCALE),
  offset: z.coerce.number().int().min(0).default(0),
});

export type ContentBlockPutInput = z.infer<typeof contentBlockPutSchema>;
export type ContentBlocksEnsureInput = z.infer<typeof contentBlocksEnsureSchema>;
export type ContentHistoryQuery = z.infer<typeof contentHistoryQuerySchema>;
