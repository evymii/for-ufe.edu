import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/team/hero";
import { NewsGrid } from "@/components/team/news-grid";
import { Reveal } from "@/components/team/reveal";
import { TeamButton } from "@/components/team/button";
import { PlayerSlot } from "@/components/team/photo-slot";
import { routes } from "@/config/routes";
import {
  featuredNews,
  hero,
  playerProfiles,
  stats,
  thanks,
} from "@/content/site";
import { basePosition } from "@/components/team/roster-utils";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Next-event strip — 120px ink bar with the two marks + CTAs */}
      <section aria-label={hero.aubl.title} className="bg-ink text-white">
        <div className="team-shell flex min-h-[120px] flex-wrap items-center justify-between gap-6 py-5">
          <div className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-full border border-white/25">
              <span className="font-display text-sm font-bold tracking-[0.06em] uppercase">
                СЭЗИС
              </span>
            </span>
            <span className="font-display text-2xl font-bold uppercase">·</span>
            <span className="flex size-14 items-center justify-center rounded-full bg-white/10">
              <span className="font-display text-sm font-bold tracking-[0.06em] uppercase">
                AUBL
              </span>
            </span>
          </div>
          <div>
            <p className="text-[12px] font-semibold tracking-[0.12em] text-white/50 uppercase">
              {hero.aubl.title} · Дараагийн тэмцээн
            </p>
            <p className="font-display mt-1 text-[clamp(20px,2.6vw,28px)] leading-none font-bold tracking-[0.02em] uppercase">
              2026–2027 он · Азийн их сургуулиудын лиг
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <TeamButton variant="dark" href={routes.site.roster}>
              Тоглогчид
            </TeamButton>
            <TeamButton variant="dark-outline" href={routes.site.history}>
              Түүх
            </TeamButton>
          </div>
        </div>
      </section>

      {/* Latest news — featured card + stacked cards */}
      <section aria-label={featuredNews.label} className="bg-paper">
        <div className="team-shell py-16 md:py-24">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-display text-ink text-[clamp(30px,4vw,40px)] leading-none font-bold tracking-[0.02em] uppercase">
                {featuredNews.heading}
              </h2>
              <Link
                href={routes.site.history}
                className="group text-mute hover:text-ink flex min-h-11 items-center gap-1.5 text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors"
              >
                Бүх мэдээ
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <NewsGrid />
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

      {/* Roster teaser — mist portrait tiles with number watermarks */}
      <section aria-label="Тоглогчид" className="bg-paper">
        <div className="team-shell py-16 md:py-24">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-display text-ink text-[clamp(30px,4vw,40px)] leading-none font-bold tracking-[0.02em] uppercase">
                Тоглогчид
              </h2>
              <Link
                href={routes.site.roster}
                className="group text-mute hover:text-ink flex min-h-11 items-center gap-1.5 text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors"
              >
                Бүх тоглогчид
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {playerProfiles.map((player, index) => (
              <Reveal key={player.number} delay={index * 60}>
                <article>
                  <Link
                    href={routes.site.roster}
                    className="group block"
                    aria-label={`${player.name} — профайл`}
                  >
                    <div className="bg-paper-soft relative aspect-[4/5] overflow-hidden">
                      <PlayerSlot
                        name={player.name}
                        number={player.number}
                        photo={null}
                        className="[&>span]:text-[96px]"
                      />
                    </div>
                    <p className="font-display text-ink mt-3 text-[22px] leading-tight font-semibold tracking-[0.02em] uppercase">
                      {player.name}
                    </p>
                    <p className="text-mute mt-1 text-[12px] font-semibold tracking-[0.12em] uppercase">
                      #{player.number} · {basePosition(player.position)}
                    </p>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Thanks — editorial split: two paragraphs + sponsors card */}
      <section aria-label={thanks.heading} className="border-line border-t">
        <div className="team-shell grid gap-10 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Талархал</p>
            <h2 className="font-display text-ink mt-3 text-[clamp(28px,4vw,40px)] leading-[1.05] font-bold tracking-[0.02em] uppercase">
              {thanks.heading}
            </h2>
            <p className="text-mute mt-5 text-base leading-[1.75]">
              {thanks.paragraphOne}
            </p>
            <p className="text-mute mt-4 text-base leading-[1.75]">
              {thanks.paragraphTwo}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div className="border-line bg-paper-soft flex h-full flex-col justify-center border p-6 md:p-8">
              <p className="eyebrow">Ивээн тэтгэгч, хамтран ажиллагчид</p>
              <ul className="mt-5">
                {thanks.sponsors.map((sponsor) => (
                  <li
                    key={sponsor}
                    className="border-line flex items-center gap-4 border-b py-3.5 last:border-0"
                  >
                    <span
                      className="bg-ink size-1.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-display text-ink text-[18px] font-semibold tracking-[0.08em] uppercase">
                      {sponsor}
                    </span>
                  </li>
                ))}
              </ul>
              <TeamButton
                variant="outline"
                href={routes.site.contact}
                className="mt-6 self-start"
              >
                Холбоо барих
              </TeamButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
