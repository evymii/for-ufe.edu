import fs from "node:fs";
import Link from "next/link";
import path from "node:path";
import { ArrowRight } from "lucide-react";

import type { HeroFigure } from "@/components/team/hero-stack";
import { PlayerCutout } from "@/components/team/player-photo";
import { Reveal } from "@/components/team/reveal";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { playerProfiles, staff } from "@/content/site";
import { getExecutives, getPlayers } from "@/lib/content";
import { staffKey } from "@/lib/staff";
import type { Executive, PlayerRow } from "@/types/content";

/**
 * Team-leaders spotlight under the home timeline: the roster captain plus the
 * coaching staff, three cards total. Mirrors the roster/staff pages — same
 * data sources, same cutout fallbacks — so the cards never drift from them.
 */

export interface SpotlightMember {
  name: string;
  /** Chip label — "Багийн ахлагч" / coaching title. */
  role: string;
  /** Faded watermark over the portrait: jersey number or initials. */
  watermark: string;
  /** One-line fact under the name — position/height or a bio line. */
  meta: string;
  photo: null | string;
  href: string;
}

/** Transparent cutout at public/images/player/<number>.png (explicit row photo wins). */
function playerPhoto(row: PlayerRow): null | string {
  if (row.photo) return row.photo;
  const file = path.join(
    process.cwd(),
    "public",
    "images",
    "player",
    `${row.number}.png`,
  );
  return fs.existsSync(file) ? `/images/player/${row.number}.png` : null;
}

/** Transparent cutout at public/images/staff/<staffKey>.png (explicit row photo wins). */
function staffPhoto(row: Executive): null | string {
  if (row.photo) return row.photo;
  const key = staffKey(row.name);
  const file = path.join(
    process.cwd(),
    "public",
    "images",
    "staff",
    `${key}.png`,
  );
  return fs.existsSync(file) ? `/images/staff/${key}.png` : null;
}

/** Giant faded card initials ("Б.Пүрэвдорж" → "БП") — same as /staff. */
function initialsOf(name: string): string {
  return name
    .split(/[.\s]+/)
    .filter(Boolean)
    .map((part) => part[0]!)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Captain card from the bd/ roster (falls back to the static profile). */
function captainCard(row: PlayerRow | null): SpotlightMember | null {
  if (row) {
    return {
      name: row.name,
      role: row.profile?.roleLabel ?? "Багийн ахлагч",
      watermark: String(row.number ?? 0).padStart(2, "0"),
      meta: [row.position, row.heightCm ? `${row.heightCm} см` : null]
        .filter(Boolean)
        .join(" · "),
      photo: playerPhoto(row),
      href: routes.site.roster,
    };
  }
  const fallback = playerProfiles.find(
    (player) => player.role === "Багийн ахлагч",
  );
  if (!fallback) return null;
  const file = path.join(
    process.cwd(),
    "public",
    "images",
    "player",
    `${fallback.number}.png`,
  );
  return {
    name: fallback.name,
    role: fallback.role ?? "Багийн ахлагч",
    watermark: String(fallback.number).padStart(2, "0"),
    meta: `${fallback.position} · ${fallback.heightCm} см`,
    photo:
      fallback.photo ??
      (fs.existsSync(file) ? `/images/player/${fallback.number}.png` : null),
    href: routes.site.roster,
  };
}

/** Coach cards — COACHES-group executives first (photo + bio from the
 *  admin's Удирдлага tab), static profiles as the fallback. */
function coachCards(rows: Executive[]): SpotlightMember[] {
  const toCard = (
    name: string,
    role: string,
    intro: string,
    photo: null | string,
    href: string = routes.site.management,
  ): SpotlightMember => ({
    name,
    role,
    meta: intro,
    photo,
    watermark: initialsOf(name),
    href,
  });

  const fromRows = rows
    .filter(
      (row) =>
        row.group === "COACHES" ||
        row.title.toLowerCase().includes("дасгалжуулагч"),
    )
    .slice(0, 2)
    .map((row) =>
      toCard(
        row.name,
        row.title,
        row.bio ?? "",
        staffPhoto(row),
        routes.site.managementMember(row.slug),
      ),
    );
  if (fromRows.length) return fromRows;

  return staff
    .filter((member) => member.role.toLowerCase().includes("дасгалжуулагч"))
    .slice(0, 2)
    .map((member) => {
      const key = staffKey(member.name);
      const file = path.join(
        process.cwd(),
        "public",
        "images",
        "staff",
        `${key}.png`,
      );
      return toCard(
        member.name,
        member.role,
        member.intro,
        member.photo ??
          (fs.existsSync(file) ? `/images/staff/${key}.png` : null),
      );
    });
}

/** Captain first, then the coaches — for the home spotlight grid. */
export async function getHomeSpotlight(): Promise<SpotlightMember[]> {
  const [playerRows, executiveRows] = await Promise.all([
    getPlayers(),
    getExecutives(),
  ]);
  const captain = captainCard(
    playerRows.find((player) => player.isCaptain) ?? null,
  );
  const coaches = coachCards(executiveRows);
  return captain ? [captain, ...coaches] : coaches;
}

/**
 * The hero's roster trios — one per carousel slide after the group photo.
 * Composition (who pops out front) is pinned by jersey number in
 * siteConfig.heroFigureNumbers: [front, leftBehind, rightBehind]. Numbers
 * missing from the roster are skipped; with no configured match (or no
 * config) it degrades to ranked slices: captain front, then by number.
 * E2E/test rows are skipped so junk data never reaches the hero.
 * (getPlayers()' fetch is deduped with getHomeSpotlight()'s call.)
 */
export async function getHeroFigures(): Promise<HeroFigure[][]> {
  const rows = (await getPlayers()).filter(
    (player) => player.name && !/e2e|probe|тест/i.test(player.name),
  );
  const ranked = [...rows].sort(
    (a, b) =>
      Number(b.isCaptain) - Number(a.isCaptain) ||
      (a.number ?? 99) - (b.number ?? 99),
  );
  const figureOf = (player: PlayerRow): HeroFigure => ({
    name: player.name,
    number: player.number,
    photo: playerPhoto(player),
  });

  const configured = siteConfig.heroFigureNumbers
    .map((numbers) =>
      numbers
        .map((number) => ranked.find((player) => player.number === number))
        .filter((player): player is PlayerRow => Boolean(player))
        .map(figureOf),
    )
    .filter((trio) => trio.length > 0);

  if (configured.length > 0) return configured;

  return [ranked.slice(0, 3), ranked.slice(3, 6)].map((slice) =>
    slice.map(figureOf),
  );
}

function SpotlightCard({ member }: { member: SpotlightMember }) {
  return (
    <Link
      href={member.href}
      aria-label={`${member.name} — ${member.role}`}
      className="team-focus border-line bg-paper group relative block border transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.14)]"
    >
      <span
        aria-hidden="true"
        className="bg-ink absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
      />
      <div className="bg-paper-soft relative h-[280px] overflow-hidden md:h-[300px]">
        <span
          aria-hidden="true"
          className="font-display text-mute/20 pointer-events-none absolute -top-2 right-3 z-0 text-[120px] leading-none font-bold select-none"
        >
          {member.watermark}
        </span>
        <div className="absolute inset-0 z-[5] transition-transform duration-300 group-hover:scale-[1.04]">
          <PlayerCutout
            name={member.name}
            photo={member.photo}
            fallback="slot"
            fallbackLabel={member.watermark}
            anchor="center"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          />
        </div>
        <span className="bg-ink text-paper absolute bottom-3 left-3 z-10 px-2 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase">
          {member.role}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-ink text-[24px] leading-none font-bold tracking-[0.02em] uppercase">
          {member.name}
        </h3>
        {member.meta ? (
          <p className="text-mute mt-2 line-clamp-2 text-[13px] leading-[1.6] font-medium">
            {member.meta}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

export function HomeSpotlight({ members }: { members: SpotlightMember[] }) {
  return (
    <section aria-labelledby="home-spotlight-title" className="bg-paper">
      <div className="team-shell team-shell-wide py-16 md:py-20">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="eyebrow">БАГИЙН БҮРЭЛДЭХҮҮН</p>
              <h2
                id="home-spotlight-title"
                className="font-display text-ink mt-2 text-[clamp(30px,4vw,40px)] leading-none font-bold tracking-[0.02em] uppercase"
              >
                Багийн тэргүүнүүд
              </h2>
            </div>
            <Link
              href={routes.site.roster}
              className="group text-mute hover:text-ink flex min-h-11 items-center gap-1.5 text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors"
            >
              Бүх тоглогчид
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <Reveal key={member.name} delay={index * 60}>
              <SpotlightCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
