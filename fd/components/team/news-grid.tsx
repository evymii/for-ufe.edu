import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { routes } from "@/config/routes";
import type { GameRow } from "@/types/content";

/** One story card in the grid (from bd/ NewsPost rows or the static fallback). */
export interface NewsItem {
  kicker: string;
  title: string;
  body: string;
}

function formatGameDate(value: string) {
  return new Intl.DateTimeFormat("mn-MN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Ulaanbaatar",
  }).format(new Date(value));
}

/**
 * 12-column news grid: the featured card (8 cols, ink panel) surfaces the
 * latest finished game with its score, and a stack of compact story cards
 * from the NewsPost collection fills the remaining 4 columns (static
 * fallback when the API is empty/unreachable).
 */
export function FeaturedGameCard({
  label,
  latestGame,
}: {
  label: string;
  latestGame: GameRow | null;
}) {
  const opponent = latestGame?.opponentShort ?? latestGame?.opponent;
  const result =
    latestGame &&
    latestGame.teamScore !== null &&
    latestGame.opponentScore !== null
      ? latestGame.teamScore > latestGame.opponentScore
        ? "Ялалт"
        : latestGame.teamScore < latestGame.opponentScore
          ? "Хожигдол"
          : "Тэнцээ"
      : null;

  return (
    <>
      {latestGame ? (
        <article className="bg-ink card-lift relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden p-8 text-white md:col-span-8 md:min-h-[480px]">
          <Image
            src="/season-welcome.png"
            alt="СЭЗИС Broncos багийн нийт зураг"
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05070b]/25 to-transparent"
          />
          <span
            aria-hidden="true"
            className="font-display pointer-events-none absolute top-2 right-4 z-10 text-[150px] leading-[0.8] font-bold text-transparent select-none [-webkit-text-stroke:2px_rgba(255,255,255,0.16)]"
          >
            01
          </span>
          <div className="relative z-10">
            <p className="text-[12px] font-semibold tracking-[0.12em] text-white/60 uppercase">
              {latestGame.competition}
            </p>
            <h3 className="font-display mt-3 max-w-[520px] text-[clamp(26px,3.4vw,36px)] leading-[1.05] font-bold tracking-[0.02em] uppercase">
              Сүүлийн тоглолт
            </h3>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-display text-[clamp(36px,5vw,56px)] leading-none font-bold tabular-nums">
                {latestGame.teamScore ?? "—"}
                <span className="mx-3 text-white/35">—</span>
                {latestGame.opponentScore ?? "—"}
              </span>
              <span className="text-[13px] font-semibold tracking-[0.1em] text-white/65 uppercase">
                СЭЗИС · {opponent}
              </span>
            </div>
            <p className="mt-4 max-w-[520px] text-[14px] leading-[1.6] text-white/70">
              {result ? `${result} · ` : ""}
              {latestGame.round ? `${latestGame.round} · ` : ""}
              {formatGameDate(latestGame.tipsAt)}
            </p>
          </div>
        </article>
      ) : (
        <article className="bg-ink relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden p-8 text-white md:col-span-8">
          <Image
            src="/season-welcome.png"
            alt="СЭЗИС Broncos багийн нийт зураг"
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover object-center"
          />
          <div className="relative z-10">
            <p className="text-[12px] font-semibold tracking-[0.12em] text-white/60 uppercase">
              {label}
            </p>
            <h3 className="font-display mt-3 text-[clamp(26px,3.4vw,36px)] leading-[1.05] font-bold uppercase">
              2026–2027 оны улиралд тавтай морил
            </h3>
          </div>
        </article>
      )}
    </>
  );
}

/** Compact story cards + the schedule link — the news section's right rail;
 *  stays visible on every carousel slide. */
export function NewsStack({
  items,
  latestGame,
}: {
  items: NewsItem[];
  latestGame: GameRow | null;
}) {
  const [, ...rest] = items;
  return (
    <div className="flex flex-col gap-6 md:col-span-4 md:min-h-[520px]">
      {rest.map((item, index) => (
        <div key={item.title} className="group relative flex-1">
          <span
            aria-hidden="true"
            className="bg-brand pointer-events-none absolute inset-0 translate-x-2 translate-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <article className="border-line card-lift relative z-10 flex h-full gap-4 border bg-white p-5">
            <span
              aria-hidden="true"
              className="font-display pointer-events-none w-14 shrink-0 text-[64px] leading-none font-bold text-[#05070b]/20 select-none"
            >
              {String(index + 2).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <p className="eyebrow text-[#05070b]/65">{item.kicker}</p>
              <h3 className="font-display mt-1.5 text-[22px] leading-[1.1] font-semibold tracking-[0.02em] text-[#05070b] uppercase">
                {item.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-[13px] leading-[1.6] text-[#05070b]/65">
                {item.body}
              </p>
            </div>
          </article>
        </div>
      ))}

      {/* Schedule link completes the news stack */}
      <div className="group relative">
        <span
          aria-hidden="true"
          className="bg-brand pointer-events-none absolute inset-0 translate-x-2 translate-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <Link
          href={routes.site.schedule}
          className="border-line relative z-10 flex min-h-24 flex-col justify-center gap-1 border bg-white p-5"
        >
          <p className="eyebrow text-[#05070b]/65">Тоглолтууд</p>
          <p className="font-display flex items-center gap-2 text-[22px] leading-none font-semibold tracking-[0.02em] text-[#05070b] uppercase">
            Хуваарь харах
            <ArrowRight
              className="size-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </p>
          <p className="text-[13px] text-[#05070b]/65">
            {latestGame
              ? `Сүүлийн тоглолт · ${formatGameDate(latestGame.tipsAt)}`
              : "Шинэ тоглолтууд"}
          </p>
        </Link>
      </div>
    </div>
  );
}

/** The pre-carousel layout: featured card + stack side by side. */
export function NewsGrid({
  label,
  items,
  latestGame,
}: {
  label: string;
  items: NewsItem[];
  latestGame: GameRow | null;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12">
      <div className="md:col-span-8">
        <FeaturedGameCard label={label} latestGame={latestGame} />
      </div>
      <NewsStack items={items} latestGame={latestGame} />
    </div>
  );
}
