import { describe, expect, it } from "vitest";

import {
  ALLOWED_TAGS,
  CONTENT_TAG,
  SITE_CONTENT_TAG,
  isAllowedTag,
} from "@/lib/cache-tags";

/**
 * The tag registry is the shared constant surface between the public
 * fetchers and the purge route. Every tag lib/content.ts fetches with must
 * be purgeable, or edits only appear after the 60s ISR window.
 */
describe("cache tags", () => {
  it("allows every tag the public fetchers use", () => {
    for (const tag of [
      CONTENT_TAG,
      SITE_CONTENT_TAG,
      "games",
      "news",
      "players",
      "executives",
      "albums",
      "videos",
      "shop",
    ]) {
      expect(ALLOWED_TAGS).toContain(tag);
    }
  });

  it("rejects unknown or malformed tags", () => {
    expect(isAllowedTag("content")).toBe(true);
    expect(isAllowedTag("Content")).toBe(false); // case-sensitive
    expect(isAllowedTag("contentx")).toBe(false);
    expect(isAllowedTag("")).toBe(false);
    expect(isAllowedTag(" DROP TABLE")).toBe(false);
  });
});
