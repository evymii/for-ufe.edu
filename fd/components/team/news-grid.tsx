import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { routes } from "@/config/routes";
import { featuredNews } from "@/content/site";
import type { GameRow } from "@/types/content";

/**
 * 12-column news grid: one featured story card (8 cols, 480px, ink panel
 * with an outlined watermark numeral) and a stack of compact cards in the
 * remaining 4 columns. Copy comes verbatim from content/site.ts.
 */
function formatGameDate(value: string) {
  return new Intl.DateTimeFormat("mn-MN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Ulaanbaatar",
  }).format(new Date(value));
}

export function NewsGrid({ latestGame }: { latestGame: GameRow | null }) {
  const [, ...rest] = featuredNews.items;
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
    <div className="grid gap-6 md:grid-cols-12">
      {latestGame ? (
        <article className="bg-ink card-lift relative flex min-h-[420px] flex-col justify-end overflow-hidden p-8 text-white md:col-span-8 md:min-h-[480px]">
          <span
            aria-hidden="true"
            className="font-display pointer-events-none absolute top-2 right-4 text-[150px] leading-[0.8] font-bold text-transparent select-none [-webkit-text-stroke:2px_rgba(255,255,255,0.16)]"
          >
            01
          </span>
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
        </article>
      ) : (
        <article className="bg-ink flex min-h-[280px] flex-col justify-end p-8 text-white md:col-span-8">
          <p className="text-[12px] font-semibold tracking-[0.12em] text-white/60 uppercase">
            {featuredNews.label}
          </p>
          <h3 className="font-display mt-3 text-[clamp(26px,3.4vw,36px)] leading-[1.05] font-bold uppercase">
            Одоогоор тоглолтын үр дүн алга
          </h3>
        </article>
      )}

      <div className="flex flex-col gap-6 md:col-span-4">
        {rest.map((item, index) => (
          <article
            key={item.title}
            className="border-line bg-paper card-lift relative flex gap-4 overflow-hidden border p-5"
          >
            <span
              aria-hidden="true"
              className="font-display text-mute/25 pointer-events-none w-14 shrink-0 text-[64px] leading-none font-bold select-none"
            >
              {String(index + 2).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <p className="eyebrow">{item.kicker}</p>
              <h3 className="font-display text-ink mt-1.5 text-[22px] leading-[1.1] font-semibold tracking-[0.02em] uppercase">
                {item.title}
              </h3>
              <p className="text-mute mt-2 line-clamp-3 text-[13px] leading-[1.6]">
                {item.body}
              </p>
            </div>
          </article>
        ))}

        {/* Schedule link completes the news stack */}
        <Link
          href={routes.site.schedule}
          className="group border-line bg-paper-soft hover:border-ink flex min-h-24 flex-col justify-center gap-1 border p-5 transition-colors"
        >
          <p className="eyebrow">Тоглолтууд</p>
          <p className="font-display text-ink flex items-center gap-2 text-[22px] leading-none font-semibold tracking-[0.02em] uppercase">
            Хуваарь харах
            <ArrowRight
              className="size-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </p>
          <p className="text-mute text-[13px]">
            {latestGame
              ? `Сүүлийн тоглолт · ${formatGameDate(latestGame.tipsAt)}`
              : "Шинэ тоглолтууд"}
          </p>
        </Link>
      </div>
    </div>
  );
}
