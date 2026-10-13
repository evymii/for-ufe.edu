"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import type { StaffProfile } from "@/content/site";
import { PlayerCutout } from "@/components/team/player-photo";
import { staffKey } from "@/lib/staff";
import { cn } from "@/lib/utils";

/** Staff member + resolved photo path, as prepared by the /staff page. */
export type RosterStaff = Omit<StaffProfile, "photo"> & {
  photo: null | string;
};

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

/**
 * Front-office section: executive cards (mist portrait panel that loses its
 * grayscale on hover, 300ms) opening a 560px bio drawer that slides in from
 * the right (280ms) with a faded backdrop, focus trap and Esc-to-close —
 * plus a two-column staff directory on hairline rows.
 */
export function FrontOffice({ members }: { members: RosterStaff[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const openMember = members.find((m) => staffKey(m.name) === openKey) ?? null;

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <ExecutiveCard
            key={member.name}
            member={member}
            onOpen={() => setOpenKey(staffKey(member.name))}
          />
        ))}
      </div>

      <BioDrawer member={openMember} onClose={() => setOpenKey(null)} />

      {/* Staff directory — 2-column text list on hairline rows */}
      <section
        id="directory"
        aria-label="Ажилтны жагсаалт"
        className="mt-16 scroll-mt-24"
      >
        <h2 className="font-display text-ink text-[clamp(26px,3vw,32px)] font-bold tracking-[0.02em] uppercase">
          Жагсаалт
        </h2>
        <ul className="mt-6 grid gap-x-12 md:grid-cols-2">
          {members.map((member) => (
            <li
              key={member.name}
              className="border-line flex min-h-12 items-baseline justify-between gap-4 border-b"
            >
              <span className="font-display text-ink text-[15px] font-semibold tracking-[0.04em] uppercase">
                {member.name}
              </span>
              <span className="text-mute text-right text-[13px]">
                {member.role}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function ExecutiveCard({
  member,
  onOpen,
}: {
  member: RosterStaff;
  onOpen: () => void;
}) {
  return (
    <article className="border-line bg-paper group relative border transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.14)]">
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-label={`${member.name} — профайл нээх`}
        className="team-focus block w-full text-left"
      >
        {/* Portrait panel: grayscale that resolves to color on hover */}
        <div className="bg-paper-soft relative h-[300px] overflow-hidden md:h-[320px]">
          <span
            aria-hidden="true"
            className="font-display text-mute/20 pointer-events-none absolute -top-2 right-3 z-0 text-[120px] leading-none font-bold select-none"
          >
            {initialsOf(member.name)}
          </span>
          <div className="absolute inset-0 z-[5] grayscale transition-[grayscale,transform] duration-300 group-hover:scale-[1.03] group-hover:grayscale-0">
            <PlayerCutout
              name={member.name}
              photo={member.photo}
              fallback="slot"
              fallbackLabel={initialsOf(member.name)}
              anchor="center"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            />
          </div>
          <span className="bg-ink text-paper absolute right-3 bottom-3 z-10 px-2 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Профайл →
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-ink text-[24px] leading-none font-bold tracking-[0.02em] uppercase">
            {member.name}
          </h3>
          <p className="text-mute mt-2 text-[13px] font-medium tracking-[0.02em]">
            {member.role}
          </p>
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
  member: RosterStaff | null;
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
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          "bg-ink/60 absolute inset-0 transition-opacity duration-[280ms]",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      {/* Panel */}
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
          <p className="eyebrow">Багийн удирдлага</p>
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
                  {member.role}
                </p>
                <h3 className="font-display text-ink mt-2 text-[32px] leading-none font-bold tracking-[0.02em] uppercase">
                  {member.name}
                </h3>
                {member.intro ? (
                  <p className="text-mute mt-4 text-[15px] leading-[1.7]">
                    {member.intro}
                  </p>
                ) : null}
              </div>

              {member.bullets && member.bullets.length > 0 ? (
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

              {member.sections?.map((section) => (
                <section key={section.heading}>
                  <h4 className="border-line font-display text-ink border-b pb-2 text-[15px] font-semibold tracking-[0.06em] uppercase">
                    {section.heading}
                  </h4>
                  {section.text ? (
                    <p className="text-mute mt-3 text-[14px] leading-[1.7]">
                      {section.text}
                    </p>
                  ) : null}
                  {section.list ? (
                    <ul className="mt-3 space-y-2">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="text-mute flex gap-2.5 text-[14px] leading-[1.6]"
                        >
                          <span
                            className="bg-mute mt-2 size-1.5 shrink-0"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
