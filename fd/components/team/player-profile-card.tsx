import type { PlayerProfile } from "@/content/site";

import { PlayerSlot } from "@/components/team/photo-slot";

/**
 * Detailed roster card for the team-supplied PlayerProfile: faded jersey
 * number in the corner, position label, name, attribute list, achievements
 * and the three personal lines (motto / pre-game / why basketball).
 */
export function PlayerProfileCard({ player }: { player: PlayerProfile }) {
  const details = [
    { label: "Байрлал", value: player.position },
    { label: "Өндөр", value: `${player.heightCm} см` },
    { label: "Төрсөн газар", value: player.hometown },
    { label: "Багт тоглож буй жил", value: player.yearsOnTeam },
    { label: "Хичээллэж буй хугацаа", value: player.yearsPlaying },
    { label: "Мэргэжил", value: player.major },
  ];

  const personalLines = [
    { label: "Баримталдаг зарчим", value: `«${player.motto}»` },
    { label: "Чухал тоглолтын өмнө", value: player.pregame },
    { label: "Сагс сонгох болсон шалтгаан", value: player.reason },
  ];

  return (
    <article className="border-line bg-paper shadow-card relative flex flex-col overflow-hidden rounded-xl border sm:flex-row">
      {/* faded jersey number, top-right corner */}
      <span
        aria-hidden="true"
        className="text-brand/10 font-display pointer-events-none absolute top-1 right-4 z-10 text-6xl leading-none font-bold select-none"
      >
        {player.number}
      </span>

      <div className="relative aspect-[4/5] w-full shrink-0 sm:aspect-auto sm:w-44">
        <PlayerSlot name={player.name} number={player.number} photo={null} />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="eyebrow">{player.role ?? player.position}</p>
          <h3 className="font-display text-ink mt-1.5 text-[24px] leading-[1.2] font-semibold tracking-[0.02em] uppercase">
            #{player.number} · {player.name}
          </h3>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-2">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="border-line flex items-baseline justify-between gap-2 border-b pb-1.5"
            >
              <dt className="text-mute text-[12px] tracking-[0.06em] uppercase">
                {detail.label}
              </dt>
              <dd className="text-ink truncate text-sm font-medium">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>

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

        <dl className="mt-auto space-y-2">
          {personalLines.map((line) => (
            <div
              key={line.label}
              className="border-line flex flex-col gap-0.5 border-t pt-2 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <dt className="text-mute w-full shrink-0 text-[11px] font-semibold tracking-[0.1em] uppercase sm:w-56">
                {line.label}
              </dt>
              <dd className="text-ink text-sm leading-[1.6] font-medium">
                {line.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

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
