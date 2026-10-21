"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api-client";
import { env } from "@/lib/env";
import {
  liveGamesService,
  type LiveGameEvent,
  type LiveGameState,
} from "@/services/live-games.service";
import type { GameRow, PlayerRow } from "@/types/content";

function clock(value: number): string {
  return `${Math.floor(value / 60)
    .toString()
    .padStart(2, "0")}:${(value % 60).toString().padStart(2, "0")}`;
}

export function LiveScorer() {
  const [games, setGames] = useState<GameRow[]>([]);
  const [players, setPlayers] = useState<PlayerRow[]>([]);
  const [gameId, setGameId] = useState("");
  const [state, setState] = useState<LiveGameState | null>(null);
  const [displayClock, setDisplayClock] = useState(0);
  const [events, setEvents] = useState<LiveGameEvent[]>([]);
  const [newOpponent, setNewOpponent] = useState("");
  const [newTipsAt, setNewTipsAt] = useState("");

  useEffect(() => {
    void Promise.all([
      api.get<{ items: GameRow[] }>("/api/v1/content/games?limit=100"),
      api.get<{ items: PlayerRow[] }>("/api/v1/content/players?role=PLAYER"),
    ])
      .then(([gameResult, playerResult]) => {
        setGames(gameResult.items);
        setPlayers(playerResult.items);
        if (gameResult.items[0]) setGameId(gameResult.items[0].id);
      })
      .catch((error) =>
        toast.error(
          error instanceof Error ? error.message : "Could not load scorer data",
        ),
      );
  }, []);

  useEffect(() => {
    if (!gameId) return;
    let active = true;
    void liveGamesService
      .ensure(gameId)
      .then(({ state: next }) => {
        if (active) setState(next);
      })
      .catch((error) =>
        toast.error(
          error instanceof Error ? error.message : "Could not load live game",
        ),
      );
    void liveGamesService
      .events(gameId)
      .then(({ events: next }) => {
        if (active) setEvents(next);
      })
      .catch(() => undefined);
    const stream = new EventSource(
      `${env.apiUrl}/api/v1/live-games/${gameId}/stream`,
    );
    stream.addEventListener("state_changed", () => {
      void liveGamesService.get(gameId).then(({ state: next }) => {
        if (active && next) setState(next);
      });
    });
    return () => {
      active = false;
      stream.close();
    };
  }, [gameId]);

  const selectedGame = useMemo(
    () => games.find((game) => game.id === gameId),
    [games, gameId],
  );
  const selectedLineup = state?.lineup ?? [];

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

  async function createGame() {
    if (!newOpponent.trim() || !newTipsAt) return;
    try {
      const result = await api.post<{ game: GameRow }>(
        "/api/v1/content/games",
        {
          opponent: newOpponent.trim(),
          tipsAt: new Date(newTipsAt).toISOString(),
        },
      );
      setGames((current) => [...current, result.game]);
      setGameId(result.game.id);
      setNewOpponent("");
      setNewTipsAt("");
      toast.success("Game created");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not create game",
      );
    }
  }

  async function action(payload: Record<string, unknown>) {
    if (!gameId) return;
    try {
      const result = await liveGamesService.action(gameId, payload);
      setState(result.state);
      const nextEvents = await liveGamesService.events(gameId);
      setEvents(nextEvents.events);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Action failed");
    }
  }

  function togglePlayer(id: string) {
    const next = selectedLineup.includes(id)
      ? selectedLineup.filter((playerId) => playerId !== id)
      : [...selectedLineup, id];
    if (next.length <= 5) void action({ type: "lineup", playerIds: next });
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Live scorer</h1>
        <p className="text-muted-foreground">
          Operate the selected game from a phone or tablet.
        </p>
      </div>
      <select
        className="border-input bg-background h-10 w-full rounded-md border px-3"
        value={gameId}
        onChange={(event) => setGameId(event.target.value)}
      >
        <option value="">Select a game</option>
        {games.map((game) => (
          <option key={game.id} value={game.id}>
            {game.opponent} · {new Date(game.tipsAt).toLocaleString()}
          </option>
        ))}
      </select>
      {state && selectedGame ? (
        <>
          <section className="bg-card grid gap-4 rounded-xl border p-4 shadow-sm md:grid-cols-3">
            <div className="flex items-center justify-between md:col-span-3">
              <span className="text-muted-foreground">
                Q{state.period} · {state.status}
              </span>
              <strong className="text-4xl tabular-nums">
                {clock(displayClock)}
              </strong>
            </div>
            <div className="rounded-lg bg-slate-900 p-4 text-center text-white">
              <p className="text-sm">UFE</p>
              <strong className="text-5xl">{state.teamScore}</strong>
              <p>Fouls: {state.teamFouls[state.period - 1] ?? 0}</p>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 text-center">
              <p className="text-sm">{selectedGame.opponent}</p>
              <strong className="text-5xl">{state.opponentScore}</strong>
              <p>Fouls: {state.opponentFouls[state.period - 1] ?? 0}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button onClick={() => void action({ type: "start" })}>
                Start
              </Button>
              <Button
                variant="outline"
                onClick={() => void action({ type: "clock", running: false })}
              >
                Pause
              </Button>
              <Button
                variant="outline"
                onClick={() => void action({ type: "halftime" })}
              >
                Halftime
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  if (window.confirm("End this game?"))
                    void action({ type: "end" });
                }}
              >
                End game
              </Button>
            </div>
          </section>
          <section className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 rounded-xl border p-4 md:col-span-2">
              <h2 className="font-semibold">Score controls</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    label: "UFE",
                    side: "team" as const,
                    score: state.teamScore,
                    fouls: state.teamFouls[state.period - 1] ?? 0,
                  },
                  {
                    label: selectedGame.opponent,
                    side: "opponent" as const,
                    score: state.opponentScore,
                    fouls: state.opponentFouls[state.period - 1] ?? 0,
                  },
                ].map((team) => (
                  <div
                    key={team.side}
                    className="bg-muted/40 space-y-3 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{team.label}</h3>
                      <span className="text-2xl font-bold tabular-nums">
                        {team.score}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((points) => (
                        <Button
                          key={`plus-${points}`}
                          onClick={() =>
                            void action({
                              type: "score",
                              side: team.side,
                              points,
                            })
                          }
                        >
                          +{points}
                        </Button>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((points) => (
                        <Button
                          key={`minus-${points}`}
                          variant="outline"
                          onClick={() =>
                            void action({
                              type: "adjust_score",
                              side: team.side,
                              amount: -points,
                            })
                          }
                        >
                          -{points}
                        </Button>
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm">Team fouls: {team.fouls}</span>
                      <Button
                        variant="outline"
                        onClick={() =>
                          void action({
                            type: "foul",
                            side: team.side,
                            amount: 1,
                            period: state.period,
                          })
                        }
                      >
                        +1 foul
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() =>
                          void action({
                            type: "foul",
                            side: team.side,
                            amount: -1,
                            period: state.period,
                          })
                        }
                      >
                        -1 foul
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid gap-2 md:grid-cols-3">
                {[
                  {
                    label: "UFE",
                    side: "team" as const,
                    remaining: state.timeouts[0] ?? 0,
                  },
                  {
                    label: "Opponent",
                    side: "opponent" as const,
                    remaining: state.timeouts[1] ?? 0,
                  },
                ].map((team) => (
                  <div
                    key={team.side}
                    className="flex items-center justify-between gap-2 rounded-md border p-2"
                  >
                    <span className="text-sm">
                      {team.label} timeouts: <strong>{team.remaining}</strong>
                    </span>
                    <span className="flex gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          void action({
                            type: "timeout",
                            side: team.side,
                            amount: 1,
                          })
                        }
                      >
                        +1
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          void action({
                            type: "timeout",
                            side: team.side,
                            amount: -1,
                          })
                        }
                      >
                        -1
                      </Button>
                    </span>
                  </div>
                ))}
                <Button
                  variant="outline"
                  onClick={() => void action({ type: "undo" })}
                >
                  Undo last
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((period) => (
                  <Button
                    key={period}
                    variant={state.period === period ? "default" : "outline"}
                    onClick={() => void action({ type: "period", period })}
                  >
                    Q{period}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-3 rounded-xl border p-4">
              <h2 className="font-semibold">
                Players on floor ({selectedLineup.length}/5)
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {players.map((player) => (
                  <Button
                    key={player.id}
                    variant={
                      selectedLineup.includes(player.id) ? "default" : "outline"
                    }
                    onClick={() => togglePlayer(player.id)}
                  >
                    {player.number ?? "—"} · {player.name}
                  </Button>
                ))}
              </div>
            </div>
          </section>
          <section className="rounded-xl border p-4">
            <h2 className="mb-3 font-semibold">Event history</h2>
            <div className="max-h-48 space-y-1 overflow-auto text-sm">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="text-muted-foreground border-b py-1"
                >
                  {event.type} ·{" "}
                  {new Date(event.createdAt).toLocaleTimeString()}
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="max-w-xl space-y-3 rounded-xl border p-4">
          <h2 className="font-semibold">Create a scheduled game</h2>
          <p className="text-muted-foreground text-sm">
            No game exists yet. Create the Sunday game here, then select it to
            start scoring.
          </p>
          <Input
            value={newOpponent}
            onChange={(event) => setNewOpponent(event.target.value)}
            placeholder="Opponent name"
          />
          <Input
            value={newTipsAt}
            onChange={(event) => setNewTipsAt(event.target.value)}
            type="datetime-local"
          />
          <Button
            onClick={() => void createGame()}
            disabled={!newOpponent.trim() || !newTipsAt}
          >
            Create game
          </Button>
        </section>
      )}
    </div>
  );
}
