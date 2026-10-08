import type { Metadata } from "next";

import { PageHero } from "@/components/team/page-hero";
import { PlayerProfileCard } from "@/components/team/player-profile-card";
import { players, playerProfiles } from "@/content/site";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийн бүрэлдэхүүн — тоглогчид, амжилтууд.",
  title: players.title,
};

export default function RosterPage() {
  return (
    <>
      <PageHero
        breadcrumb="Тоглогчид"
        subtitle={players.subtitle}
        title={players.title}
      />

      <section className="bg-paper-soft">
        <div className="mx-auto w-full max-w-[1120px] px-4 py-[72px] sm:px-6 md:py-24">
          <div className="flex flex-col gap-4">
            {playerProfiles.map((player) => (
              <PlayerProfileCard key={player.number} player={player} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
