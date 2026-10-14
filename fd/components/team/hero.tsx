"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { TeamButton } from "@/components/team/button";
import { WaveField } from "@/components/team/wave-field";
import { routes } from "@/config/routes";
import { hero, history } from "@/content/site";

// ── Hero carousel ───────────────────────────────────────────────────────────
// Responsive ink panel: wave-field texture, bottom gradient, condensed
// headline. Three horizontally sliding panels autoplay every 8s with 80×3
// progress bars and 44px arrow controls.

/** Abstract three-bar team mark (two cut bars framing a slanted middle bar). */
function TeamMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 6h28a7 7 0 0 1 7 7 7 7 0 0 1-7 7H8L21 6Z" />
      <path d="M8 42 26 26h30L38 42H8Z" />
      <path d="M15 44h29l12 14H15a7 7 0 0 1-7-7 7 7 0 0 1 7-7Z" />
    </svg>
  );
}

interface Slide {
  kicker: string;
  headline: string;
  subline: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

const slides: Slide[] = [
  {
    kicker: hero.badge,
    headline: hero.headline,
    subline: hero.intro,
    primary: { label: hero.ctaPlayers, href: routes.site.roster },
    secondary: { label: hero.ctaHistory, href: routes.site.history },
  },
  {
    kicker: `${hero.aubl.title} · 2026–2027`,
    headline: hero.aubl.title,
    subline: hero.aubl.text,
    primary: { label: hero.ctaHistory, href: routes.site.history },
    secondary: { label: "Холбоо барих", href: routes.site.contact },
  },
  {
    kicker: "Түүх · 1992–2026",
    headline: "1992 оноос өнөөдрийг хүртэл",
    subline: history.intro,
    primary: { label: "Түүхийг үзэх", href: routes.site.history },
  },
];

const AUTOPLAY_MS = 8000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
    setProgressKey((key) => key + 1);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, go, progressKey]);

  // Parallax: the texture layer drifts at 0.4× scroll speed while the hero
  // is on screen (skipped under prefers-reduced-motion).
  useEffect(() => {
    const layer = parallaxRef.current;
    if (!layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const update = () => {
      const y = Math.min(window.scrollY, 800);
      layer.style.transform = `translate3d(0, ${y * 0.4}px, 0)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section
      aria-label={hero.title}
      className="bg-paper px-4 py-4 sm:px-6 sm:py-6"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") go(index + 1);
        if (event.key === "ArrowLeft") go(index - 1);
      }}
    >
      <div className="bg-ink relative mx-auto flex min-h-[560px] max-w-[1400px] items-end overflow-hidden rounded-xl text-white sm:min-h-[520px] md:min-h-[540px]">
        <div
          ref={parallaxRef}
          className="absolute inset-0 will-change-transform"
        >
          <WaveField height={560} />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.85),rgba(0,0,0,0)_60%)]"
        />
        <TeamMark className="absolute top-8 right-6 hidden h-14 w-14 text-white/20 lg:block" />

        <div className="team-shell relative w-full pb-6 sm:pb-10 md:pb-12">
          <div className="hero-slides grid">
            {slides.map((slide, slideIndex) => (
              <div
                key={slide.headline}
                aria-hidden={slideIndex !== index}
                inert={slideIndex !== index}
                data-position={
                  slideIndex === index
                    ? "active"
                    : slideIndex === (index - 1 + slides.length) % slides.length
                      ? "before"
                      : slideIndex === (index + 1) % slides.length
                        ? "after"
                        : "outside"
                }
                className="hero-slide"
              >
                <div className="team-shell flex h-full w-full">
                  <div className="flex h-full max-w-[780px] flex-col gap-4">
                    <p className="text-[12px] font-semibold tracking-[0.12em] text-white/60 uppercase">
                      {slide.kicker}
                    </p>
                    <h1 className="font-display text-[clamp(36px,8vw,72px)] leading-[0.98] font-bold tracking-[0.02em] uppercase sm:text-[clamp(40px,7vw,72px)]">
                      {slide.headline}
                    </h1>
                    <p className="max-w-[560px] text-base leading-[1.5] text-white/70">
                      {slide.subline}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-8 sm:gap-6">
                      <TeamButton
                        variant="dark"
                        href={slide.primary.href}
                        className="px-4 text-[12px] sm:px-6 sm:text-sm"
                      >
                        {slide.primary.label}
                      </TeamButton>
                      {slide.secondary ? (
                        <TeamButton
                          variant="dark-outline"
                          href={slide.secondary.href}
                          className="px-4 text-[12px] sm:px-6 sm:text-sm"
                        >
                          {slide.secondary.label}
                        </TeamButton>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls: progress bars + 44px arrows */}
          <div className="mt-6 flex items-center justify-between gap-4 sm:mt-8">
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Слайд"
            >
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.headline}
                  type="button"
                  role="tab"
                  aria-selected={slideIndex === index}
                  aria-label={`Слайд ${slideIndex + 1}`}
                  onClick={() => go(slideIndex)}
                  className="team-focus h-11 py-4"
                >
                  <span className="relative block h-[3px] w-16 overflow-hidden bg-white/25 md:w-20">
                    {slideIndex === index ? (
                      <span
                        key={progressKey}
                        className="absolute inset-0 origin-left bg-white"
                        style={{
                          animation: `hero-progress ${AUTOPLAY_MS}ms linear forwards`,
                        }}
                      />
                    ) : slideIndex < index ? (
                      <span className="absolute inset-0 bg-white/70" />
                    ) : null}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Өмнөх слайд"
                className="team-focus hover:text-ink flex size-11 items-center justify-center border border-white/30 transition-colors hover:border-white hover:bg-white"
              >
                <ArrowLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Дараагийн слайд"
                className="team-focus hover:text-ink flex size-11 items-center justify-center border border-white/30 transition-colors hover:border-white hover:bg-white"
              >
                <ArrowRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
