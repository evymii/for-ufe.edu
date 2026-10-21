"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { routes } from "@/config/routes";
import { env } from "@/lib/env";
import {
  liveGamesService,
  type LiveGameState,
} from "@/services/live-games.service";
import type { GameRow } from "@/types/content";

function gameDate(iso: string) {
  const date = new Date(iso);
  const options = { timeZone: "Asia/Ulaanbaatar" };
  return {
    weekday: new Intl.DateTimeFormat("en-US", {
      ...options,
      weekday: "short",
    })
      .format(date)
      .toUpperCase(),
    month: new Intl.DateTimeFormat("en-US", {
      ...options,
      month: "short",
    })
      .format(date)
      .toUpperCase(),
    day: new Intl.DateTimeFormat("en-US", {
      ...options,
      day: "2-digit",
    }).format(date),
  };
}

function gameTime(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Ulaanbaatar",
  })
    .format(new Date(iso))
    .toUpperCase();
}

function clock(value: number): string {
  return `${Math.floor(value / 60)
    .toString()
    .padStart(2, "0")}:${(value % 60).toString().padStart(2, "0")}`;
}

function ScheduleCard({ game }: { game: GameRow }) {
  const [state, setState] = useState<LiveGameState | null>(null);
  const [displayClock, setDisplayClock] = useState(0);
  const date = gameDate(game.tipsAt);
  const isFinal = game.status === "FINAL";
  const isCancelled = game.status === "CANCELLED";
  const opponent = game.opponentShort ?? game.opponent;
  const isLive = state?.status === "LIVE" || state?.status === "HALFTIME";

  useEffect(() => {
    let active = true;
    void liveGamesService.get(game.id).then(({ state: next }) => {
      if (active && next) setState(next);
    });
    const stream = new EventSource(
      `${env.apiUrl}/api/v1/live-games/${game.id}/stream`,
    );
    const refresh = () =>
      void liveGamesService.get(game.id).then(({ state: next }) => {
        if (active && next) setState(next);
      });
    stream.addEventListener("state_changed", refresh);
    return () => {
      active = false;
      stream.close();
    };
  }, [game.id]);

  useEffect(() => {
    if (!state) return;
    const update = () => {
      const elapsed = state.clockRunning
        ? Math.floor((Date.now() - new Date(state.updatedAt).getTime()) / 1000)
        : 0;
      setDisplayClock(Math.max(0, state.clockSeconds - elapsed));
    };
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, [state]);

  const teamScore =
    state && state.status !== "NOT_STARTED"
      ? state.teamScore
      : isFinal
        ? game.teamScore
        : null;
  const opponentScore =
    state && state.status !== "NOT_STARTED"
      ? state.opponentScore
      : isFinal
        ? game.opponentScore
        : null;

  return (
    <Link
      href={routes.site.game(game.id)}
      aria-label={`${date.month} ${date.day}, ${game.opponent}, ${isLive ? "live" : isFinal ? "final" : isCancelled ? "cancelled" : gameTime(game.tipsAt)}`}
      className="group/card border-line bg-paper focus-visible:outline-ink hover:border-ink/40 hover:shadow-card flex h-[104px] w-[min(76vw,280px)] shrink-0 snap-start flex-col justify-between border p-3 transition-[border-color,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-mute text-[10px] font-semibold tracking-[0.1em] uppercase">
          {date.weekday} · {date.month} {date.day}
        </span>
        <span className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.08em] uppercase">
          <span
            aria-hidden="true"
            className={`size-1.5 rounded-full ${isLive ? "animate-pulse bg-red-500" : isFinal ? "bg-ink/35" : isCancelled ? "bg-ink/20" : "bg-ink"}`}
          />
          {isLive
            ? `Live · Q${state.period} · ${clock(displayClock)}`
            : isFinal
              ? "Final"
              : isCancelled
                ? "Цуцалсан"
                : gameTime(game.tipsAt)}
        </span>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between gap-3">
          <span className="flex min-w-0 items-center gap-2">
            <span
              aria-hidden="true"
              className="bg-ink text-paper flex size-5 shrink-0 items-center justify-center rounded-full text-[7px] font-bold"
            >
              U
            </span>
            <span className="font-display truncate text-[14px] font-semibold tracking-[0.02em] uppercase">
              СЭЗИС
            </span>
          </span>
          <span className="font-display text-[15px] leading-none font-bold tabular-nums">
            {teamScore ?? "—"}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex min-w-0 items-center gap-2">
            <span
              aria-hidden="true"
              className="border-line text-mute flex size-5 shrink-0 items-center justify-center rounded-full border text-[7px] font-bold"
            >
              {opponent.slice(0, 1)}
            </span>
            <span className="text-mute truncate text-[13px]">{opponent}</span>
          </span>
          <span className="text-mute text-[14px] leading-none font-semibold tabular-nums">
            {opponentScore ?? "—"}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ScheduleStrip({ games }: { games: GameRow[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: -1 | 1) => {
    railRef.current?.scrollBy({
      left: direction * 360,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-label="Сүүлийн үр дүн болон удахгүй болох тоглолтууд"
      className="border-line bg-paper-soft border-b"
    >
      <div className="flex items-center gap-2 py-2 pl-2 sm:gap-3 sm:pl-4">
        <div
          ref={railRef}
          role="region"
          aria-label="Тоглолтын хуваарь"
          tabIndex={0}
          className="no-scrollbar focus-visible:ring-ink flex min-w-0 flex-1 snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth outline-none focus-visible:ring-2 focus-visible:ring-inset sm:gap-3"
        >
          {games.length ? (
            games.map((game) => <ScheduleCard key={game.id} game={game} />)
          ) : (
            <Link
              href={routes.site.schedule}
              className="border-line bg-paper text-mute flex h-[104px] min-w-[248px] items-center justify-center border text-sm"
            >
              Одоогоор тоглолтын хуваарь алга
            </Link>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-1 pr-2 sm:gap-2 sm:pr-4">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Өмнөх тоглолтууд"
            className="team-focus border-line bg-paper text-ink hover:border-ink flex size-8 items-center justify-center rounded-full border transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Дараагийн тоглолтууд"
            className="team-focus border-line bg-paper text-ink hover:border-ink flex size-8 items-center justify-center rounded-full border transition-colors"
          >
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
