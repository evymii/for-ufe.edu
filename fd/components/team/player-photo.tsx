import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Renders a transparent-background player cutout
 * (public/images/player/<number>.png). Cutouts are always `contain`-fitted so
 * the silhouette survives — `cover` would crop heads and shoes. Falls back to
 * the soft-surface slot with the faded jersey number until a photo lands.
 */
export function PlayerCutout({
  name,
  number,
  photo,
  sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw",
  fallback = "slot",
  anchor = "center",
  fallbackLabel,
  className,
  fallbackClassName,
}: {
  name: string;
  /** Jersey number shown in the fallback slot — optional for non-players (staff). */
  number?: number;
  photo: null | string;
  sizes?: string;
  /** "slot" keeps a soft placeholder square (list avatars); "none" renders nothing (cards). */
  fallback?: "none" | "slot";
  /** Horizontal anchor of the contained cutout — cards pin the figure to the right edge. */
  anchor?: "center" | "right";
  /** Replaces the jersey number in the fallback slot (e.g. staff initials). */
  fallbackLabel?: string;
  className?: string;
  fallbackClassName?: string;
}) {
  if (photo) {
    return (
      <span
        className={cn(
          "pointer-events-none relative block h-full w-full",
          className,
        )}
      >
        <Image
          src={photo}
          alt={name}
          fill
          sizes={sizes}
          priority={false}
          className={cn(
            "object-contain object-bottom",
            anchor === "right" ? "object-right" : "object-center",
          )}
        />
      </span>
    );
  }
  if (fallback === "none") return null;
  return (
    <span
      className={cn(
        "bg-paper-soft relative flex h-full w-full items-center justify-center overflow-hidden",
        className,
        fallbackClassName,
      )}
      aria-hidden="true"
    >
      <span className="text-brand/10 font-display pointer-events-none text-[7rem] leading-none font-bold select-none">
        {fallbackLabel ?? number}
      </span>
      <span className="bg-line absolute inset-x-0 bottom-0 h-px" />
    </span>
  );
}
