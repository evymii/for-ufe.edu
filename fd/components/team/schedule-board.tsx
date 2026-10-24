"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import { routes } from "@/config/routes";
import { FilterPills } from "@/components/team/filter-pills";
import type { GameRow } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * Schedule board: month pill tabs, home/away filter and a List ⇄ Calendar
 * switch. List rows are 88px on a [96px 56px 1fr 120px 220px] grid; the next
 * game gets a 4px ink edge + mist fill and scrolls into view on mount.
 * Calendar is a 7-column month grid whose change slides 240ms.
 */

type VenueFilter = "all" | "home" | "away";
type ViewMode = "list" | "calendar";

const WEEKDAYS = ["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"];

/** Mongolian month names for the pill tabs. */
const MONTHS = [
  "1-р сар",
  "2-р сар",
  "3-р сар",
  "4-р сар",
  "5-р сар",
  "6-р сар",
  "7-р сар",
  "8-р сар",
  "9-р сар",
  "10-р сар",
  "11-р сар",
  "12-р сар",
];

/** UB is UTC+8 — render times in the venue's local timezone. */
function localParts(iso: string): { day: string; date: number; time: string } {
  const date = new Date(iso);
  const dayFmt = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "Asia/Ulaanbaatar",
  });
  const dateFmt = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    timeZone: "Asia/Ulaanbaatar",
  });
  const timeFmt = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Ulaanbaatar",
  });
  return {
    day: dayFmt.format(date),
    date: Number(dateFmt.format(date)),
    time: timeFmt.format(date),
  };
}

function monthKey(iso: string): string {
  const d = new Date(iso);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

export function ScheduleBoard({ games }: { games: GameRow[] }) {
  const months = useMemo(() => {
    const seen = new Map<string, number>(); // key → label month number
    for (const game of games) {
      const key = monthKey(game.tipsAt);
      if (!seen.has(key)) {
        seen.set(key, new Date(game.tipsAt).getUTCMonth());
      }
    }
    return [...seen.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([value, monthIndex]) => ({
        label: MONTHS[monthIndex] ?? value,
        value,
      }));
  }, [games]);

  // Captured once per mount — useMemo below must stay pure during render.
  const [now] = useState(() => Date.now());
  const nextGame = useMemo(
    () =>
      games.find(
        (game) =>
          game.status === "SCHEDULED" && new Date(game.tipsAt).getTime() > now,
      ) ?? null,
    [games, now],
  );

  const defaultMonth = nextGame ? monthKey(nextGame.tipsAt) : months[0]?.value;
  const [month, setMonth] = useState(defaultMonth);
  const [venue, setVenue] = useState<VenueFilter>("all");
  const [view, setView] = useState<ViewMode>("list");
  const nextRowRef = useRef<HTMLLIElement>(null);

  // The next game auto-scrolls into view (subtle, once).
  useEffect(() => {
    if (!nextRowRef.current) return;
    const timer = window.setTimeout(() => {
      nextRowRef.current?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }, 400);
    return () => window.clearTimeout(timer);
  }, []);

  const monthGames = useMemo(
    () =>
      games.filter((game) => {
        if (monthKey(game.tipsAt) !== month) return false;
        if (venue === "home") return game.isHome;
        if (venue === "away") return !game.isHome;
        return true;
      }),
    [games, month, venue],
  );

  return (
    <div className="team-shell pb-16 md:pb-20">
      {/* Controls: month tabs left, venue filter + view switch right */}
      <div className="border-line flex flex-wrap items-center justify-between gap-4 border-b py-4">
        <FilterPills
          label="Сар"
          options={months}
          value={month}
          onChange={setMonth}
        />
        <div className="flex flex-wrap items-center gap-4">
          <FilterPills
            label="Талбар"
            size="sm"
            options={[
              { value: "all", label: "Бүгд" },
              { value: "home", label: "Гэрээсээ" },
              { value: "away", label: "Гадаа" },
            ]}
            value={venue}
            onChange={setVenue}
          />
          <FilterPills
            label="Харагдац"
            size="sm"
            options={[
              { value: "list", label: "Жагсаалт" },
              { value: "calendar", label: "Хуанли" },
            ]}
            value={view}
            onChange={setView}
          />
        </div>
      </div>

      {view === "list" ? (
        <ul key={`${month}-${venue}-list`} className="view-swap mt-6">
          {monthGames.map((game) => (
            <GameRowItem
              key={game.id}
              game={game}
              isNext={nextGame?.id === game.id}
              innerRef={nextGame?.id === game.id ? nextRowRef : undefined}
            />
          ))}
          {monthGames.length === 0 ? (
            <li className="text-mute py-12 text-center text-sm">
              Энэ сард тоглолт байхгүй.
            </li>
          ) : null}
        </ul>
      ) : (
        <MonthCalendar
          key={`${month}-${venue}-cal`}
          month={month}
          games={monthGames}
        />
      )}
    </div>
  );
}

function GameRowItem({
  game,
  isNext,
  innerRef,
}: {
  game: GameRow;
  isNext: boolean;
  innerRef?: React.Ref<HTMLLIElement>;
}) {
  const parts = localParts(game.tipsAt);
  const opponent = game.opponentShort ?? game.opponent;
  const isFinal = game.status === "FINAL";
  const won =
    isFinal &&
    game.teamScore !== null &&
    game.opponentScore !== null &&
    game.teamScore > game.opponentScore;

  return (
    <li
      ref={innerRef}
      className={cn(
        // Mobile drops the (hidden) opponent-mark column so the matchup gets
        // the space; sm restores it, md adds the time/ticket columns.
        "border-line grid min-h-[88px] grid-cols-[72px_1fr] items-center gap-x-4 border-b px-4 transition-colors sm:grid-cols-[96px_56px_1fr] md:grid-cols-[96px_56px_1fr_120px_220px]",
        isNext && "border-l-ink bg-paper-soft border-l-4",
      )}
    >
      {/* Date block */}
      <div className="text-center">
        <p className="text-mute text-[12px] font-semibold tracking-[0.12em] uppercase">
          {parts.day}
        </p>
        <p className="font-display text-ink text-[32px] leading-none font-bold">
          {parts.date}
        </p>
      </div>

      {/* Opponent mark */}
      <span
        aria-hidden="true"
        className="bg-paper-soft border-line font-display text-mute hidden size-10 items-center justify-center rounded-full border text-[13px] font-bold sm:flex"
      >
        {opponent.slice(0, 3).toUpperCase()}
      </span>

      {/* Matchup — wraps to two lines on narrow phones instead of clipping */}
      <div className="min-w-0 py-3">
        <p className="font-display text-ink text-lg font-semibold tracking-[0.02em] uppercase">
          {game.isHome ? "vs" : "@"} {opponent}
        </p>
        <p className="text-mute mt-0.5 text-[13px]">
          {game.round ? `${game.round} · ` : ""}
          {game.venue}
        </p>
      </div>

      {/* Time / result */}
      <span className="text-mute hidden text-sm md:block">
        {isFinal ? "Тоглосон" : parts.time}
      </span>

      {/* Score or tickets */}
      <div className="col-span-2 flex items-center justify-between gap-3 sm:col-span-3 md:col-span-1 md:justify-end">
        {isFinal ? (
          <Link
            href={routes.site.game(game.id)}
            aria-label={`Box score: UFE ${game.teamScore} ${opponent} ${game.opponentScore}`}
            className="team-focus group flex min-h-11 items-center gap-3 rounded-sm"
          >
            <span className="font-display text-ink text-[28px] leading-none font-bold">
              {game.teamScore}–{game.opponentScore}
            </span>
            <span
              className={cn(
                "font-display inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-[13px] font-bold",
                won ? "bg-ink text-paper" : "border-ink/25 text-mute border",
              )}
            >
              {won ? "W" : "L"}
            </span>
            <span className="text-mute group-hover:text-ink text-[10px] font-bold tracking-[0.06em] uppercase transition-colors">
              Box score
            </span>
          </Link>
        ) : game.status === "CANCELLED" ? (
          <span className="text-mute text-[13px] font-semibold tracking-[0.08em] uppercase">
            Цуцлагдсан
          </span>
        ) : (
          <div className="flex items-center gap-3">
            {game.streamUrl ? (
              <a
                href={game.streamUrl}
                target="_blank"
                rel="noreferrer"
                className="text-mute hover:text-ink hidden text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors lg:inline"
              >
                Шууд дамжуулалт
              </a>
            ) : null}
            {game.ticketUrl ? (
              <a
                href={game.ticketUrl}
                target="_blank"
                rel="noreferrer"
                className="font-display team-focus bg-ink text-paper hover:bg-brand-2 inline-flex h-10 items-center rounded-full px-5 text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors"
              >
                Тасалбар
              </a>
            ) : null}
          </div>
        )}
      </div>
    </li>
  );
}

/** 7-column month grid: day numbers, game chips, 240ms slide on change. */
function MonthCalendar({ month, games }: { month: string; games: GameRow[] }) {
  const [year, mon] = month.split("-").map(Number);
  // Build cells for a Monday-first grid: leading blanks + days of month.
  const firstDay = new Date(Date.UTC(year, mon - 1, 1));
  const daysInMonth = new Date(Date.UTC(year, mon, 0)).getUTCDate();
  const lead = (firstDay.getUTCDay() + 6) % 7; // Monday → 0

  const byDay = new Map<number, GameRow[]>();
  for (const game of games) {
    const day = Number(
      new Date(game.tipsAt).toLocaleString("en-US", {
        day: "numeric",
        timeZone: "Asia/Ulaanbaatar",
      }),
    );
    const list = byDay.get(day) ?? [];
    list.push(game);
    byDay.set(day, list);
  }

  const cells: Array<number | null> = [
    ...Array.from({ length: lead }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  return (
    <div className="view-swap mt-6">
      <div className="border-line text-mute grid grid-cols-7 border-t border-l">
        {WEEKDAYS.map((weekday) => (
          <div
            key={weekday}
            className="border-line border-r border-b py-2 text-center text-[12px] font-semibold tracking-[0.12em] uppercase"
          >
            {weekday}
          </div>
        ))}
        {cells.map((day, index) => (
          <div
            key={index}
            className={cn(
              "border-line relative min-h-[120px] border-r border-b p-2",
              day === null && "bg-paper-soft/60",
            )}
          >
            {day !== null ? (
              <p className="font-display text-ink text-[13px] font-bold">
                {day}
              </p>
            ) : null}
            {(byDay.get(day ?? -1) ?? []).map((game) => {
              const isNext = game.status === "SCHEDULED";
              return (
                <Link
                  key={game.id}
                  href={routes.site.game(game.id)}
                  aria-label={`${game.opponent}, тоглолтын дэлгэрэнгүй`}
                  className={cn(
                    "team-focus mt-1 block max-w-full truncate px-1.5 py-0.5 text-left text-[11px] font-semibold",
                    isNext
                      ? "bg-ink text-paper"
                      : "bg-paper-soft text-mute border-line border",
                    "hover:border-ink",
                  )}
                  title={`${game.opponent} · ${game.venue}`}
                >
                  {game.isHome ? "vs" : "@"}{" "}
                  {game.opponentShort ?? game.opponent}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      <p className="text-mute mt-3 text-[12px] font-semibold tracking-[0.12em] uppercase">
        Хар талбар нь гэрээсээ тоглолт · цагаан дэвсгэрт нь дараагийн тоглолт
      </p>
    </div>
  );
}

type DemoPlayerStat = {
  number: number;
  name: string;
  min: string;
  fgm: number;
  fga: number;
  threePm: number;
  threePa: number;
  ftm: number;
  fta: number;
  oreb: number;
  dreb: number;
  ast: number;
  stl: number;
  blk: number;
  turnovers: number;
  pf: number;
  plusMinus: number;
};

const DEMO_PLAYER_STATS: DemoPlayerStat[] = [
  {
    number: 4,
    name: "UFE Player 01",
    min: "32:14",
    fgm: 8,
    fga: 14,
    threePm: 3,
    threePa: 6,
    ftm: 2,
    fta: 3,
    oreb: 1,
    dreb: 6,
    ast: 5,
    stl: 2,
    blk: 1,
    turnovers: 2,
    pf: 2,
    plusMinus: 14,
  },
  {
    number: 7,
    name: "UFE Player 02",
    min: "30:41",
    fgm: 6,
    fga: 12,
    threePm: 2,
    threePa: 5,
    ftm: 2,
    fta: 4,
    oreb: 2,
    dreb: 5,
    ast: 7,
    stl: 1,
    blk: 0,
    turnovers: 3,
    pf: 3,
    plusMinus: 9,
  },
  {
    number: 11,
    name: "UFE Player 03",
    min: "28:36",
    fgm: 5,
    fga: 9,
    threePm: 2,
    threePa: 4,
    ftm: 2,
    fta: 2,
    oreb: 3,
    dreb: 5,
    ast: 2,
    stl: 1,
    blk: 2,
    turnovers: 1,
    pf: 1,
    plusMinus: 8,
  },
  {
    number: 3,
    name: "UFE Player 04",
    min: "26:22",
    fgm: 4,
    fga: 10,
    threePm: 2,
    threePa: 6,
    ftm: 2,
    fta: 2,
    oreb: 1,
    dreb: 2,
    ast: 4,
    stl: 2,
    blk: 0,
    turnovers: 2,
    pf: 4,
    plusMinus: 6,
  },
  {
    number: 15,
    name: "UFE Player 05",
    min: "24:07",
    fgm: 4,
    fga: 7,
    threePm: 0,
    threePa: 1,
    ftm: 2,
    fta: 4,
    oreb: 2,
    dreb: 4,
    ast: 1,
    stl: 0,
    blk: 1,
    turnovers: 1,
    pf: 2,
    plusMinus: 4,
  },
  {
    number: 2,
    name: "UFE Player 06",
    min: "22:53",
    fgm: 3,
    fga: 6,
    threePm: 1,
    threePa: 3,
    ftm: 1,
    fta: 2,
    oreb: 1,
    dreb: 1,
    ast: 3,
    stl: 1,
    blk: 0,
    turnovers: 1,
    pf: 1,
    plusMinus: 3,
  },
  {
    number: 9,
    name: "UFE Player 07",
    min: "20:18",
    fgm: 3,
    fga: 8,
    threePm: 1,
    threePa: 4,
    ftm: 0,
    fta: 0,
    oreb: 2,
    dreb: 3,
    ast: 2,
    stl: 0,
    blk: 1,
    turnovers: 2,
    pf: 3,
    plusMinus: 2,
  },
  {
    number: 22,
    name: "UFE Player 08",
    min: "18:44",
    fgm: 2,
    fga: 5,
    threePm: 0,
    threePa: 1,
    ftm: 2,
    fta: 2,
    oreb: 1,
    dreb: 3,
    ast: 1,
    stl: 1,
    blk: 0,
    turnovers: 1,
    pf: 2,
    plusMinus: 1,
  },
  {
    number: 10,
    name: "UFE Player 09",
    min: "16:32",
    fgm: 2,
    fga: 4,
    threePm: 1,
    threePa: 2,
    ftm: 0,
    fta: 0,
    oreb: 0,
    dreb: 1,
    ast: 2,
    stl: 0,
    blk: 0,
    turnovers: 1,
    pf: 1,
    plusMinus: -2,
  },
  {
    number: 5,
    name: "UFE Player 10",
    min: "14:05",
    fgm: 2,
    fga: 5,
    threePm: 0,
    threePa: 2,
    ftm: 0,
    fta: 0,
    oreb: 1,
    dreb: 2,
    ast: 1,
    stl: 2,
    blk: 0,
    turnovers: 0,
    pf: 2,
    plusMinus: 0,
  },
  {
    number: 13,
    name: "UFE Player 11",
    min: "11:47",
    fgm: 1,
    fga: 3,
    threePm: 1,
    threePa: 2,
    ftm: 0,
    fta: 0,
    oreb: 0,
    dreb: 2,
    ast: 0,
    stl: 0,
    blk: 0,
    turnovers: 0,
    pf: 1,
    plusMinus: -1,
  },
  {
    number: 8,
    name: "UFE Player 12",
    min: "09:22",
    fgm: 1,
    fga: 2,
    threePm: 0,
    threePa: 0,
    ftm: 0,
    fta: 0,
    oreb: 0,
    dreb: 1,
    ast: 1,
    stl: 0,
    blk: 0,
    turnovers: 0,
    pf: 0,
    plusMinus: 1,
  },
  {
    number: 1,
    name: "UFE Player 13",
    min: "07:58",
    fgm: 1,
    fga: 2,
    threePm: 0,
    threePa: 1,
    ftm: 0,
    fta: 0,
    oreb: 1,
    dreb: 1,
    ast: 0,
    stl: 1,
    blk: 0,
    turnovers: 1,
    pf: 1,
    plusMinus: -1,
  },
  {
    number: 14,
    name: "UFE Player 14",
    min: "04:31",
    fgm: 0,
    fga: 1,
    threePm: 0,
    threePa: 1,
    ftm: 0,
    fta: 0,
    oreb: 0,
    dreb: 1,
    ast: 0,
    stl: 0,
    blk: 0,
    turnovers: 0,
    pf: 0,
    plusMinus: -3,
  },
  {
    number: 6,
    name: "UFE Player 15",
    min: "02:40",
    fgm: 0,
    fga: 0,
    threePm: 0,
    threePa: 0,
    ftm: 0,
    fta: 0,
    oreb: 0,
    dreb: 0,
    ast: 0,
    stl: 0,
    blk: 0,
    turnovers: 0,
    pf: 1,
    plusMinus: 0,
  },
];

function shootingPercentage(made: number, attempted: number): string {
  return attempted === 0 ? "0.0" : ((made / attempted) * 100).toFixed(1);
}

export function GameBoxScore({ game }: { game: GameRow }) {
  const opponent = game.opponentShort ?? game.opponent;

  return (
    <section
      aria-label={`UFE box score against ${opponent}`}
      className="border-line bg-paper border"
    >
      <div className="bg-ink text-paper flex flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-5">
        <div>
          <p className="text-paper/60 text-[10px] font-bold tracking-[0.14em] uppercase">
            UFE · BOX SCORE
          </p>
          <h3 className="font-display mt-1 text-lg font-bold tracking-[0.02em] uppercase">
            {game.isHome ? "vs" : "@"} {opponent}
          </h3>
        </div>
        <span className="border-paper/25 text-paper/75 rounded-full border px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase">
          Demo stats · 15 players
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1460px] border-collapse text-left">
          <caption className="sr-only">
            Demo UFE player statistics for the game against {opponent}
          </caption>
          <thead>
            <tr className="border-line text-mute bg-paper-soft border-b text-[10px] font-bold tracking-[0.1em] uppercase">
              <th
                scope="col"
                className="bg-paper-soft sticky left-0 z-10 w-[220px] px-4 py-3"
              >
                Player
              </th>
              {[
                "MIN",
                "FGM",
                "FGA",
                "FG%",
                "3PM",
                "3PA",
                "3P%",
                "FTM",
                "FTA",
                "FT%",
                "OREB",
                "DREB",
                "REB",
                "AST",
                "STL",
                "BLK",
                "TO",
                "PF",
                "PTS",
                "+/-",
              ].map((column) => (
                <th key={column} scope="col" className="px-2.5 py-3 text-right">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DEMO_PLAYER_STATS.map((player) => (
              <tr
                key={player.number}
                className="border-line text-ink border-b last:border-b-0"
              >
                <th
                  scope="row"
                  className="bg-paper sticky left-0 px-4 py-3 text-left text-[12px] font-semibold whitespace-nowrap"
                >
                  <span className="text-mute mr-2 inline-block w-6 font-mono text-[10px]">
                    #{String(player.number).padStart(2, "0")}
                  </span>
                  {player.name}
                </th>
                {[
                  player.min,
                  player.fgm,
                  player.fga,
                  shootingPercentage(player.fgm, player.fga),
                  player.threePm,
                  player.threePa,
                  shootingPercentage(player.threePm, player.threePa),
                  player.ftm,
                  player.fta,
                  shootingPercentage(player.ftm, player.fta),
                  player.oreb,
                  player.dreb,
                  player.oreb + player.dreb,
                  player.ast,
                  player.stl,
                  player.blk,
                  player.turnovers,
                  player.pf,
                  2 * player.fgm + player.threePm + player.ftm,
                  player.plusMinus > 0
                    ? `+${player.plusMinus}`
                    : player.plusMinus,
                ].map((stat, index) => (
                  <td
                    key={index}
                    className={cn(
                      "px-2.5 py-3 text-right text-[12px] tabular-nums",
                      [1, 2, 4, 5, 10, 11, 12, 13, 14, 15].includes(index) &&
                        "text-blue-600",
                      index === 18 && "text-ink font-bold",
                    )}
                  >
                    {stat}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-mute px-4 py-3 text-[10px]">
        Static sample data for visual preview; not connected to player records.
      </p>
    </section>
  );
}
