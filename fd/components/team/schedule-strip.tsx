"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: "Asia/Ulaanbaatar",
  }).format(new Date(iso));
}

function clock(value: number): string {
  return `${Math.floor(value / 60)
    .toString()
    .padStart(2, "0")}:${(value % 60).toString().padStart(2, "0")}`;
}

function ScheduleCard({ game }: { game: GameRow }) {
  const [state, setState] = useState<LiveGameState | null>(null);
  const [displayClock, setDisplayClock] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const date = gameDate(game.tipsAt);
  const isFinal = game.status === "FINAL";
  const isCancelled = game.status === "CANCELLED";
  const opponent = game.opponentShort ?? game.opponent;
  const opponentName =
    opponent.toUpperCase() === "NUM FALCONS" ? "FALCONS" : opponent;
  const hasStarted = currentTime >= new Date(game.tipsAt).getTime();
  const activeState =
    hasStarted && state?.status !== "NOT_STARTED" ? state : null;
  const isLive =
    activeState?.status === "LIVE" || activeState?.status === "HALFTIME";

  useEffect(() => {
    let active = true;
    void liveGamesService
      .get(game.id)
      .then(({ state: next }) => {
        if (active && next) setState(next);
      })
      .catch(() => undefined);
    const stream = new EventSource(
      `${env.apiUrl}/api/v1/live-games/${game.id}/stream`,
    );
    const refresh = () =>
      void liveGamesService
        .get(game.id)
        .then(({ state: next }) => {
          if (active && next) setState(next);
        })
        .catch(() => undefined);
    stream.addEventListener("state_changed", refresh);
    return () => {
      active = false;
      stream.close();
    };
  }, [game.id]);

  useEffect(() => {
    const update = () => setCurrentTime(Date.now());
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

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

  const teamScore = activeState
    ? activeState.teamScore
    : isFinal
      ? game.teamScore
      : null;
  const opponentScore = activeState
    ? activeState.opponentScore
    : isFinal
      ? game.opponentScore
      : null;

  return (
    <Link
      href={routes.site.game(game.id)}
      aria-label={`${date.month} ${date.day}, ${game.opponent}, ${isLive ? "live" : isFinal ? "final" : isCancelled ? "cancelled" : gameTime(game.tipsAt)}`}
      className="group/card focus-visible:outline-brand relative flex h-[112px] w-full shrink-0 snap-start flex-col justify-between overflow-hidden border border-white bg-[#0d1f4a] p-3 text-white transition-[box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#174a45] [clip-path:polygon(52%_0,100%_0,100%_100%,48%_100%)]"
      />
      <div className="relative z-10 grid flex-1 grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="min-w-0 text-center">
          <span className="font-display block truncate text-[clamp(18px,3vw,28px)] font-bold tracking-[0.04em] uppercase">
            BRONCOS
          </span>
          {teamScore !== null && (
            <span className="font-display mt-1 block text-[clamp(24px,4vw,38px)] leading-none font-bold tabular-nums">
              {teamScore}
            </span>
          )}
        </div>

        <div className="text-center">
          {isLive ? (
            <>
              <span className="flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase">
                <span
                  aria-hidden="true"
                  className="size-1.5 animate-pulse rounded-full bg-red-500"
                />
                Live
              </span>
              <span className="mt-1 block text-[10px] font-semibold tracking-[0.08em] uppercase">
                Q{activeState?.period ?? 1} · {clock(displayClock)}
              </span>
            </>
          ) : (
            <>
              <span className="block text-[10px] font-semibold tracking-[0.1em] text-white/70 uppercase">
                {isFinal
                  ? "Final"
                  : isCancelled
                    ? "Цуцалсан"
                    : `${date.weekday} · ${date.month} ${date.day}`}
              </span>
              <span className="font-display mt-2 block text-[18px] font-bold tracking-[0.06em] uppercase">
                VS
              </span>
              {!isFinal && !isCancelled && (
                <span className="mt-2 block text-[10px] font-semibold tracking-[0.08em] text-white/70 uppercase">
                  {gameTime(game.tipsAt)} @ {game.venue}
                </span>
              )}
            </>
          )}
        </div>

        <div className="min-w-0 text-center">
          <span className="font-display block truncate text-[clamp(18px,3vw,28px)] font-bold tracking-[0.04em] uppercase">
            {opponentName}
          </span>
          {opponentScore !== null && (
            <span className="font-display mt-1 block text-[clamp(24px,4vw,38px)] leading-none font-bold tabular-nums">
              {opponentScore}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ScheduleStrip({ games }: { games: GameRow[] }) {
  return (
    <section
      aria-label="Сүүлийн үр дүн болон удахгүй болох тоглолтууд"
      className="border-line w-full overflow-hidden border-b bg-[#1b222b]"
    >
      <div className="px-2 py-5 sm:px-4">
        <div
          role="region"
          aria-label="Тоглолтын хуваарь"
          tabIndex={0}
          className="no-scrollbar focus-visible:ring-ink flex max-w-full min-w-0 overflow-x-auto overflow-y-hidden outline-none focus-visible:ring-2 focus-visible:ring-inset"
        >
          {games.length ? (
            games.map((game) => <ScheduleCard key={game.id} game={game} />)
          ) : (
            <Link
              href={routes.site.schedule}
              className="border-line bg-paper text-mute flex h-[128px] w-full items-center justify-center border text-sm"
            >
              Одоогоор тоглолтын хуваарь алга
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
