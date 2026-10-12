import type { PlayerProfile } from "@/content/site";

import { PlayerSlot } from "@/components/team/photo-slot";

/** Compact teaser used on the home roster preview. */
export function PlayerProfileTeaser({ player }: { player: PlayerProfile }) {
  return (
    <article className="border-line bg-paper shadow-card card-lift relative flex items-center gap-4 overflow-hidden rounded-xl border p-4">
      <span
        aria-hidden="true"
        className="text-brand/10 font-display pointer-events-none absolute top-0 right-3 text-4xl leading-none font-bold select-none"
      >
        {player.number}
      </span>
      <div className="relative size-20 shrink-0 overflow-hidden rounded-lg">
        <PlayerSlot name={player.name} number={player.number} photo={null} />
      </div>
      <div className="min-w-0">
        <p className="eyebrow">{player.role ?? player.position}</p>
        <p className="font-display text-ink truncate pt-1 text-lg font-semibold tracking-[0.02em] uppercase">
          {player.name}
        </p>
        <p className="text-mute mt-0.5 truncate text-[13px]">
          #{player.number} · {player.heightCm} см
        </p>
      </div>
    </article>
  );
}
