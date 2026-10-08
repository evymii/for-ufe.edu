import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero, StatCards } from "@/components/team/hero";
import { PlayerProfileTeaser } from "@/components/team/player-profile-card";
import { SectionHeading } from "@/components/team/section-heading";
import { routes } from "@/config/routes";
import { featuredNews, playerProfiles, stats, thanks } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Institutional stats */}
      <section aria-label="Үзүүлэлт" className="bg-paper-soft">
        <div className="mx-auto w-full max-w-[1120px] px-4 py-[72px] sm:px-6 md:py-24">
          <StatCards stats={[...stats]} />
        </div>
      </section>

      {/* Featured news — championship season */}
      <section aria-label={featuredNews.label} className="bg-paper">
        <div className="mx-auto w-full max-w-[1120px] px-4 py-[72px] sm:px-6 md:py-24">
          <SectionHeading
            eyebrow={featuredNews.label}
            title={featuredNews.heading}
          />
          <p className="text-mute -mt-4 mb-10 max-w-2xl text-base leading-[1.65]">
            {featuredNews.lead}
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredNews.items.map((item) => (
              <article
                key={item.title}
                className="border-line bg-paper shadow-card card-lift flex flex-col gap-3 rounded-xl border p-6"
              >
                <p className="eyebrow">{item.kicker}</p>
                <h3 className="font-display text-ink text-[22px] leading-[1.25] font-semibold tracking-[0.02em] uppercase">
                  {item.title}
                </h3>
                <p className="text-mute flex-1 text-sm leading-[1.75]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Roster preview */}
      <section aria-label="Тоглогчид" className="bg-paper-soft">
        <div className="mx-auto w-full max-w-[1120px] px-4 py-[72px] sm:px-6 md:py-24">
          <SectionHeading
            eyebrow="Шигшээ баг"
            title="Тоглогчид"
            href={routes.site.roster}
            linkLabel="Бүх тоглогчид"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {playerProfiles.map((player) => (
              <PlayerProfileTeaser key={player.number} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* Thanks */}
      <section aria-label={thanks.heading} className="bg-paper">
        <div className="mx-auto w-full max-w-[1120px] px-4 py-[72px] sm:px-6 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow">Талархал</p>
              <h2 className="font-display text-ink mt-2 text-[clamp(28px,4vw,40px)] leading-[1.15] font-semibold tracking-[0.02em] uppercase">
                {thanks.heading}
              </h2>
              <p className="text-mute mt-5 text-base leading-[1.75]">
                {thanks.paragraphOne}
              </p>
              <p className="text-mute mt-4 text-base leading-[1.75]">
                {thanks.paragraphTwo}
              </p>
            </div>
            <div className="border-line bg-paper-soft flex flex-col justify-center rounded-xl border p-6 md:p-8">
              <p className="text-mute text-[11px] font-semibold tracking-[0.28em] uppercase">
                Ивээн тэтгэгч, хамтран ажиллагчид
              </p>
              <ul className="mt-5 space-y-3">
                {thanks.sponsors.map((sponsor) => (
                  <li
                    key={sponsor}
                    className="border-line flex items-center gap-3 border-b pb-3 last:border-0 last:pb-0"
                  >
                    <span
                      className="bg-brand-2/50 size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <span className="font-display text-ink text-[15px] font-semibold tracking-[0.1em] uppercase">
                      {sponsor}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={routes.site.contact}
                className="text-brand-2 hover:text-brand group mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold transition-colors"
              >
                Холбоо барих
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
