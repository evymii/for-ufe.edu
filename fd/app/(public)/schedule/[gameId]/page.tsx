import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GameBoxScore } from "@/components/team/schedule-board";
import { LiveScoreCenter } from "@/components/team/live-score-display";
import { PageHero } from "@/components/team/page-hero";
import { routes } from "@/config/routes";
import { getGames } from "@/lib/content";
import { opponentLogoSrc, UFE_LOGO_SRC } from "@/lib/team-logos";
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
  const opponentLogo = opponentLogoSrc(game.opponent);

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
              <Image
                src={UFE_LOGO_SRC}
                alt="UFE Broncos"
                width={192}
                height={192}
                className="mx-auto mt-2 h-[clamp(64px,10vw,96px)] w-auto sm:mx-0 sm:ml-auto"
              />
            </div>

            <LiveScoreCenter
              dateLabel={gameDate(game.tipsAt)}
              gameId={game.id}
              rowIsFinal={isFinal}
              rowLabel={
                isFinal ? (won ? "FINAL · WIN" : "FINAL · LOSS") : game.status
              }
              rowOpponentScore={game.opponentScore}
              rowTeamScore={game.teamScore}
            />

            <div className="text-center sm:text-left">
              <p className="text-mute text-[10px] font-bold tracking-[0.12em] uppercase">
                OPPONENT
              </p>
              {opponentLogo ? (
                <Image
                  src={opponentLogo}
                  alt={game.opponentShort ?? game.opponent}
                  width={192}
                  height={192}
                  className="mx-auto mt-2 h-[clamp(64px,10vw,96px)] w-auto sm:mx-0"
                />
              ) : (
                <h2 className="font-display mt-2 text-2xl font-bold tracking-[0.02em] uppercase sm:text-3xl">
                  {game.opponentShort ?? game.opponent}
                </h2>
              )}
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

        <div className="mt-8">
          <GameBoxScore game={game} />
        </div>
      </div>
    </>
  );
}
