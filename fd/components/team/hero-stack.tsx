import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Stacked trio of player figures on the hero's right side — team-poster
 * style: the captain stands front and tallest, two players behind staggered
 * left/right, feet melting into the hero's bottom edge. Purely decorative
 * (aria-hidden); fed by getHeroFigures() from the roster.
 */

export interface HeroFigure {
  name: string;
  number: number | null;
  photo: null | string;
}

/** Slot geometry per position: front center, then left/right behind. */
const SLOTS = [
  "left-1/2 z-[3] h-[86%] w-[54%] -translate-x-1/2",
  "z-[1] left-[4%] h-[66%] w-[44%]",
  "z-[2] right-[4%] h-[72%] w-[44%]",
] as const;

function Figure({ figure, slot }: { figure: HeroFigure; slot: string }) {
  return (
    <div className={cn("absolute bottom-0", slot)}>
      {figure.photo ? (
        <span className="relative block h-full w-full">
          <Image
            src={figure.photo}
            alt=""
            fill
            sizes="(min-width: 1280px) 300px, 220px"
            priority={false}
            className="object-contain object-bottom"
          />
        </span>
      ) : (
        // No cutout yet — dark editorial tile with the faded jersey numeral.
        <span className="flex h-full w-full items-center justify-center border border-white/10 bg-white/[0.05]">
          <span className="font-display text-[clamp(64px,7vw,110px)] leading-none font-bold text-white/15 select-none">
            {String(figure.number ?? 0)}
          </span>
        </span>
      )}
    </div>
  );
}

export function HeroStack({ figures }: { figures: HeroFigure[] }) {
  if (figures.length === 0) return null;
  return (
    <div
      aria-hidden="true"
      className="relative h-[400px] w-full [mask-image:linear-gradient(to_top,transparent_0px,black_56px)] md:h-[480px] xl:h-[560px]"
    >
      {figures.slice(0, 3).map((figure, index) => (
        <Figure
          key={figure.name}
          figure={figure}
          slot={SLOTS[index] ?? SLOTS[2]!}
        />
      ))}
    </div>
  );
}
