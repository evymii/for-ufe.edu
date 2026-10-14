import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/team/hero";
import { NewsGrid } from "@/components/team/news-grid";
import { Reveal } from "@/components/team/reveal";
import { HomeTimeline } from "@/components/team/home-timeline";
import { ScheduleStrip } from "@/components/team/schedule-strip";
import { routes } from "@/config/routes";
import { featuredNews, stats } from "@/content/site";
import { getGames } from "@/lib/content";

export default async function HomePage() {
  const games = await getGames();
  const played = games
    .filter((game) => game.status === "FINAL")
    .sort((a, b) => b.tipsAt.localeCompare(a.tipsAt));
  const latestGame = played[0] ?? null;
  const upcoming = games
    .filter((game) => game.status === "SCHEDULED")
    .sort((a, b) => a.tipsAt.localeCompare(b.tipsAt));
  const selectedGames = [...played.slice(0, 3), ...upcoming.slice(0, 5)];
  if (selectedGames.length < 8) {
    selectedGames.push(...played.slice(3, 3 + (8 - selectedGames.length)));
  }

  return (
    <>
      <ScheduleStrip
        games={selectedGames.sort((a, b) => a.tipsAt.localeCompare(b.tipsAt))}
      />
      <Hero />

      {/* Latest news — featured card + stacked cards */}
      <section aria-label={featuredNews.label} className="bg-paper">
        <div className="team-shell py-16 md:py-24">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-display text-ink text-[clamp(30px,4vw,40px)] leading-none font-bold tracking-[0.02em] uppercase">
                {featuredNews.heading}
              </h2>
              <Link
                href={routes.site.schedule}
                className="group text-mute hover:text-ink flex min-h-11 items-center gap-1.5 text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors"
              >
                Бүх тоглолт
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <NewsGrid latestGame={latestGame} />
          </Reveal>
        </div>
      </section>

      {/* Numbers rail — big condensed stats on hairlines */}
      <section
        aria-label="Тоонууд"
        className="border-line bg-paper-soft border-y"
      >
        <div className="team-shell grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4 md:py-16">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 60}
              className="md:border-line md:pl-8 md:first:border-0 md:first:pl-0"
            >
              <p className="font-display text-ink text-[clamp(40px,5vw,56px)] leading-none font-bold tracking-[0.02em]">
                {stat.value}
              </p>
              <p className="text-mute mt-3 max-w-[180px] text-[13px] leading-[1.5]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <HomeTimeline />
    </>
  );
}
