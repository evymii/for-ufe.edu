import { describe, expect, it } from "vitest";

import {
  CONSUMED_SECTION_PAIRS,
  SITE_CONTENT_PAGES,
  normalizeSectionData,
  sectionId,
} from "@/components/admin/content/site-content/sections";
import { siteContentDefault } from "@/lib/site-content-defaults";

/**
 * Registry invariants for the structured page-copy editor: the registry
 * must cover every (page, section) pair the public site reads, never
 * render blank (defaults prefill), and never drop unmodelled keys.
 */

const registryIds = new Set(
  SITE_CONTENT_PAGES.flatMap((page) =>
    page.sections.map((section) => sectionId(section)),
  ),
);

function findSection(id: string) {
  for (const page of SITE_CONTENT_PAGES) {
    const section = page.sections.find((s) => sectionId(s) === id);
    if (section) return section;
  }
  return undefined;
}

describe("site-content registry", () => {
  it("covers every page/section pair the public pages consume", () => {
    for (const [page, section] of CONSUMED_SECTION_PAIRS) {
      expect(
        registryIds.has(`${page}/${section}`),
        `missing editor section for ${page}/${section}`,
      ).toBe(true);
    }
  });

  it("has no duplicate sections across pages", () => {
    const all = SITE_CONTENT_PAGES.flatMap((page) =>
      page.sections.map((section) => sectionId(section)),
    );
    expect(new Set(all).size).toBe(all.length);
  });

  it("prefills every section with a static default", () => {
    for (const id of registryIds) {
      const [page, section] = id.split("/");
      expect(
        siteContentDefault(page, section),
        `no siteContentDefault for ${id}`,
      ).not.toBeNull();
    }
  });

  it("models every key of each section default (no invisible copy)", () => {
    for (const id of registryIds) {
      const def = findSection(id);
      expect(def, `registry entry for ${id}`).toBeDefined();
      const [page, section] = id.split("/");
      const defaults = siteContentDefault(page, section) ?? {};
      const known = new Set(def!.fields.map((field) => field.key));
      for (const key of Object.keys(defaults)) {
        expect(
          known.has(key),
          `${id}: default key "${key}" has no editor field`,
        ).toBe(true);
      }
    }
  });

  it("normalizes an empty stored blob to the public defaults", () => {
    const def = findSection("home/hero")!;
    const data = normalizeSectionData(def, null);
    expect(data.headline).toBe("Сагсан бөмбөгийн шигшээ баг");
    expect(data.ctaPlayers).toBe("Тоглогчидтой танилцах");
    expect(data.aubl).toEqual(expect.objectContaining({ title: "AUBL" }));
  });

  it("keeps stored values over defaults", () => {
    const def = findSection("home/hero")!;
    const data = normalizeSectionData(def, { headline: " Marker " });
    expect(data.headline).toBe(" Marker ");
    // untouched keys fall back to defaults
    expect(data.badge).toBe("2025–2026 оны Оюутны лигийн аварга");
  });

  it("passes unknown keys through so saves never drop data", () => {
    const def = findSection("players/page")!;
    const data = normalizeSectionData(def, {
      futureKey: { nested: true },
      subtitle: "2026–2027 оны баг",
    });
    expect(data.futureKey).toEqual({ nested: true });
    expect(data.subtitle).toBe("2026–2027 оны баг");
  });

  it("snaps empty arrays back to defaults (never-blank lists)", () => {
    const def = findSection("home/thanks")!;
    const data = normalizeSectionData(def, {
      heading: "Талархал",
      sponsors: [],
    });
    expect(data.sponsors).toEqual([
      "ХААН Банк",
      "BRB",
      "Redbull",
      "Circle Ball",
      "FORZA",
    ]);
  });

  it("keeps intentionally-empty optional lists empty", () => {
    const def = findSection("history/page")!;
    const data = normalizeSectionData(def, {
      timeline: [{ period: "1992", text: "АВАРГА", bullets: [] }],
    });
    const timeline = data.timeline as Array<Record<string, unknown>>;
    expect(timeline).toHaveLength(1);
    expect(timeline[0].bullets).toEqual([]);
  });

  it("maps newsletter interests (object or key form) to valid keys", () => {
    const def = findSection("newsletter/page")!;
    const objectForm = normalizeSectionData(def, {
      interests: [{ key: "recaps" }, { key: "nope" }, "tickets", "tickets"],
    });
    expect(objectForm.interests).toEqual(["recaps", "tickets"]);

    const empty = normalizeSectionData(def, { interests: [] });
    expect(empty.interests).toEqual(["recaps", "tickets", "community", "shop"]);
  });

  it("normalizes non-string junk in lists out of the editor", () => {
    const def = findSection("contact/info")!;
    const data = normalizeSectionData(def, {
      phones: ["77771100", 42, null, "77737777"],
    });
    expect(data.phones).toEqual(["77771100", "77737777"]);
  });
});
