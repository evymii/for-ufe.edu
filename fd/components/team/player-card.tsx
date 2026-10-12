"use client";

import { useState } from "react";
import { ChevronDown, Trophy } from "lucide-react";

import type { PlayerProfile } from "@/content/site";
import { PlayerCutout } from "@/components/team/player-photo";
import { cn } from "@/lib/utils";

/** Player + resolved photo path, as prepared by the /players page. */
export type RosterPlayer = Omit<PlayerProfile, "photo"> & {
  photo: null | string;
};

/** Uppercase base position ("Center · Double-double machine" → "CENTER"). */
export function basePosition(position: string) {
  return position.split("·")[0]!.trim();
}

/** Stacked Mongolian name: first word over the rest, NBA-card style. */
export function splitName(name: string): [string, string] {
  const [first = "", ...rest] = name.split(" ");
  return [first, rest.join(" ")];
}

/**
 * Shared expandable detail block (achievements + the three personal lines)
 * reused by both the grid card and the list row.
 */
export function PlayerDetails({ player }: { player: RosterPlayer }) {
  const personalLines = [
    { label: "Баримталдаг зарчим", value: `«${player.motto}»` },
    { label: "Чухал тоглолтын өмнө", value: player.pregame },
    { label: "Сагс сонгох болсон шалтгаан", value: player.reason },
  ];

  return (
    <div className="border-line space-y-4 border-t px-5 py-4">
      <div>
        <p className="eyebrow">Амжилтууд</p>
        <ul className="mt-2.5 space-y-1.5">
          {player.achievements.map((achievement) => (
            <li
              key={achievement}
              className="text-mute flex gap-2 text-[13px] leading-[1.6]"
            >
              <span
                className="bg-gold mt-2 size-1.5 shrink-0 rounded-full"
                aria-hidden="true"
              />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
      <dl className="space-y-2">
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
      className="text-mute hover:text-brand flex w-full items-center justify-between gap-2 px-5 py-3 text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors"
    >
      <span className="flex items-center gap-2">
        <Trophy className="size-4" aria-hidden="true" />
        {expanded ? "Хураангуйлах" : "Дэлгэрэнгүй"}
      </span>
      <ChevronDown
        className={cn(
          "size-4 transition-transform duration-200",
          expanded && "rotate-180",
        )}
        aria-hidden="true"
      />
    </button>
  );
}

/**
 * NBA-roster-style portrait card: stacked name + position top-left, giant
 * faded jersey number top-right, transparent player cutout over the bio
 * rows, then a divided stats strip and a footer toggle that expands the
 * full profile (achievements + personal lines).
 */
export function PlayerCard({ player }: { player: RosterPlayer }) {
  const [expanded, setExpanded] = useState(false);
  const [firstName, lastName] = splitName(player.name);
  const detailsId = `player-details-${player.number}`;

  const bio = [
    { label: "Өндөр", value: `${player.heightCm} см` },
    { label: "Мэргэжил", value: player.major },
    { label: "Багт", value: player.yearsOnTeam },
    { label: "Тоглосон", value: player.yearsPlaying },
    { label: "Төрсөн", value: player.hometown },
  ];
  // NBA-style strip: SEASON / GP / PPG / APG / RPG — "—" until stats land.
  const dash = "—";
  const stats = [
    { label: "Улирал", value: player.stats?.season ?? dash },
    { label: "GP", value: player.stats?.gp ?? dash },
    { label: "PPG", value: player.stats?.ppg ?? dash },
    { label: "APG", value: player.stats?.apg ?? dash },
    { label: "RPG", value: player.stats?.rpg ?? dash },
  ];

  return (
    <article className="border-line bg-paper shadow-card card-lift relative flex flex-col overflow-hidden rounded-xl border">
      {/* Hero area: name/bio left, giant number behind, cutout right.
          Tall enough that the 93%-wide cutout box is width-limited, not
          height-limited — portrait cutouts use the full side space. */}
      <div className="relative min-h-[420px] flex-1 p-5">
        <span
          aria-hidden="true"
          className="text-brand/10 font-display pointer-events-none absolute top-0 right-3 z-0 text-[7rem] leading-none font-bold select-none"
        >
          {player.number}
        </span>

        <div className="relative z-10 max-w-[68%]">
          <h3 className="font-display text-ink text-[22px] leading-[1.05] font-bold tracking-[0.01em] uppercase">
            {firstName}
            {lastName ? (
              <>
                <br />
                {lastName}
              </>
            ) : null}
          </h3>
          <p className="text-mute mt-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase">
            {basePosition(player.position)}
          </p>

          <dl className="mt-5 space-y-2">
            {bio.map((row) => (
              <div
                key={row.label}
                className="border-line flex items-baseline justify-between gap-3 border-b pb-1.5"
              >
                <dt className="text-mute shrink-0 text-[10px] font-semibold tracking-[0.08em] uppercase">
                  {row.label}
                </dt>
                <dd className="text-ink min-w-0 text-right text-[13px] font-medium break-words [text-shadow:0_1px_8px_var(--paper)]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* transparent cutout, anchored bottom-right, over the number */}
        <div className="pointer-events-none absolute right-0 bottom-0 z-[5] h-[88%] w-[93%] p-2">
          <PlayerCutout
            name={player.name}
            number={player.number}
            photo={player.photo}
            fallback="none"
            anchor="right"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          />
        </div>
      </div>

      {/* Stats strip — NBA-style: Улирал / GP / PPG / APG / RPG */}
      <dl className="bg-paper-soft border-line grid grid-cols-5 divide-x border-t">
        {stats.map((stat) => (
          <div key={stat.label} className="px-1 py-3 text-center">
            <dt className="text-mute text-[10px] font-semibold tracking-[0.1em] uppercase">
              {stat.label}
            </dt>
            <dd className="font-display text-ink mt-1 text-[15px] leading-none font-semibold">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Footer toggle + expandable profile */}
      <div className="border-line border-t">
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
