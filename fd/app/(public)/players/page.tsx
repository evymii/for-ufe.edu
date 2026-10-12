import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";

import { PageHero } from "@/components/team/page-hero";
import { RosterBrowser } from "@/components/team/roster-browser";
import type { RosterPlayer } from "@/components/team/player-card";
import { playerProfiles, players } from "@/content/site";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийн бүрэлдэхүүн — тоглогчид, амжилтууд.",
  title: players.title,
};

/**
 * Transparent cutouts live at public/images/player/<number>.png — dropping a
 * file in is enough (an explicit `photo` field on the profile always wins).
 */
function resolvePhoto(player: (typeof playerProfiles)[number]): null | string {
  if (player.photo) return player.photo;
  const file = path.join(
    process.cwd(),
    "public",
    "images",
    "player",
    `${player.number}.png`,
  );
  return fs.existsSync(file) ? `/images/player/${player.number}.png` : null;
}

export default function RosterPage() {
  const roster: RosterPlayer[] = playerProfiles.map((player) => ({
    ...player,
    photo: resolvePhoto(player),
  }));

  return (
    <>
      <PageHero
        breadcrumb="Тоглогчид"
        subtitle={players.subtitle}
        title={players.title}
      />

      <RosterBrowser players={roster} subtitle={players.subtitle} />
    </>
  );
}
