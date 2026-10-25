"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { env } from "@/lib/env";
import { UFE_LOGO_SRC } from "@/lib/team-logos";
import {
  liveGamesService,
  type LiveGameState,
} from "@/services/live-games.service";

function clock(value: number): string {
  return `${Math.floor(value / 60)
    .toString()
    .padStart(2, "0")}:${(value % 60).toString().padStart(2, "0")}`;
}

/**
 * Center column of the box-score header. Until the scorer puts the game
 * live it renders the schedule's static values (status, final score,
 * date); once live, the label, score and clock follow the scorer in real
 * time inside the same card — no separate live panel below it.
 *
 * Two layouts share the state: ≥sm keeps the logo—spread-score—logo hero
 * (the page renders the side logos), while <sm stacks one row per team —
 * logo + name left, big score right — so each number is unmistakably its
 * team's.
 */
export function LiveScoreCenter({
  dateLabel,
  gameId,
  opponentLogoSrc,
  opponentName,
  rowIsFinal,
  rowLabel,
  rowOpponentScore,
  rowTeamScore,
}: {
  dateLabel: string;
  gameId: string;
  opponentLogoSrc: null | string;
  opponentName: string;
  rowIsFinal: boolean;
  rowLabel: string;
  rowOpponentScore: number | null;
  rowTeamScore: number | null;
}) {
  const [state, setState] = useState<LiveGameState | null>(null);
  const [displayClock, setDisplayClock] = useState(0);

  useEffect(() => {
    let active = true;
    void liveGamesService.get(gameId).then(({ state: next }) => {
      if (active && next) setState(next);
    });
    const stream = new EventSource(
      `${env.apiUrl}/api/v1/live-games/${gameId}/stream`,
    );
    const refresh = () =>
      void liveGamesService.get(gameId).then(({ state: next }) => {
        if (active && next) setState(next);
      });
    stream.addEventListener("state_changed", refresh);
    // Reconnects (proxy timeout, phone sleep/wake) replay nothing the client
    // missed while disconnected — resync on every (re)open.
    stream.onopen = refresh;
    return () => {
      active = false;
      stream.close();
    };
  }, [gameId]);

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

  // The scorer's word wins over the schedule row: an in-progress game
  // shows live, and a scorer-final result shows before the row is updated.
  const isActive = state?.status === "LIVE" || state?.status === "HALFTIME";
  const scoredFinal = !rowIsFinal && state?.status === "FINAL" ? state : null;

  // Numbers spread wide so each sits visually beside its team's logo.
  const bigScore = (team: number, opponent: number) => (
    <p className="font-display my-2 flex items-center justify-center gap-x-[clamp(64px,10vw,200px)] text-[clamp(36px,8vw,56px)] leading-none font-bold text-white tabular-nums">
      <span>{team}</span>
      <span
        aria-hidden="true"
        className="text-[0.7em] font-normal text-white/40"
      >
        –
      </span>
      <span>{opponent}</span>
    </p>
  );

  const liveLabel = (period: number, halftime: boolean) => (
    <span className="flex items-center justify-center gap-1.5">
      <span
        aria-hidden="true"
        className="size-1.5 animate-pulse rounded-full bg-red-500"
      />
      <span className="text-red-500">
        {halftime ? "HALFTIME" : "LIVE"} · Q{period}
      </span>
    </span>
  );

  /** Mobile (<sm): one row per team so every score is labelled by its logo. */
  const mobileBoard = (
    label: React.ReactNode,
    teamScore: React.ReactNode,
    opponentScore: React.ReactNode,
    sub: string,
  ) => (
    <div className="sm:hidden">
      <p className="flex min-h-4 items-center justify-center text-[10px] font-bold tracking-[0.14em] text-white/60 uppercase">
        {label}
      </p>
      <div className="mt-4 space-y-2 text-left">
        <TeamScoreRow
          logoSrc={UFE_LOGO_SRC}
          name="UFE Broncos"
          score={teamScore}
        />
        <TeamScoreRow
          logoSrc={opponentLogoSrc}
          name={opponentName}
          score={opponentScore}
        />
      </div>
      <p className="mt-4 text-center text-xs text-white/50 tabular-nums">
        {sub}
      </p>
    </div>
  );

  if (isActive && state) {
    return (
      <>
        <div aria-live="polite" className="hidden text-center sm:block">
          <p className="flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-[0.14em] text-white/50 uppercase">
            <span
              aria-hidden="true"
              className="size-1.5 animate-pulse rounded-full bg-red-500"
            />
            <span className="text-red-500">
              {state.status === "HALFTIME" ? "HALFTIME" : "LIVE"} · Q
              {state.period}
            </span>
          </p>
          {bigScore(state.teamScore, state.opponentScore)}
          <p className="text-xs text-white/70 tabular-nums">
            {clock(displayClock)}
          </p>
        </div>
        {mobileBoard(
          liveLabel(state.period, state.status === "HALFTIME"),
          state.teamScore,
          state.opponentScore,
          clock(displayClock),
        )}
      </>
    );
  }

  if (scoredFinal) {
    return (
      <>
        <div className="hidden text-center sm:block">
          <p className="text-[10px] font-bold tracking-[0.14em] text-white/60 uppercase">
            {scoredFinal.teamScore > scoredFinal.opponentScore
              ? "FINAL · WIN"
              : "FINAL · LOSS"}
          </p>
          {bigScore(scoredFinal.teamScore, scoredFinal.opponentScore)}
          <p className="text-xs text-white/50">{dateLabel}</p>
        </div>
        {mobileBoard(
          scoredFinal.teamScore > scoredFinal.opponentScore
            ? "FINAL · WIN"
            : "FINAL · LOSS",
          scoredFinal.teamScore,
          scoredFinal.opponentScore,
          dateLabel,
        )}
      </>
    );
  }

  return (
    <>
      <div className="hidden text-center sm:block">
        <p className="text-[10px] font-bold tracking-[0.14em] text-white/60 uppercase">
          {rowLabel}
        </p>
        <p className="font-display my-2 flex items-center justify-center gap-x-[clamp(64px,10vw,200px)] text-[clamp(36px,8vw,56px)] leading-none font-bold text-white tabular-nums">
          <span>
            {rowIsFinal && rowTeamScore !== null ? rowTeamScore : "—"}
          </span>
          <span
            aria-hidden="true"
            className="text-[0.7em] font-normal text-white/40"
          >
            –
          </span>
          <span>
            {rowIsFinal && rowOpponentScore !== null ? rowOpponentScore : "—"}
          </span>
        </p>
        <p className="text-xs text-white/50">{dateLabel}</p>
      </div>
      {mobileBoard(
        rowLabel,
        rowIsFinal && rowTeamScore !== null ? rowTeamScore : "—",
        rowIsFinal && rowOpponentScore !== null ? rowOpponentScore : "—",
        dateLabel,
      )}
    </>
  );
}

/** One mobile scoreboard row: logo + team name left, big score right. */
function TeamScoreRow({
  logoSrc,
  name,
  score,
}: {
  logoSrc: null | string;
  name: string;
  score: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="flex min-w-0 items-center gap-3">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt=""
            width={96}
            height={96}
            className="h-10 w-auto shrink-0"
          />
        ) : (
          <span className="bg-paper-soft font-display text-mute flex size-10 shrink-0 items-center justify-center text-sm font-bold uppercase">
            {name.charAt(0)}
          </span>
        )}
        <span className="font-display truncate text-sm font-bold tracking-[0.04em] text-white uppercase">
          {name}
        </span>
      </span>
      <span className="font-display shrink-0 text-[clamp(28px,7vw,40px)] leading-none font-bold text-white tabular-nums">
        {score}
      </span>
    </div>
  );
}
