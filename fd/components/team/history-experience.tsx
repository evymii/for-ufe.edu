"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { routes } from "@/config/routes";
import { timeline, type TimelineEntry } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Scroll-driven history experience, modelled on season-celebration pages.
 *
 * Desktop (lg+): each era is a full-height panel inside a horizontally
 * moving track — native vertical scroll drives the sideways travel, so the
 * wheel, trackpad and scrollbar all work without hijacking. The sticky year
 * rail acts as a scroll-spy and jumps to a panel by scrolling to the mapped
 * vertical position.
 *
 * Mobile: the same eras stack vertically, each with its own swipeable
 * image strip.
 *
 * All narrative copy comes verbatim from content/site.ts — only the era
 * grouping labels and image slots are defined here.
 */

interface Era {
  id: string;
  navLabel: string;
  title: string;
  /** Photo paths for this era (landscape scans) — empty means text-only. */
  photos: string[];
  /** Center the text block (used on the opening 1992 panel). */
  centered?: boolean;
  highlight?: boolean;
  entries: TimelineEntry[];
}

/**
 * Lookup of timeline entries keyed by period: CMS-edited entries (from the
 * site-content history/page blob) layered over the static defaults, so an
 * admin can reword any era without the era structure needing every entry.
 */
function makeLookup(
  entries: TimelineEntry[],
): (period: string) => TimelineEntry {
  const merged = new Map(timeline.map((entry) => [entry.period, entry]));
  for (const entry of entries) {
    if (entry && typeof entry.period === "string") {
      merged.set(entry.period, entry);
    }
  }
  return (period: string): TimelineEntry => {
    const entry = merged.get(period);
    if (!entry) throw new Error(`Missing timeline entry: ${period}`);
    return entry;
  };
}

const photo = (year: number) => `/images/tuuh/${year}/${year}.png`;

function buildEras(byPeriod: (period: string) => TimelineEntry): Era[] {
  return [
    {
      id: "1992",
      navLabel: "1992",
      title: "Аварга баг",
      photos: [],
      centered: true,
      entries: [byPeriod("1992")],
    },
    {
      id: "1996",
      navLabel: "1996",
      title: "Үндсэн суурь",
      photos: [photo(1996)],
      entries: [byPeriod("1996")],
    },
    {
      id: "1997-2006",
      navLabel: "1997",
      title: "Медалийн жилүүд",
      photos: [photo(2006)],
      entries: [byPeriod("1997–2006")],
    },
    {
      id: "2017-2018",
      navLabel: "2017",
      title: "Мөнгөн медаль",
      photos: [photo(2018)],
      entries: [byPeriod("2017–2018")],
    },
    {
      id: "2018-2019",
      navLabel: "2018",
      title: "Elite 8",
      photos: [photo(2019)],
      entries: [byPeriod("2018–2019")],
    },
    {
      id: "2019-2020",
      navLabel: "2019",
      title: "Elite 8",
      photos: [photo(2020)],
      entries: [byPeriod("2019–2020")],
    },
    {
      id: "2021-2022",
      navLabel: "2021",
      title: "Шөвгийн дөрөв",
      photos: [photo(2021)],
      entries: [byPeriod("2021–2022")],
    },
    {
      id: "2022-2023",
      navLabel: "2022",
      title: "Шөвгийн дөрөв",
      photos: [photo(2022)],
      entries: [byPeriod("2022–2023")],
    },
    {
      id: "2023-2024",
      navLabel: "2023",
      title: "Sweet 16",
      photos: [photo(2023)],
      entries: [byPeriod("2023–2024")],
    },
    {
      id: "2024-2025",
      navLabel: "2024",
      title: "Хүрэл медаль",
      photos: [photo(2024)],
      entries: [byPeriod("2024–2025")],
    },
    {
      id: "2025-2026",
      navLabel: "2025",
      title: "Аварга",
      photos: [photo(2025)],
      highlight: true,
      entries: [byPeriod("2025–2026")],
    },
    {
      id: "2026-2027",
      navLabel: "2026",
      title: "AUBL",
      photos: [],
      entries: [byPeriod("2026–2027")],
    },
  ];
}

/** Sticky chrome: site header (72px) + year rail (56px). */
const TOP_OFFSET = 128;

let tweenTimer = 0;

/** Timeout-driven eased scroll — programmatic "smooth" scrolling is
 *  unsupported in some webviews, and this lands identically everywhere. */
function tweenScrollTo(target: number, instant: boolean) {
  window.clearTimeout(tweenTimer);
  const start = window.scrollY;
  const delta = target - start;
  if (instant || Math.abs(delta) < 2) {
    window.scrollTo(0, target);
    return;
  }
  const duration = 650;
  const t0 = performance.now();
  const step = () => {
    const t = Math.min(1, (performance.now() - t0) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    window.scrollTo(0, start + delta * eased);
    if (t < 1) tweenTimer = window.setTimeout(step, 16);
  };
  step();
}

export function HistoryExperience({ entries }: { entries: TimelineEntry[] }) {
  const eras = buildEras(makeLookup(entries));
  const [activeId, setActiveId] = useState(eras[0].id);
  const [distance, setDistance] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const distanceRef = useRef(0);

  const isDesktop = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1024px)").matches;

  const measure = useCallback(() => {
    const track = trackRef.current;
    const viewport = track?.parentElement;
    if (!track || !viewport) return;
    const next = Math.max(0, track.scrollWidth - viewport.clientWidth);
    distanceRef.current = next;
    setDistance(next);
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    const clamp = (v: number, min: number, max: number) =>
      Math.min(max, Math.max(min, v));

    const update = () => {
      const track = trackRef.current;
      const bar = barRef.current;
      let current = activeId;
      let ratio = 0;

      if (isDesktop() && track) {
        const wrap = wrapRef.current;
        if (wrap) {
          const max = distanceRef.current;
          const p = clamp(-wrap.getBoundingClientRect().top, 0, max);
          track.style.transform = `translate3d(${-p}px, 0, 0)`;
          ratio = max > 0 ? p / max : 0;
          const mark = p + window.innerWidth / 2;
          for (const era of eras) {
            const panel = document.getElementById(`panel-${era.id}`);
            if (panel && panel.offsetLeft <= mark) current = era.id;
          }
        }
      } else {
        const wrap = sectionsRef.current;
        if (wrap) {
          const mark = window.scrollY + TOP_OFFSET + 40;
          for (const era of eras) {
            const el = document.getElementById(era.id);
            if (el && el.getBoundingClientRect().top + window.scrollY <= mark) {
              current = era.id;
            }
          }
          const start = wrap.getBoundingClientRect().top + window.scrollY;
          const end = start + wrap.offsetHeight - window.innerHeight;
          ratio =
            end > start
              ? clamp((window.scrollY - start) / (end - start), 0, 1)
              : 0;
        }
      }

      if (bar) bar.style.transform = `scaleX(${ratio})`;
      setActiveId((prev) => (prev === current ? prev : current));
    };

    // Scroll events are browser-coalesced and update() only writes two
    // styles, so call it directly — rAF-gating stalls in webviews where
    // requestAnimationFrame is paused. Some webviews also drop scroll
    // events entirely (compositor-side scrolling), so a slow interval acts
    // as a self-healing fallback that re-syncs position.
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const interval = window.setInterval(update, 250);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const jumpTo = (era: Era) => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let target: number | null = null;
    if (isDesktop()) {
      const wrap = wrapRef.current;
      const panel = document.getElementById(`panel-${era.id}`);
      if (wrap && panel) {
        const wrapTop = wrap.getBoundingClientRect().top + window.scrollY;
        target = wrapTop + panel.offsetLeft;
      }
    } else {
      const el = document.getElementById(era.id);
      if (el) {
        target =
          el.getBoundingClientRect().top + window.scrollY - TOP_OFFSET - 12;
      }
    }
    if (target === null) return;
    tweenScrollTo(target, reduced);
  };

  return (
    <>
      {/* Sticky year rail — scroll-spy + reading progress */}
      <nav
        aria-label="Он цэс"
        className="border-line bg-paper sticky top-[72px] z-30 h-14 border-b"
      >
        <div className="team-shell flex h-full items-center">
          <ul className="no-scrollbar flex items-center gap-1 overflow-x-auto">
            {eras.map((era) => {
              const active = era.id === activeId;
              return (
                <li key={era.id}>
                  <a
                    href={`#${era.id}`}
                    aria-current={active ? "true" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      jumpTo(era);
                    }}
                    className={cn(
                      "font-display team-focus flex h-14 shrink-0 border-b-2 px-4 text-[15px] font-semibold tracking-[0.1em] uppercase transition-colors",
                      active
                        ? "border-accent-blue text-accent-blue"
                        : "text-mute hover:text-ink border-transparent",
                    )}
                  >
                    {era.navLabel}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          ref={barRef}
          aria-hidden="true"
          className="bg-ink absolute bottom-0 left-0 h-0.5 w-full origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </nav>

      {/* Desktop: full-height panels travelling sideways */}
      <div
        ref={wrapRef}
        className="relative hidden lg:block"
        style={{ height: `calc(100svh - ${TOP_OFFSET}px + ${distance}px)` }}
      >
        <div
          className="sticky overflow-hidden"
          style={{ top: TOP_OFFSET, height: `calc(100svh - ${TOP_OFFSET}px)` }}
        >
          <div ref={trackRef} className="flex h-full w-full">
            {eras.map((era) => (
              <article
                key={era.id}
                id={`panel-${era.id}`}
                className={cn(
                  "relative h-full w-full shrink-0 border-r last:border-r-0",
                  era.highlight
                    ? "bg-ink border-white/10 text-white"
                    : "border-line/60 bg-paper",
                )}
              >
                <p
                  aria-hidden="true"
                  className={cn(
                    "font-display pointer-events-none absolute right-6 bottom-0 text-[clamp(180px,24vw,360px)] leading-[0.75] font-bold tracking-[0.02em] text-transparent select-none",
                    era.highlight
                      ? "[-webkit-text-stroke:2px_rgba(255,255,255,0.12)]"
                      : "[-webkit-text-stroke:2px_rgba(11,11,12,0.10)]",
                  )}
                >
                  {era.navLabel}
                </p>

                {era.photos.length > 0 ? (
                  <div className="relative mx-auto grid h-full w-full max-w-[1280px] grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center gap-14 px-8">
                    <EraCopy era={era} />
                    <EraPhotos
                      photos={era.photos}
                      highlight={Boolean(era.highlight)}
                    />
                  </div>
                ) : (
                  <div className="relative mx-auto grid h-full w-full max-w-[1280px] items-center px-8">
                    <div
                      className={cn(
                        "max-w-[780px]",
                        era.centered && "mx-auto text-center",
                      )}
                    >
                      <EraCopy era={era} large />
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical eras, each with a swipeable image strip */}
      <div ref={sectionsRef} className="lg:hidden">
        {eras.map((era) => (
          <section
            key={era.id}
            id={era.id}
            className={cn(
              "scroll-mt-32",
              era.highlight ? "bg-ink text-white" : "bg-paper",
            )}
          >
            <div className="team-shell py-14">
              <EraCopy era={era} />
              {era.photos.length > 0 ? (
                <div className="no-scrollbar mt-8 flex snap-x snap-mandatory items-center gap-4 overflow-x-auto pb-2">
                  {era.photos.map((src) => (
                    <div
                      key={src}
                      className={cn(
                        "relative aspect-[3/2] w-72 shrink-0 snap-start overflow-hidden border",
                        era.highlight ? "border-white/25" : "border-line",
                      )}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="288px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}
      </div>

      {/* Continue exploring — roster & staff */}
      <section className="border-line bg-paper-soft border-t">
        <div className="team-shell grid gap-4 py-16 sm:grid-cols-2 md:py-20">
          {[
            { href: routes.site.roster, label: "Тоглогчид" },
            { href: routes.site.management, label: "Удирдлага" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group border-line bg-paper hover:border-ink flex min-h-11 items-center justify-between border px-6 py-5 transition-colors"
            >
              <span className="font-display text-ink text-lg font-semibold tracking-[0.06em] uppercase">
                {label}
              </span>
              <ArrowRight
                className="text-ink size-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function EraCopy({ era, large }: { era: Era; large?: boolean }) {
  return (
    <div>
      <p
        className={cn(
          "text-[11px] font-semibold tracking-[0.28em] uppercase",
          era.highlight ? "text-white/60" : "text-mute",
        )}
      >
        {era.entries[0].period}
        {era.entries.length > 1
          ? ` — ${era.entries[era.entries.length - 1].period}`
          : ""}
      </p>
      <h2
        className={cn(
          "font-display mt-3 leading-[1.1] font-bold tracking-[0.02em] uppercase",
          large
            ? "text-[clamp(38px,5.5vw,64px)]"
            : "text-[clamp(30px,4vw,44px)]",
          era.highlight ? "text-white" : "text-ink",
        )}
      >
        {era.title}
      </h2>

      <ol
        className={cn(
          "relative mt-6 space-y-6",
          era.centered
            ? undefined
            : cn(
                "ml-1 border-l pl-6",
                era.highlight ? "border-white/20" : "border-line",
              ),
        )}
      >
        {era.entries.map((entry) => {
          const highlight = Boolean(entry.highlightLabel);
          return (
            <li key={entry.period} className="relative">
              {era.centered ? null : (
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute",
                    highlight
                      ? "top-1 -left-[27px] size-3"
                      : "top-1.5 -left-[25px] size-2.5",
                    era.highlight
                      ? highlight
                        ? "bg-paper"
                        : "bg-white/60"
                      : highlight
                        ? "bg-ink"
                        : "bg-mute/60",
                  )}
                />
              )}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p
                  className={cn(
                    "font-display text-lg font-bold tracking-[0.02em]",
                    era.highlight ? "text-white" : "text-ink",
                  )}
                >
                  {entry.period}
                </p>
                {entry.highlightLabel ? (
                  <span
                    className={cn(
                      "px-2.5 py-0.5 text-[11px] font-semibold tracking-[0.12em] uppercase",
                      era.highlight ? "bg-paper text-ink" : "bg-ink text-paper",
                    )}
                  >
                    {entry.highlightLabel}
                  </span>
                ) : null}
              </div>
              {entry.text ? (
                <p
                  className={cn(
                    "mt-1 max-w-xl leading-[1.6]",
                    large ? "text-base" : "text-sm",
                    era.highlight ? "text-white/75" : "text-mute",
                    era.centered && "mx-auto",
                  )}
                >
                  {entry.text}
                </p>
              ) : null}
              {entry.bullets ? (
                <ul className="mt-2 space-y-1.5">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className={cn(
                        "flex max-w-xl gap-2 leading-[1.6]",
                        large ? "text-base" : "text-sm",
                        era.highlight ? "text-white/75" : "text-mute",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-2 size-1.5 shrink-0",
                          era.highlight ? "bg-white/50" : "bg-mute/50",
                        )}
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/**
 * Era photography: uniform, straight cards — every card the same 3:2 size
 * with the same frame. A single photo sits centered; an era with two photos
 * stacks them corner-to-corner (top-left, bottom-right) at the same width.
 */
function EraPhotos({
  photos,
  highlight,
}: {
  photos: string[];
  highlight: boolean;
}) {
  const border = highlight ? "border-white/25" : "border-line";
  const card = (src: string, sizes: string) => (
    <div
      className={cn(
        "relative aspect-[3/2] w-full overflow-hidden border",
        border,
      )}
    >
      <Image src={src} alt="" fill sizes={sizes} className="object-cover" />
    </div>
  );

  if (photos.length > 1) {
    return (
      <div aria-hidden="true" className="relative h-[600px]">
        <div className="absolute top-0 left-2 w-[440px]">
          {card(photos[0], "(min-width: 1024px) 36vw, 90vw")}
        </div>
        <div className="absolute right-2 bottom-0 w-[440px]">
          {card(photos[1], "(min-width: 1024px) 36vw, 90vw")}
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="flex h-[560px] items-center">
      <div className="w-[560px]">
        {card(photos[0], "(min-width: 1024px) 45vw, 90vw")}
      </div>
    </div>
  );
}
