"use client";

import { useState } from "react";
import { ChevronDown, Trophy } from "lucide-react";

import { PlayerCutout } from "@/components/team/player-photo";
import type { RosterPlayer } from "@/components/team/roster-utils";
import { basePosition, splitName } from "@/components/team/roster-utils";
import { cn } from "@/lib/utils";

/**
 * Shared expandable detail block (achievements + the three personal lines)
 * reused by both the grid card and the table row.
 */
export function PlayerDetails({ player }: { player: RosterPlayer }) {
  const personalLines = [
    { label: "Баримталдаг зарчим", value: `«${player.motto}»` },
    { label: "Чухал тоглолтын өмнө", value: player.pregame },
    { label: "Сагс сонгох болсон шалтгаан", value: player.reason },
  ];

  return (
    <div className="border-line space-y-4 border-t">
      <div className="px-5 pt-4">
        <p className="eyebrow">Амжилтууд</p>
        <ul className="mt-2.5 space-y-1.5">
          {player.achievements.map((achievement) => (
            <li
              key={achievement}
              className="text-mute flex gap-2.5 text-[13px] leading-[1.6]"
            >
              <span
                className="bg-ink mt-2 size-1.5 shrink-0"
                aria-hidden="true"
              />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
      <dl className="space-y-2 px-5">
        {personalLines.map((line) => (
          <div key={line.label} className="flex flex-col gap-0.5">
            <dt className="text-mute text-[11px] font-semibold tracking-[0.1em] uppercase">
              {line.label}
            </dt>
            <dd className="text-ink text-sm leading-[1.6] font-medium">
              {line.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** The "Дэлгэрэнгүй" footer toggle shared by the player and staff cards. */
export function DetailsToggle({
  expanded,
  onToggle,
  controlId,
}: {
  expanded: boolean;
  onToggle: () => void;
  controlId: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      aria-controls={controlId}
      className="text-mute hover:text-ink team-focus flex w-full items-center justify-between gap-2 border-t px-5 py-3.5 text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors"
    >
      <span className="flex items-center gap-2">
        <Trophy className="size-4" aria-hidden="true" />
        {expanded ? "Хураангуйлах" : "Дэлгэрэнгүй"}
      </span>
      <ChevronDown
        className={cn(
          "size-4 transition-transform duration-150",
          expanded && "rotate-180",
        )}
        aria-hidden="true"
      />
    </button>
  );
}

/** Cell of the card's 3-up measurement strip. */
function MeasureCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-2 text-center first:pl-0 last:pr-0">
      <p className="text-mute text-[10px] font-semibold tracking-[0.14em] uppercase">
        {label}
      </p>
      <p className="font-display text-ink mt-1 text-[20px] leading-none font-bold">
        {value}
      </p>
    </div>
  );
}

/**
 * Editorial roster card: mist portrait panel with the 132px jersey numeral
 * watermark and position chip, stacked name, 3-up measurement strip behind
 * hairline rules, and a footer toggle expanding the full profile. Hover
 * lifts the card and grows a 4px ink top border.
 */
export function PlayerCard({ player }: { player: RosterPlayer }) {
  const [expanded, setExpanded] = useState(false);
  const [firstName, lastName] = splitName(player.name);
  const detailsId = `player-details-${player.number}`;

  return (
    <article className="border-line bg-paper group relative flex flex-col border transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.14)]">
      {/* Ink top border that grows in on hover */}
      <span
        aria-hidden="true"
        className="bg-ink absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
      />

      {/* Portrait panel: mist ground, watermark numeral, position chip */}
      <div className="bg-paper-soft relative h-[280px] overflow-hidden md:h-[300px]">
        <span
          aria-hidden="true"
          className="font-display text-mute/20 pointer-events-none absolute -top-2 right-2 z-0 text-[132px] leading-none font-bold select-none"
        >
          {String(player.number).padStart(2, "0")}
        </span>
        <span className="border-ink bg-paper text-ink absolute top-3 left-3 z-10 border px-2 py-0.5 text-[11px] font-bold tracking-[0.1em] uppercase">
          {basePosition(player.position)}
        </span>
        {player.role ? (
          <span className="bg-ink text-paper absolute bottom-3 left-3 z-10 px-2 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase">
            {player.role}
          </span>
        ) : null}
        <div className="absolute inset-0 z-[5] transition-transform duration-400 group-hover:scale-[1.04]">
          <PlayerCutout
            name={player.name}
            number={player.number}
            photo={player.photo}
            fallback="slot"
            anchor="center"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          />
        </div>
      </div>

      {/* Name block: small first name, big last name */}
      <div className="px-4 pt-4">
        <p className="font-display text-mute text-[15px] leading-none font-semibold tracking-[0.06em] uppercase">
          {firstName}
        </p>
        <h3 className="font-display text-ink mt-1 text-[30px] leading-[1.02] font-bold tracking-[0.02em] uppercase">
          {lastName || firstName}
        </h3>
      </div>

      {/* Measurement strip behind hairline rules */}
      <div className="border-line mx-4 mt-3 grid grid-cols-3 border-y py-2.5">
        <MeasureCell label="Өндөр" value={`${player.heightCm}`} />
        <MeasureCell
          label="Багт"
          value={player.yearsOnTeam.replace(/ дэх жил| жил/, "")}
        />
        <MeasureCell
          label="Тоглосон"
          value={player.yearsPlaying.replace(/ жил/, "")}
        />
      </div>

      {/* Footer toggle + expandable profile */}
      <div className="mt-auto pt-3">
        <DetailsToggle
          expanded={expanded}
          onToggle={() => setExpanded((open) => !open)}
          controlId={detailsId}
        />
      </div>
      {expanded ? (
        <div id={detailsId}>
          <PlayerDetails player={player} />
        </div>
      ) : null}
    </article>
  );
}
