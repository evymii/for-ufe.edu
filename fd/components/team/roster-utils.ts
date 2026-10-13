import type { PlayerProfile } from "@/content/site";

/** Player + resolved photo path, as prepared by the /players page. */
export type RosterPlayer = Omit<PlayerProfile, "photo"> & {
  photo: null | string;
};

/** Uppercase base position ("Center · Double-double machine" → "CENTER"). */
export function basePosition(position: string) {
  return position.split("·")[0]!.trim();
}

/** Position group for the filter pills ("Point Guard" → "guard"). */
export function positionGroup(
  position: string,
): "guard" | "forward" | "center" {
  const base = basePosition(position).toLowerCase();
  if (base.includes("guard")) return "guard";
  if (base.includes("forward")) return "forward";
  return "center";
}

/** Stacked Mongolian name: first word over the rest, NBA-card style. */
export function splitName(name: string): [string, string] {
  const [first = "", ...rest] = name.split(" ");
  return [first, rest.join(" ")];
}
