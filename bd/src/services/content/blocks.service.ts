import sanitizeHtml from 'sanitize-html';

import type {
  ContentBlockPutInput,
  ContentBlocksEnsureInput,
  ContentHistoryQuery,
} from '../../validators/content/blocks.validators.js';

import { CONTENT_IMAGE_URL_MAX_LENGTH } from '../../config/constants.js';
import { ApiError } from '../../lib/ApiError.js';
import { emitContentChanged } from '../../lib/content-events.js';
import { prisma } from '../../lib/prisma.js';

/**
 * Live-editable site text. Reads are public; writes happen in transactions
 * that also append history — and the change event is emitted to the SSE
 * streams only after the transaction commits, so a value is only ever
 * visible and streamable once it is durable.
 */

/** Registers defaults for missing keys without ever touching edited text.
 *  Existence is checked up-front: on MongoDB a duplicate-key insert ABORTS
 *  the whole transaction, so insert-then-catch cannot emulate the old
 *  `createMany({ skipDuplicates })` semantics. */
export async function ensureBlocks(
  input: ContentBlocksEnsureInput & { adminId: string; page: string },
): Promise<number> {
  const created = await prisma.$transaction(async (tx) => {
    const keys = input.blocks.map((block) => block.key);
    const existing = await tx.contentBlock.findMany({
      select: { key: true },
      where: { key: { in: keys }, locale: input.locale, pageSlug: input.page },
    });
    const taken = new Set(existing.map((row) => row.key));

    let count = 0;
    for (const block of input.blocks) {
      if (taken.has(block.key)) continue; // edited values are never overwritten
      await tx.contentBlock.create({
        data: {
          key: block.key,
          locale: input.locale,
          pageSlug: input.page,
          type: block.type,
          updatedBy: input.adminId,
          value: normalizeValue(block.type, block.value),
        },
      });
      count += 1;
    }
    return count;
  });
  if (created > 0) {
    emitContentChanged({
      createdCount: created,
      event: 'ensured',
      locale: input.locale,
      page: input.page,
    });
  }
  return created;
}

export async function getBlockHistory(query: ContentHistoryQuery & { page: string }) {
  const where = {
    block: {
      locale: query.locale,
      pageSlug: query.page,
      ...(query.key ? { key: query.key } : {}),
    },
  };
  const [total, items] = await prisma.$transaction([
    prisma.contentHistory.count({ where }),
    prisma.contentHistory.findMany({
      include: { block: { select: { key: true, locale: true, pageSlug: true, type: true } } },
      orderBy: { createdAt: 'desc' },
      skip: query.offset,
      take: query.limit,
      where,
    }),
  ]);
  return { items, pagination: { limit: query.limit, offset: query.offset, total } };
}

/** Admin overview: every page that has blocks, with counts and last edit. */
export async function getContentPagesOverview() {
  const groups = await prisma.contentBlock.groupBy({
    _count: { key: true },
    _max: { updatedAt: true },
    by: ['pageSlug'],
  });
  return groups
    .map((group) => ({
      blockCount: group._count.key,
      page: group.pageSlug,
      updatedAt: group._max.updatedAt,
    }))
    .sort((a, b) => a.page.localeCompare(b.page));
}

export async function getPageBlocks(
  page: string,
  locale: string,
): Promise<Record<string, unknown>> {
  const rows = await prisma.contentBlock.findMany({
    orderBy: { key: 'asc' },
    select: { key: true, type: true, value: true },
    where: { locale, pageSlug: page },
  });
  const blocks: Record<string, unknown> = {};
  for (const row of rows) {
    blocks[row.key] = row.type === 'json' ? parseJsonOrNull(row.value) : row.value;
  }
  return blocks;
}

/** Admin listing: per-block metadata (type, editor, timestamps) for the editor. */
export async function listPageBlocksWithMeta(page: string, locale: string) {
  const rows = await prisma.contentBlock.findMany({
    orderBy: { key: 'asc' },
    select: {
      createdAt: true,
      key: true,
      locale: true,
      type: true,
      updatedAt: true,
      updater: { select: { email: true } },
      value: true,
    },
    where: { locale, pageSlug: page },
  });
  return {
    blocks: rows.map(({ updater, ...row }) => ({ ...row, updatedBy: updater?.email ?? null })),
    locale,
    page,
  };
}

export async function putBlock(
  input: ContentBlockPutInput & { adminId: string; key: string; page: string },
) {
  const value = normalizeValue(input.type, input.value);
  const where = {
    pageSlug_key_locale: { key: input.key, locale: input.locale, pageSlug: input.page },
  };

  const { block } = await prisma.$transaction(async (tx) => {
    const existing = await tx.contentBlock.findUnique({
      select: { type: true, value: true },
      where,
    });
    if (existing && existing.type !== input.type) {
      throw ApiError.conflict(
        `Block "${input.key}" has type "${existing.type}" — send a value of that type instead`,
      );
    }

    const block = await tx.contentBlock.upsert({
      create: {
        key: input.key,
        locale: input.locale,
        pageSlug: input.page,
        type: input.type,
        updatedBy: input.adminId,
        value,
      },
      select: {
        createdAt: true,
        id: true,
        key: true,
        locale: true,
        pageSlug: true,
        type: true,
        updatedAt: true,
        value: true,
      },
      update: { updatedBy: input.adminId, value },
      where,
    });

    await tx.contentHistory.create({
      data: {
        blockId: block.id,
        changedBy: input.adminId,
        newValue: value,
        oldValue: existing?.value ?? null,
      },
    });

    return { block };
  });

  emitContentChanged({
    event: 'updated',
    key: input.key,
    locale: input.locale,
    page: input.page,
    type: input.type,
  });
  return { block };
}

/** Allowlist HTML sanitizer for richtext — scripts, styles and event handlers
 * never reach the database, so stored XSS is impossible by construction. */
const RICHTEXT_RULES: sanitizeHtml.IOptions = {
  allowedAttributes: {
    a: ['href', 'rel', 'target', 'title'],
    img: ['alt', 'height', 'src', 'title', 'width'],
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  allowedSchemesByTag: { img: ['http', 'https'] },
  allowedTags: [
    'a',
    'b',
    'blockquote',
    'br',
    'code',
    'em',
    'h2',
    'h3',
    'h4',
    'hr',
    'i',
    'img',
    'li',
    'ol',
    'p',
    'pre',
    's',
    'strong',
    'sub',
    'sup',
    'u',
    'ul',
  ],
  transformTags: { a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer' }) },
};

function normalizeValue(type: 'image' | 'json' | 'richtext' | 'text', value: string): string {
  if (type === 'text') {
    return value;
  }
  if (type === 'image') {
    // Image blocks hold a single http(s) URL — anything else is rejected so
    // the value is always a safe src for the public renderer.
    const url = value.trim();
    let parsed: null | URL = null;
    try {
      parsed = new URL(url);
    } catch {
      // stays null — invalid URL
    }
    if (
      !parsed ||
      (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') ||
      url.length > CONTENT_IMAGE_URL_MAX_LENGTH
    ) {
      throw ApiError.badRequest('value must be a single http(s) URL for type "image"');
    }
    return url;
  }
  if (type === 'richtext') {
    return sanitizeHtml(value, RICHTEXT_RULES);
  }
  try {
    return JSON.stringify(JSON.parse(value)); // canonical form: whitespace-stable
  } catch {
    throw ApiError.badRequest('value must be valid JSON for type "json"');
  }
}

function parseJsonOrNull(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return value; // stored before validation existed — degrade to the raw string
  }
}
