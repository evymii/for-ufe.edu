import type { Metadata } from "next";

import { CityEditionPage } from "@/components/team/city-edition";
import type { CityEditionContent } from "@/components/team/city-edition";
import { cityEditionFallback } from "@/content/pages";
import { getPageCopy } from "@/lib/content";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн хотын загварын өмсгөл 2026/27 — Улаанбаатар шөнө. Хотын сүнсөөр урласан тусгай дизайн.",
  title: "Хотын загвар",
};

export const revalidate = 60;

function str(value: unknown, fallback: string): string {
  return typeof value === "string" && value ? value : fallback;
}

function strArray(value: unknown, fallback: string[]): string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string")
    ? (value as string[])
    : fallback;
}

export default async function CityEditionPageRoute() {
  const copy = await getPageCopy("city-edition", "page");

  const chapters = Array.isArray(copy?.chapters)
    ? (copy.chapters as Array<{ title?: unknown; text?: unknown }>)
        .filter((chapter) => typeof chapter.title === "string")
        .map((chapter) => ({
          text: str(chapter.text, ""),
          title: str(chapter.title, ""),
        }))
    : [];

  const details = Array.isArray(copy?.details)
    ? (copy.details as Array<{ title?: unknown; text?: unknown }>)
        .filter((detail) => typeof detail.title === "string")
        .map((detail) => ({
          text: str(detail.text, ""),
          title: str(detail.title, ""),
        }))
    : [];

  const content: CityEditionContent = {
    chapterImages: strArray(
      copy?.chapterImages,
      cityEditionFallback.chapterImages,
    ),
    chapters: chapters.length >= 2 ? chapters : cityEditionFallback.chapters,
    colorwayNames: strArray(
      copy?.colorwayNames,
      cityEditionFallback.colorwayNames,
    ),
    colorways: strArray(copy?.colorways, cityEditionFallback.colorways),
    details: details.length >= 4 ? details : cityEditionFallback.details,
    editionName: str(copy?.editionName, cityEditionFallback.editionName),
    jerseyImage: str(copy?.jerseyImage, cityEditionFallback.jerseyImage),
    kicker: str(copy?.kicker, cityEditionFallback.kicker),
    shopButton: str(copy?.shopButton, cityEditionFallback.shopButton),
    shopTitle: str(copy?.shopTitle, cityEditionFallback.shopTitle),
    story: str(copy?.story, cityEditionFallback.story),
    year: str(copy?.year, cityEditionFallback.year),
  };

  return <CityEditionPage content={content} />;
}
