"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { routes } from "@/config/routes";
import { publicNav, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Editorial header: ink utility bar (40px) + white main nav (72px), solidly
 * sticky — fixed heights, no scroll-driven transitions, so nothing shifts
 * while reading. Mobile opens a full-screen drawer sliding in from the
 * right (280ms ease-out). Nav links get a 2px underline that grows from the
 * left on hover (180ms).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the drawer is open; Esc closes it. Links close
  // it themselves via onClick.
  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Utility bar scrolls away; the navigation stays pinned. */}
      <div className="bg-ink text-paper hidden overflow-hidden md:block">
        <div className="w-full overflow-hidden">
          <div
            className="utility-ticker flex h-10 items-center"
            aria-label={`${siteConfig.university} · AUBL 2026–2027`}
          >
            <div className="utility-ticker__track flex">
              {[false, true].map((duplicate) => (
                <div
                  key={String(duplicate)}
                  aria-hidden={duplicate || undefined}
                  className="utility-ticker__group flex shrink-0 items-center justify-between"
                >
                  <a
                    href="https://ufe.edu.mn"
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={duplicate ? -1 : undefined}
                    className="team-focus text-[12px] font-medium tracking-[0.12em] text-white uppercase transition-opacity hover:opacity-70"
                  >
                    {siteConfig.university}
                  </a>
                  <span className="text-[12px] font-medium tracking-[0.12em] text-white/60 uppercase">
                    AUBL 2026–2027
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <header className="bg-brand relative z-40 min-h-[72px] border-b border-white/20 text-white">
        {/* Main nav — constant 72px with no scroll-driven animation. */}
        <div className="flex items-center">
          <div className="team-shell relative flex h-[72px] min-h-[72px] w-full items-center justify-between gap-3 sm:gap-6">
            <Link
              href={routes.home}
              className="team-focus flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
              aria-label={`${siteConfig.name} — нүүр хуудас`}
            >
              <Image
                src="/ufe-logo.png"
                alt="UFE Broncos"
                width={48}
                height={48}
                className="relative z-10 size-10 shrink-0 md:size-12"
              />
              <span className="flex min-w-0 flex-col leading-none">
                <span className="font-display text-base font-bold tracking-[0.04em] text-white uppercase sm:text-lg">
                  СЭЗИС
                </span>
                <span className="hidden max-w-[132px] truncate text-[9px] font-medium tracking-[0.16em] text-white/70 uppercase sm:block lg:max-w-[144px]">
                  {siteConfig.headerSubtitle}
                </span>
              </span>
            </Link>

            <nav
              aria-label="Үндсэн цэс"
              className="absolute left-1/2 hidden min-w-0 -translate-x-1/2 items-center justify-center gap-4 lg:flex xl:gap-6"
            >
              {publicNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "font-display nav-underline team-focus flex h-full shrink-0 items-center px-1 text-sm font-semibold tracking-[0.04em] whitespace-nowrap uppercase transition-colors",
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/70 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              {/* Auth is reachable by URL only — no public link, by design. */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Цэс нээх"
                aria-expanded={menuOpen}
                className="team-focus flex size-11 items-center justify-center text-white transition-opacity hover:opacity-70 lg:hidden"
              >
                <Menu className="size-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer — full-screen panel sliding in from the right */}
        <div
          className={cn(
            "bg-ink fixed inset-0 z-50 flex flex-col transition-transform duration-[280ms] ease-out lg:hidden",
            menuOpen ? "translate-x-0" : "pointer-events-none translate-x-full",
          )}
          aria-hidden={!menuOpen}
        >
          <div className="team-shell flex h-14 items-center justify-between border-b border-white/20">
            <span className="font-display text-lg font-bold tracking-[0.04em] text-white uppercase">
              СЭЗИС
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Цэс хаах"
              tabIndex={menuOpen ? 0 : -1}
              className="team-focus flex size-11 items-center justify-center text-white transition-opacity hover:opacity-70"
            >
              <X className="size-6" />
            </button>
          </div>
          <nav
            aria-label="Мобайл цэс"
            className="team-shell flex flex-1 flex-col gap-1 overflow-y-auto py-8"
          >
            {publicNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "font-display border-line flex min-h-14 items-center border-b text-[28px] font-semibold tracking-[0.02em] uppercase transition-colors",
                  isActive(item.href) ? "text-ink" : "text-mute hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="team-shell border-line flex flex-col gap-3 border-t py-6">
            <a
              href="https://ufe.edu.mn"
              target="_blank"
              rel="noreferrer"
              tabIndex={menuOpen ? 0 : -1}
              className="text-mute flex min-h-11 items-center text-[12px] tracking-[0.12em] uppercase"
            >
              {siteConfig.university}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
