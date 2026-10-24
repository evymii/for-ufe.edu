import { describe, expect, it } from "vitest";

import { groupHistoryPhotos } from "@/lib/content";
import type { HistoryPhotoRow } from "@/types/content";

function photo(
  folder: string,
  id: string,
  overrides: Partial<HistoryPhotoRow> = {},
): HistoryPhotoRow {
  return {
    caption: null,
    createdAt: "2026-10-24T00:00:00.000Z",
    folder,
    id,
    publicId: `root/tuuh/${folder}/${id}`,
    sortOrder: 0,
    updatedAt: "2026-10-24T00:00:00.000Z",
    url: `https://res.cloudinary.com/x/${folder}/${id}.png`,
    ...overrides,
  };
}

/**
 * The /history page keys photos by year folder; the grouping must preserve
 * the API's ordering (folder, then sortOrder) and skip broken rows so one
 * bad entry cannot blank an era's photos.
 */
describe("groupHistoryPhotos", () => {
  it("groups rows by folder preserving API order", () => {
    const grouped = groupHistoryPhotos([
      photo("1996", "a"),
      photo("1996", "b"),
      photo("2026", "c"),
    ]);

    expect(grouped).toEqual({
      "1996": [
        "https://res.cloudinary.com/x/1996/a.png",
        "https://res.cloudinary.com/x/1996/b.png",
      ],
      "2026": ["https://res.cloudinary.com/x/2026/c.png"],
    });
  });

  it("returns an empty map for an empty (or unreachable) API", () => {
    expect(groupHistoryPhotos([])).toEqual({});
  });

  it("skips rows without a usable url", () => {
    const grouped = groupHistoryPhotos([
      photo("1996", "a"),
      { ...photo("1996", "bad"), url: "" },
    ]);

    expect(grouped["1996"]).toHaveLength(1);
  });
});
