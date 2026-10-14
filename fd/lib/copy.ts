import type { PageCopy } from "@/types/content";

/**
 * Shallow-merges a stored site-content section over its static fallback:
 * keys the admin never edited keep rendering, edited keys win. Nullish and
 * empty-string values are ignored so clearing a field in the JSON editor
 * falls back to the default rather than rendering blank.
 */
export function mergeCopy<T extends Record<string, unknown>>(
  fallback: T,
  copy: PageCopy | null,
): T {
  if (!copy) return fallback;
  const out: Record<string, unknown> = { ...fallback };
  for (const [key, value] of Object.entries(copy)) {
    if (value === undefined || value === null || value === "") continue;
    out[key] = value;
  }
  return out as T;
}
