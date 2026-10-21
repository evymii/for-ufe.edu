"use client";

import { useEffect, useState } from "react";

import {
  liveGamesService,
  type LiveGameState,
} from "@/services/live-games.service";

function clock(value: number): string {
  return `${Math.floor(value / 60)
    .toString()
    .padStart(2, "0")}:${(value % 60).toString().padStart(2, "0")}`;
}

export function LiveScoreDisplay({
  gameId,
  opponent,
}: {
  gameId: string;
  opponent: string;
}) {
  const [state, setState] = useState<LiveGameState | null>(null);
  const [displayClock, setDisplayClock] = useState(0);

  useEffect(() => {
    let active = true;
    void liveGamesService.get(gameId).then(({ state: next }) => {
      if (active && next) setState(next);
    });
    const stream = new EventSource(
      `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4010"}/api/v1/live-games/${gameId}/stream`,
    );
    const refresh = () =>
      void liveGamesService.get(gameId).then(({ state: next }) => {
        if (active && next) setState(next);
      });
    stream.addEventListener("state_changed", refresh);
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

  if (!state || state.status === "NOT_STARTED") return null;

  return (
    <section
      className="border-line bg-ink mt-6 border p-5 text-white"
      aria-live="polite"
    >
      <div className="flex items-center justify-between text-xs font-semibold tracking-[0.12em] uppercase">
        <span className="text-white/70">Live now · Q{state.period}</span>
        <span>{clock(displayClock)}</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-xs text-white/70">UFE</p>
          <p className="font-display text-5xl">{state.teamScore}</p>
        </div>
        <div>
          <p className="text-xs text-white/70">{opponent}</p>
          <p className="font-display text-5xl">{state.opponentScore}</p>
        </div>
      </div>
    </section>
  );
}
