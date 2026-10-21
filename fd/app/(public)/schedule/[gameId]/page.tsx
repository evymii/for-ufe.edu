import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GameBoxScore } from "@/components/team/schedule-board";
import { LiveScoreDisplay } from "@/components/team/live-score-display";
import { PageHero } from "@/components/team/page-hero";
import { routes } from "@/config/routes";
import { getGames } from "@/lib/content";
import type { GameRow } from "@/types/content";

export const revalidate = 60;

function gameTitle(game: GameRow): string {
  return `${game.isHome ? "vs" : "@"} ${game.opponentShort ?? game.opponent}`;
}

function gameDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeZone: "Asia/Ulaanbaatar",
  }).format(new Date(iso));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ gameId: string }>;
}): Promise<Metadata> {
  const { gameId } = await params;
  const game = (await getGames()).find((item) => item.id === gameId);

  return {
    title: game ? `${gameTitle(game)} · Box score` : "Тоглолтын дэлгэрэнгүй",
  };
}

export default async function GameDetailsPage({
  params,
}: {
  params: Promise<{ gameId: string }>;
}) {
  const { gameId } = await params;
  const game = (await getGames()).find((item) => item.id === gameId);
  if (!game) notFound();

  const isFinal = game.status === "FINAL";
  const won =
    isFinal &&
    game.teamScore !== null &&
    game.opponentScore !== null &&
    game.teamScore > game.opponentScore;

  return (
    <>
      <PageHero
        breadcrumb="Тоглолтын дэлгэрэнгүй"
        title="Box score"
        subtitle={`${game.competition}${game.round ? ` · ${game.round}` : ""}`}
      />
      <div className="team-shell py-8 md:py-12">
        <Link
          href={routes.site.schedule}
          className="team-focus text-mute hover:text-ink inline-flex min-h-11 items-center text-[12px] font-semibold tracking-[0.1em] uppercase transition-colors"
        >
          ← Бүх тоглолт руу буцах
        </Link>

        <section
          aria-label={`${gameTitle(game)} тоглолтын үр дүн`}
          className="border-line bg-paper mt-4 border"
        >
          <div className="bg-paper-soft grid items-center gap-5 px-5 py-7 sm:grid-cols-[1fr_auto_1fr] sm:px-8 md:py-9">
            <div className="text-center sm:text-right">
              <p className="text-mute text-[10px] font-bold tracking-[0.12em] uppercase">
                {game.isHome ? "HOME" : "AWAY"}
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold tracking-[0.02em] uppercase sm:text-3xl">
                СЭЗИС
              </h2>
              <p className="text-mute mt-1 text-sm">UFE</p>
            </div>

            <div className="text-center">
              <p className="text-mute text-[10px] font-bold tracking-[0.14em] uppercase">
                {isFinal ? (won ? "FINAL · WIN" : "FINAL · LOSS") : game.status}
              </p>
              <p className="font-display my-2 text-[clamp(36px,8vw,56px)] leading-none font-bold tabular-nums">
                {isFinal && game.teamScore !== null ? game.teamScore : "—"}
                <span className="text-mute mx-2 text-[0.7em]">–</span>
                {isFinal && game.opponentScore !== null
                  ? game.opponentScore
                  : "—"}
              </p>
              <p className="text-mute text-xs">{gameDate(game.tipsAt)}</p>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-mute text-[10px] font-bold tracking-[0.12em] uppercase">
                OPPONENT
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold tracking-[0.02em] uppercase sm:text-3xl">
                {game.opponentShort ?? game.opponent}
              </h2>
              <p className="text-mute mt-1 text-sm">{game.venue}</p>
            </div>
          </div>
          <div className="border-line text-mute flex flex-wrap justify-center gap-x-6 gap-y-2 border-t px-4 py-3 text-[11px]">
            {game.round ? <span>{game.round}</span> : null}
            <span>{game.venue}</span>
            {game.status === "SCHEDULED" ? (
              <span>
                {new Intl.DateTimeFormat("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                  timeZone: "Asia/Ulaanbaatar",
                }).format(new Date(game.tipsAt))}
              </span>
            ) : null}
          </div>
        </section>

        <LiveScoreDisplay
          gameId={game.id}
          opponent={game.opponentShort ?? game.opponent}
        />

        <div className="mt-8">
          <GameBoxScore game={game} />
        </div>
      </div>
    </>
  );
}
