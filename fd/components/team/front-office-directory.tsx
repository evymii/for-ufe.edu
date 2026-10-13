"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import type { Executive, ExecutiveGroup } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * Front office directory: sticky 48px tab bar (Ownership / Basketball ops /
 * Business / Coaches) and 392×440 executive cards whose grayscale portraits
 * resolve to color on hover (300ms) and open a 560px bio drawer sliding in
 * from the right (280ms, Esc closes).
 */

const GROUPS: Array<{ value: ExecutiveGroup; label: string }> = [
  { value: "OWNERSHIP", label: "Эзэмшигчид" },
  { value: "OPERATIONS", label: "Спортын алба" },
  { value: "BUSINESS", label: "Бизнес" },
  { value: "COACHES", label: "Дасгалжуулагчид" },
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
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const groupMembers = members.filter((member) => member.group === tab);
  const openMember = members.find((member) => member.slug === openSlug) ?? null;

  return (
    <>
      {/* Sticky tab bar — sits under the solid header (72px mobile, 112px desktop) */}
      <div className="border-line bg-paper sticky top-[72px] z-30 border-b md:top-28">
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
            <ExecutiveCard
              key={member.id}
              member={member}
              onOpen={() => setOpenSlug(member.slug)}
            />
          ))}
        </div>
      </section>

      <BioDrawer member={openMember} onClose={() => setOpenSlug(null)} />
    </>
  );
}

function ExecutiveCard({
  member,
  onOpen,
}: {
  member: Executive;
  onOpen: () => void;
}) {
  return (
    <article className="border-line bg-paper card-lift group relative border">
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-label={`${member.name} — профайл нээх`}
        className="team-focus block w-full text-left"
      >
        {/* Portrait panel — 392×320, grayscale resolving to color on hover */}
        <div className="bg-paper-soft relative h-[300px] overflow-hidden md:h-[320px]">
          <span
            aria-hidden="true"
            className="font-display text-mute/20 pointer-events-none absolute -top-2 right-3 z-0 text-[120px] leading-none font-bold select-none"
          >
            {initialsOf(member.name)}
          </span>
          {member.photo ? (
            <div className="absolute inset-0 z-[5] grayscale transition-[grayscale,transform] duration-300 group-hover:scale-[1.03] group-hover:grayscale-0">
              <Image
                src={member.photo}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="object-contain object-bottom"
              />
            </div>
          ) : (
            <span className="font-display text-mute/40 group-hover:text-mute/60 absolute inset-0 z-[5] flex items-center justify-center text-[64px] font-bold transition-colors duration-300">
              {initialsOf(member.name)}
            </span>
          )}
          <span className="bg-ink text-paper absolute right-3 bottom-3 z-10 px-2 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100">
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
      </button>
    </article>
  );
}

/** 560px bio drawer: slides in from the right, backdrop fade, focus trap. */
function BioDrawer({
  member,
  onClose,
}: {
  member: Executive | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const open = member !== null;

  const trapFocus = useCallback((event: KeyboardEvent) => {
    if (event.key !== "Tab" || !panelRef.current) return;
    const focusables = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (focusables.length === 0) return;
    const first = focusables[0]!;
    const last = focusables[focusables.length - 1]!;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      trapFocus(event);
    };
    window.addEventListener("keydown", onKey);
    const timer = window.setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLElement>("[data-drawer-close]")
        ?.focus();
    }, 60);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
      restoreFocusRef.current?.focus?.();
    };
  }, [open, onClose, trapFocus]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 overflow-hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "bg-ink/60 absolute inset-0 transition-opacity duration-[280ms]",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={member ? `${member.name} — профайл` : "Профайл"}
        className={cn(
          "bg-paper absolute inset-y-0 right-0 flex w-full max-w-[560px] flex-col transition-transform duration-[280ms] ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="border-line flex h-14 shrink-0 items-center justify-between border-b px-6">
          <p className="eyebrow">{member ? GROUP_LABEL[member.group] : ""}</p>
          <button
            type="button"
            onClick={onClose}
            data-drawer-close
            aria-label="Профайл хаах"
            tabIndex={open ? 0 : -1}
            className="text-mute hover:text-ink team-focus flex size-11 items-center justify-center transition-colors"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        {member ? (
          <div className="flex-1 overflow-y-auto">
            <div className="bg-ink relative h-[300px] overflow-hidden text-white">
              <span
                aria-hidden="true"
                className="font-display pointer-events-none absolute -top-4 right-4 z-0 text-[150px] leading-none font-bold text-transparent select-none [-webkit-text-stroke:2px_rgba(255,255,255,0.2)]"
              >
                {initialsOf(member.name)}
              </span>
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt=""
                  fill
                  sizes="560px"
                  className="object-contain object-bottom"
                />
              ) : null}
            </div>
            <div className="space-y-8 p-6 md:p-8">
              <div>
                <p className="text-mute text-[13px] font-semibold tracking-[0.02em]">
                  {member.title}
                </p>
                <h3 className="font-display text-ink mt-2 text-[32px] leading-none font-bold tracking-[0.02em] uppercase">
                  {member.name}
                </h3>
                {member.bio ? (
                  <p className="text-mute mt-4 text-[15px] leading-[1.7]">
                    {member.bio}
                  </p>
                ) : null}
              </div>

              {member.bullets.length > 0 ? (
                <div>
                  <p className="eyebrow">Амжилтууд</p>
                  <ul className="mt-3 space-y-2">
                    {member.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-mute flex gap-2.5 text-[14px] leading-[1.6]"
                      >
                        <span
                          className="bg-ink mt-2 size-1.5 shrink-0"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
