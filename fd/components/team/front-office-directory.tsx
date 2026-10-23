"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { routes } from "@/config/routes";
import { executiveHoverPhotos } from "@/config/site";
import { trimmedCutout } from "@/lib/cutout";
import type { Executive, ExecutiveGroup } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * Front office directory: sticky 48px tab bar (Ownership / Basketball ops /
 * Business / Coaches) and 392×440 executive cards whose grayscale portraits
 * resolve to color on hover (300ms). Each card links to the member's own
 * profile page (/front-office/[slug]) — same treatment as the roster.
 */

const GROUPS: Array<{ value: ExecutiveGroup; label: string }> = [
  { value: "OWNERSHIP", label: "Эзэмшигчид" },
  { value: "OPERATIONS", label: "Спортын алба" },
  { value: "BUSINESS", label: "Бизнес" },
  { value: "COACHES", label: "Дасгалжуулагчид" },
  { value: "STAFF", label: "Ажилтнууд" },
];

const GROUP_LABEL: Record<ExecutiveGroup, string> = Object.fromEntries(
  GROUPS.map((group) => [group.value, group.label]),
) as Record<ExecutiveGroup, string>;

/** Giant faded card initials ("Б.Пүрэвдорж" → "БП"). */
function initialsOf(name: string): string {
  return name
    .split(/[.\s]+/)
    .filter(Boolean)
    .map((part) => part[0]!)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function FrontOfficeDirectory({ members }: { members: Executive[] }) {
  const available = GROUPS.filter((group) =>
    members.some((member) => member.group === group.value),
  );
  const [tab, setTab] = useState<ExecutiveGroup>(
    available[0]?.value ?? "OWNERSHIP",
  );
  const groupMembers = members.filter((member) => member.group === tab);

  return (
    <>
      {/* Sticky tab bar — pins flush to the viewport top once the (non-sticky)
          page header has scrolled away. */}
      <div className="border-line bg-paper sticky top-0 z-30 border-b">
        <div className="team-shell flex h-12 items-stretch gap-6 overflow-x-auto md:gap-8">
          {available.map((group) => {
            const active = group.value === tab;
            return (
              <button
                key={group.value}
                type="button"
                onClick={() => setTab(group.value)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "font-display team-focus relative flex shrink-0 items-center text-lg font-semibold tracking-[0.02em] uppercase transition-colors md:text-xl",
                  active ? "text-ink" : "text-mute hover:text-ink",
                )}
              >
                {group.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "bg-ink absolute inset-x-0 bottom-0 h-[3px] transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Executive cards */}
      <section className="team-shell py-12 md:py-16">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-ink text-[clamp(26px,3vw,32px)] font-bold tracking-[0.02em] uppercase">
            {GROUP_LABEL[tab]}
          </h2>
          <span className="text-mute text-[12px] font-semibold tracking-[0.12em] uppercase">
            {groupMembers.length} гишүүн
          </span>
        </div>

        <div
          key={tab}
          className="view-swap grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {groupMembers.map((member) => (
            <ExecutiveCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}

function ExecutiveCard({ member }: { member: Executive }) {
  const hoverPhoto = executiveHoverPhotos[member.slug];
  return (
    <article className="border-line bg-paper card-lift group relative border">
      <Link
        href={routes.site.managementMember(member.slug)}
        aria-label={`${member.name} — профайл`}
        className="team-focus block w-full text-left"
      >
        {/* Portrait panel — 392×320, grayscale resolving to color on hover */}
        <div
          className={cn(
            "relative h-[300px] overflow-hidden md:h-[320px]",
            member.photo ? "bg-paper-soft" : "bg-ink",
          )}
        >
          {member.photo ? (
            <>
              <span
                aria-hidden="true"
                className="font-display text-mute/20 pointer-events-none absolute -top-2 right-3 z-0 text-[120px] leading-none font-bold select-none"
              >
                {initialsOf(member.name)}
              </span>
              <div className="absolute inset-0 z-[5] grayscale transition-[grayscale,opacity,transform] duration-300 group-hover:scale-[1.03] group-hover:opacity-0 group-hover:grayscale-0 group-hover:delay-200">
                <Image
                  src={trimmedCutout(member.photo) ?? member.photo}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-contain object-bottom"
                />
              </div>
              {hoverPhoto ? (
                <>
                  {/* Alternate cutout — revealed left-to-right along the same
                      diagonal the brand band rides, so the swap reads as one
                      wipe instead of a crossfade of two cutouts. */}
                  <div className="pointer-events-none absolute inset-0 z-[6] transition-[clip-path] duration-700 ease-in-out [-webkit-clip-path:polygon(-40%_0,-40%_0,-65%_100%,-65%_100%)] [clip-path:polygon(-40%_0,-40%_0,-65%_100%,-65%_100%)] group-hover:[-webkit-clip-path:polygon(-40%_0,140%_0,115%_100%,-65%_100%)] group-hover:[clip-path:polygon(-40%_0,140%_0,115%_100%,-65%_100%)]">
                    <Image
                      src={hoverPhoto}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-contain object-bottom"
                    />
                  </div>
                  {/* Brand-blue diagonal band sweeping corner to corner */}
                  <span
                    aria-hidden="true"
                    className="bg-brand pointer-events-none absolute -inset-y-10 left-0 z-[7] w-1/3 -translate-x-[220%] -skew-x-12 transition-transform duration-700 ease-in-out group-hover:translate-x-[430%]"
                  />
                </>
              ) : null}
            </>
          ) : (
            /* No photo yet — dark editorial monogram panel that mirrors the
               bio drawer's hero treatment, so the grid reads as designed. */
            <>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-4 border border-white/10"
              />
              <span className="absolute inset-0 z-[5] flex items-center justify-center">
                <span className="font-display text-[110px] leading-none font-bold tracking-[0.02em] text-transparent transition-all duration-300 [-webkit-text-stroke:2px_rgba(255,255,255,0.4)] group-hover:[-webkit-text-stroke-color:rgba(255,255,255,0.7)]">
                  {initialsOf(member.name)}
                </span>
              </span>
            </>
          )}
          <span
            className={cn(
              "absolute right-3 bottom-3 z-10 px-2 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100",
              member.photo ? "bg-ink text-paper" : "bg-paper text-ink",
            )}
          >
            Профайл →
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-ink text-[24px] leading-none font-bold tracking-[0.02em] uppercase">
            {member.name}
          </h3>
          <p className="text-mute mt-2 text-[13px] font-medium tracking-[0.02em]">
            {member.title}
          </p>
          {member.bio ? (
            <p className="text-mute mt-3 line-clamp-2 text-[13px] leading-[1.6]">
              {member.bio}
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
