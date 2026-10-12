"use client";

import { useState, type ReactNode } from "react";
import { LayoutGrid, Rows3 } from "lucide-react";

import {
  PlayerCard,
  PlayerDetails,
  basePosition,
  type RosterPlayer,
} from "@/components/team/player-card";
import { PlayerCutout } from "@/components/team/player-photo";
import { cn } from "@/lib/utils";

type ViewMode = "grid" | "list";

/**
 * NBA-roster-style browser: a "switch view" toolbar (card grid / list) and
 * the two presentations of the same roster. Cards default — the grid is the
 * showcase view.
 */
export function RosterBrowser({
  players,
  subtitle,
}: {
  players: RosterPlayer[];
  subtitle: string;
}) {
  const [view, setView] = useState<ViewMode>("grid");

  return (
    <section className="bg-paper-soft">
      <div className="mx-auto w-full max-w-[1120px] px-4 py-[72px] sm:px-6 md:py-24">
        {/* Toolbar: section label left, switch-view control right */}
        <div className="border-line mb-8 flex flex-wrap items-end justify-between gap-4 border-b pb-5">
          <div>
            <p className="eyebrow">{subtitle}</p>
            <h2 className="font-display text-ink mt-1.5 text-xl font-semibold tracking-[0.02em] uppercase">
              Тоглогчид
              <span className="text-mute ml-2 text-sm font-medium">
                {players.length}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-mute hidden text-[11px] font-semibold tracking-[0.18em] uppercase sm:block">
              Харагдац солих
            </span>
            <div
              className="border-line bg-paper inline-flex overflow-hidden rounded-lg border"
              role="group"
              aria-label="Харагдац солих"
            >
              <ViewButton
                active={view === "grid"}
                onClick={() => setView("grid")}
                label="Карт харагдац"
              >
                <LayoutGrid className="size-4" aria-hidden="true" />
              </ViewButton>
              <ViewButton
                active={view === "list"}
                onClick={() => setView("list")}
                label="Жагсаалт харагдац"
              >
                <Rows3 className="size-4" aria-hidden="true" />
              </ViewButton>
            </div>
          </div>
        </div>

        {view === "grid" ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {players.map((player) => (
              <PlayerCard key={player.number} player={player} />
            ))}
          </div>
        ) : (
          <PlayerList players={players} />
        )}
      </div>
    </section>
  );
}

function ViewButton({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      title={label}
      className={cn(
        "flex size-11 items-center justify-center transition-colors",
        active ? "bg-brand text-brand-contrast" : "text-mute hover:text-brand",
      )}
    >
      {children}
    </button>
  );
}

/** Stat columns shared by the header row and every player row. */
const LIST_COLUMNS = [
  "Өндөр",
  "Мэргэжил",
  "Төрсөн газар",
  "Багт",
  "Тоглосон",
] as const;

const ROW_GRID =
  "grid grid-cols-[minmax(190px,1.9fr)_minmax(64px,0.7fr)_minmax(110px,1.2fr)_minmax(100px,1fr)_minmax(84px,0.9fr)_minmax(76px,0.8fr)] items-center gap-x-4";

/** Flat roster table (NBA list view): headshot + name, stat columns, expandable row. */
function PlayerList({ players }: { players: RosterPlayer[] }) {
  return (
    <div className="border-line bg-paper overflow-hidden rounded-xl border">
      <div className="overflow-x-auto">
        <div className="min-w-[760px]">
          {/* header row */}
          <div
            className={cn(
              ROW_GRID,
              "border-line text-mute border-b px-4 py-3 text-[10px] font-semibold tracking-[0.12em] uppercase",
            )}
          >
            <span>Тоглогч</span>
            {LIST_COLUMNS.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>

          {players.map((player, index) => (
            <PlayerListRow
              key={player.number}
              player={player}
              zebra={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PlayerListRow({
  player,
  zebra,
}: {
  player: RosterPlayer;
  zebra: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `player-list-details-${player.number}`;

  const cells = [
    `${player.heightCm} см`,
    player.major,
    player.hometown,
    player.yearsOnTeam,
    player.yearsPlaying,
  ];

  return (
    <div
      className={cn(
        "border-line border-b last:border-b-0",
        zebra && "bg-paper-soft/60",
      )}
    >
      <button
        type="button"
        onClick={() => setExpanded((open) => !open)}
        aria-expanded={expanded}
        aria-controls={detailsId}
        className={cn(
          ROW_GRID,
          "hover:bg-brand/5 w-full px-4 py-3 text-left transition-colors",
        )}
      >
        <span className="flex min-w-0 items-center gap-3">
          <span className="border-line bg-paper-soft size-12 shrink-0 overflow-hidden rounded-lg border">
            <PlayerCutout
              name={player.name}
              number={player.number}
              photo={player.photo}
              sizes="48px"
              fallbackClassName="[&>span]:text-4xl"
            />
          </span>
          <span className="min-w-0">
            <span className="font-display text-ink block truncate text-[15px] font-semibold tracking-[0.02em] uppercase">
              {player.name}
            </span>
            <span className="text-mute block truncate text-xs">
              #{player.number} · {basePosition(player.position)}
            </span>
          </span>
        </span>
        {cells.map((cell, index) => (
          <span
            key={LIST_COLUMNS[index]}
            className="text-ink truncate text-sm font-medium"
          >
            {cell}
          </span>
        ))}
      </button>
      {expanded ? (
        <div id={detailsId} className={cn(zebra && "bg-paper-soft/60")}>
          <PlayerDetails player={player} />
        </div>
      ) : null}
    </div>
  );
}
