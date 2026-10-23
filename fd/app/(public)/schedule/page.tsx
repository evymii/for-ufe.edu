import type { Metadata } from "next";

import { PageHero } from "@/components/team/page-hero";
import { Reveal } from "@/components/team/reveal";
import { ScheduleBoard } from "@/components/team/schedule-board";
import { scheduleHeroFallback } from "@/content/pages";
import { getGames, getPageCopy } from "@/lib/content";

export const metadata: Metadata = {
  description:
    "Их сургуулиудын сагсан бөмбөгийн аварга шалгаруулах тэмцээний 2026/27 оны хуваарь, үр дүн, тасалбар.",
  title: "Хуваарь",
};

export const revalidate = 60;

export default async function SchedulePage() {
  const [games, heroCopy] = await Promise.all([
    getGames(),
    getPageCopy("schedule", "hero"),
  ]);
  const intro =
    (typeof heroCopy?.intro === "string" && heroCopy.intro) ||
    scheduleHeroFallback.intro;

  return (
    <>
      <PageHero
        breadcrumb="Хуваарь"
        subtitle={intro}
        title="Хуваарь"
        mark="/images/horse-mark.png"
      />
      <Reveal delay={60}>
        <ScheduleBoard games={games} />
      </Reveal>
    </>
  );
}
