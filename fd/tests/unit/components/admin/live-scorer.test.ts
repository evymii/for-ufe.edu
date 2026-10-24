import { describe, expect, it } from "vitest";

import { projectAction } from "@/components/admin/live-scorer";
import type { LiveGameState } from "@/services/live-games.service";

function base(overrides: Partial<LiveGameState> = {}): LiveGameState {
  return {
    id: "state",
    gameId: "game",
    status: "LIVE",
    period: 1,
    clockSeconds: 700,
    clockRunning: true,
    teamScore: 0,
    opponentScore: 0,
    opponentFouls: [0, 0, 0, 0],
    teamFouls: [0, 0, 0, 0],
    timeouts: [6, 6],
    lineup: [],
    startedAt: null,
    endedAt: null,
    // "now" is pinned inside each test via the elapsed override
    updatedAt: new Date(Date.now() - 10_000).toISOString(),
    ...overrides,
  };
}

describe("projectAction clock handling", () => {
  it("burns elapsed seconds into the projection so the clock never jumps back up", () => {
    // Clock running, last server sync 10s ago: the user sees ~690.
    // A score tap must not reset the displayed clock to 700.
    const next = projectAction(base(), {
      points: 2,
      side: "team",
      type: "score",
    });
    expect(next.clockSeconds).toBe(690);
    expect(next.teamScore).toBe(2);
    expect(next.clockRunning).toBe(true);
  });

  it("keeps a paused clock frozen regardless of sync age", () => {
    const next = projectAction(
      base({
        clockRunning: false,
        updatedAt: new Date(Date.now() - 60_000).toISOString(),
      }),
      { points: 1, side: "opponent", type: "score" },
    );
    expect(next.clockSeconds).toBe(700);
    expect(next.opponentScore).toBe(1);
  });

  it("applies an explicit clock time and pauses it", () => {
    const next = projectAction(base(), {
      running: false,
      seconds: 463,
      type: "clock",
    });
    expect(next.clockSeconds).toBe(463);
    expect(next.clockRunning).toBe(false);
  });

  it("start does not run an empty clock", () => {
    const next = projectAction(base({ clockRunning: false, clockSeconds: 0 }), {
      type: "start",
    });
    expect(next.status).toBe("LIVE");
    expect(next.clockRunning).toBe(false);
  });

  it("reset wipes the game to a fresh pre-tip state", () => {
    const next = projectAction(
      base({ teamScore: 21, opponentScore: 13, period: 3 }),
      { type: "reset" },
    );
    expect(next.status).toBe("NOT_STARTED");
    expect(next.period).toBe(1);
    expect(next.clockSeconds).toBe(720);
    expect(next.clockRunning).toBe(false);
    expect(next.teamScore).toBe(0);
    expect(next.opponentScore).toBe(0);
  });
});
