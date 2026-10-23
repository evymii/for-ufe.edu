import Image from "next/image";

import { trimmedCutout } from "@/lib/cutout";
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
  position = null,
  scale = null,
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
  /**
   * Admin-set vertical framing, 0 (top) – 100 (bottom). Overrides the default
   * bottom anchor so a portrait can be nudged up/down inside the slot.
   */
  position?: null | number;
  /**
   * Admin-set rendered size, 40 (shrunken) – 150 (zoomed, clipped). The
   * transform origin follows the position anchor, so scaling never detaches
   * the photo from the edge it was pinned to.
   */
  scale?: null | number;
  /** Replaces the jersey number in the fallback slot (e.g. staff initials). */
  fallbackLabel?: string;
  className?: string;
  fallbackClassName?: string;
}) {
  if (photo) {
    const src = trimmedCutout(photo);
    const hasPosition = position !== null && position !== undefined;
    const hasScale = scale !== null && scale !== undefined && scale !== 100;
    // Keep the scale origin on the same edge object-position pins to.
    const originY = hasPosition ? `${position}%` : "bottom";
    const originX = anchor === "right" ? "right" : "center";
    return (
      <span
        className={cn(
          "pointer-events-none relative block h-full w-full",
          className,
        )}
      >
        <Image
          src={src ?? photo}
          alt={name}
          fill
          sizes={sizes}
          priority={false}
          className={cn(
            "object-contain object-bottom",
            anchor === "right" ? "object-right" : "object-center",
          )}
          style={
            hasPosition || hasScale
              ? {
                  ...(hasPosition
                    ? { objectPosition: `${originX} ${originY}` }
                    : {}),
                  ...(hasScale
                    ? {
                        transform: `scale(${scale / 100})`,
                        transformOrigin: `${originX} ${originY}`,
                      }
                    : {}),
                }
              : undefined
          }
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
