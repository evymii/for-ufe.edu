"use client";

import { useState } from "react";

import type { StaffProfile } from "@/content/site";
import { DetailsToggle, splitName } from "@/components/team/player-card";
import { PlayerCutout } from "@/components/team/player-photo";
import { staffKey } from "@/lib/staff";
import { cn } from "@/lib/utils";

/** Staff member + resolved photo path, as prepared by the /staff page. */
export type RosterStaff = Omit<StaffProfile, "photo"> & {
  photo: null | string;
};

/** Giant faded card initials ("Б.Пүрэвдорж" → "БП", "Д.Амьбох" → "ДА"). */
function initialsOf(name: string): string {
  return name
    .split(/[.\s]+/)
    .filter(Boolean)
    .map((part) => part[0]!)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * NBA-roster-style staff card, mirroring PlayerCard: role eyebrow + stacked
 * name + intro top-left, giant faded initials top-right, transparent cutout
 * bottom-right, then a footer toggle that expands the full profile (honour
 * bullets + structured sections). The head coach gets the gold border.
 */
export function StaffCard({
  member,
  featured = false,
}: {
  member: RosterStaff;
  featured?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [firstName, lastName] = splitName(member.name);
  const initials = initialsOf(member.name);
  const detailsId = `staff-details-${staffKey(member.name)}`;

  return (
    <article
      className={cn(
        "border-line bg-paper shadow-card card-lift relative flex flex-col overflow-hidden rounded-xl border",
        featured && "border-gold",
      )}
    >
      {/* Hero area: role/name/intro left, giant initials behind, cutout right. */}
      <div className="relative min-h-[420px] flex-1 p-5">
        <span
          aria-hidden="true"
          className="text-brand/10 font-display pointer-events-none absolute top-0 right-3 z-0 text-[7rem] leading-none font-bold select-none"
        >
          {initials}
        </span>

        <div className="relative z-10 max-w-[68%]">
          <p className="eyebrow">{member.role}</p>
          <h3 className="font-display text-ink mt-2 text-[22px] leading-[1.05] font-bold tracking-[0.01em] uppercase">
            {firstName}
            {lastName ? (
              <>
                <br />
                {lastName}
              </>
            ) : null}
          </h3>

          {member.intro ? (
            <p className="text-mute mt-5 text-[13px] leading-[1.65] [text-shadow:0_1px_8px_var(--paper)]">
              {member.intro}
            </p>
          ) : null}
        </div>

        {/* transparent cutout, anchored bottom-right, over the initials */}
        <div className="pointer-events-none absolute right-0 bottom-0 z-[5] h-[88%] w-[93%] p-2">
          <PlayerCutout
            name={member.name}
            photo={member.photo}
            fallback="none"
            anchor="right"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          />
        </div>
      </div>

      {/* Footer toggle + expandable profile */}
      <div className="border-line border-t">
        <DetailsToggle
          expanded={expanded}
          onToggle={() => setExpanded((open) => !open)}
          controlId={detailsId}
        />
      </div>
      {expanded ? (
        <div id={detailsId}>
          <StaffDetails member={member} featured={featured} />
        </div>
      ) : null}
    </article>
  );
}

/** Expandable block: honour bullets + the structured sections (Боловсрол, …). */
function StaffDetails({
  member,
  featured,
}: {
  member: RosterStaff;
  featured?: boolean;
}) {
  return (
    <div className="border-line space-y-4 border-t px-5 py-4">
      {member.bullets && member.bullets.length > 0 ? (
        <div>
          <p className="eyebrow">Амжилтууд</p>
          <ul className="mt-2.5 space-y-1.5">
            {member.bullets.map((bullet) => (
              <li
                key={bullet}
                className="text-mute flex gap-2 text-[13px] leading-[1.6]"
              >
                <span
                  className={cn(
                    "mt-2 size-1.5 shrink-0 rounded-full",
                    featured ? "bg-gold" : "bg-brand-2/60",
                  )}
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {member.sections
        ? member.sections.map((section) => (
            <section key={section.heading}>
              <h4 className="text-ink font-display text-[13px] font-semibold tracking-[0.06em] uppercase">
                {section.heading}
              </h4>
              {section.text ? (
                <p className="text-mute mt-1.5 text-[13px] leading-[1.65]">
                  {section.text}
                </p>
              ) : null}
              {section.list ? (
                <ul className="mt-2 space-y-1.5">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="text-mute flex gap-2 text-[13px] leading-[1.6]"
                    >
                      <span
                        className="bg-brand-2/60 mt-2 size-1.5 shrink-0 rounded-full"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))
        : null}
    </div>
  );
}
