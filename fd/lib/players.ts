import type { RosterPlayer } from "@/components/team/roster-utils";
import type { PlayerRow } from "@/types/content";

/**
 * Maps a bd/ Player row (plus its profile JSON extras) to the roster-card
 * shape the public pages render. Fields the admin left blank degrade to
 * neutral values ("", 0, []) so cards never crash on partial data.
 */
export function toRosterPlayer(row: PlayerRow): RosterPlayer {
  const extras = row.profile ?? {};
  const hasStats = row.ppg !== null || row.apg !== null || row.rpg !== null;
  return {
    number: row.number ?? 0,
    name: row.name,
    role: extras.roleLabel ?? (row.isCaptain ? "Багийн ахлагч" : undefined),
    position: row.position ?? "",
    photo: row.photo,
    photoPosition: row.photoPosition ?? null,
    heightCm: row.heightCm ?? 0,
    yearsOnTeam: extras.yearsOnTeam ?? "",
    yearsPlaying: extras.yearsPlaying ?? "",
    major: extras.major ?? "",
    hometown: row.hometown ?? "",
    stats: hasStats
      ? {
          season: row.academicYear ?? "",
          apg: row.apg ?? undefined,
          ppg: row.ppg ?? undefined,
          rpg: row.rpg ?? undefined,
        }
      : undefined,
    achievements: extras.achievements ?? [],
    motto: extras.motto ?? "",
    pregame: extras.pregame ?? "",
    reason: extras.reason ?? "",
  };
}
