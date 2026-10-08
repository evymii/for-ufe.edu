import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { routes } from "@/config/routes";
import { hero } from "@/content/site";

// ── Wave banner ─────────────────────────────────────────────────────────────
// Full-width navy banner: a field of thin flowing wave lines bunching toward
// a blue glow left of center (pure deterministic SVG — no image asset),
// with the team mark and the headline stacked dead-center.

const WAVE_W = 1600;
const WAVE_H = 460;
const LINE_COUNT = 88;
const SAMPLES = 90;

/** Deterministic 0..1 shade per line so the field feels hand-drawn. */
function lineShade(i: number): number {
  const x = Math.sin((i + 1) * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/** Vertical envelope: lines spread at the glow center, compress at the edges. */
function envelope(t: number): number {
  const d = (t - 0.4) / 0.36;
  return 0.42 + 0.58 * Math.exp(-d * d);
}

/** Shared undulating ribbon shape, normalized to roughly -1..1. */
function ribbon(t: number): number {
  return (
    Math.sin(t * Math.PI * 2 * 1.15 + 0.65) * 0.52 +
    Math.sin(t * Math.PI * 2 * 2.05 + 2.4) * 0.3 +
    Math.sin(t * Math.PI * 2 * 0.62 + 4.1) * 0.36
  );
}

function wavePath(i: number): string {
  const mid = i / (LINE_COUNT - 1) - 0.5;
  const parts: string[] = [];
  for (let s = 0; s <= SAMPLES; s++) {
    const t = s / SAMPLES;
    const y =
      WAVE_H / 2 +
      mid * WAVE_H * 0.92 * envelope(t) +
      ribbon(t) * 30 * (0.35 + 0.65 * envelope(t));
    parts.push(
      `${s === 0 ? "M" : "L"}${(t * WAVE_W).toFixed(1)} ${y.toFixed(1)}`,
    );
  }
  return parts.join(" ");
}

function WaveField() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox={`0 0 ${WAVE_W} ${WAVE_H}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hero-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2E6BFF" stopOpacity="0.05" />
          <stop offset="0.3" stopColor="#2E6BFF" stopOpacity="0.45" />
          <stop offset="0.4" stopColor="#6FA0FF" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="#2E6BFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#2E6BFF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {Array.from({ length: LINE_COUNT }, (_, i) => {
        const shade = lineShade(i);
        return (
          <path
            key={i}
            d={wavePath(i)}
            fill="none"
            stroke="url(#hero-wave)"
            strokeWidth={1.1 + shade * 0.6}
            opacity={0.3 + shade * 0.5}
          />
        );
      })}
    </svg>
  );
}

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

export function Hero() {
  return (
    <>
      {/* Banner: wave field + centered mark & headline */}
      <section
        aria-label={hero.title}
        className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#0A1440] md:min-h-[460px]"
      >
        <WaveField />
        {/* Glow + vignette overlays */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_62%_85%_at_38%_50%,rgba(46,107,255,0.30)_0%,rgba(46,107,255,0.10)_40%,transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,#060D2E_0%,transparent_20%,transparent_80%,#060D2E_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,9,34,0.45)_0%,transparent_28%,transparent_72%,rgba(4,9,34,0.55)_100%)]"
        />

        <div className="relative z-10 flex flex-col items-center px-4 py-20 text-center sm:px-6">
          <TeamMark className="h-12 w-12 text-white md:h-16 md:w-16" />
          <h1 className="font-display mt-7 max-w-5xl text-[clamp(26px,3.4vw,42px)] leading-[1.2] font-bold tracking-[0.02em] text-white uppercase md:mt-8">
            {hero.headline}
          </h1>
        </div>
      </section>

      {/* Follow band: badge, intro, CTAs + AUBL highlight */}
      <section className="border-line bg-paper border-b">
        <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <div className="flex flex-col items-start justify-center">
            <p className="border-gold text-gold inline-flex items-center rounded-full border px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase">
              {hero.badge}
            </p>
            <p className="text-mute mt-5 max-w-xl text-base leading-[1.65]">
              {hero.intro}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href={routes.site.roster}
                className="bg-brand text-brand-contrast font-display inline-flex min-h-12 items-center gap-2 rounded-lg px-6 text-sm font-semibold tracking-[0.08em] uppercase transition-opacity hover:opacity-90"
              >
                {hero.ctaPlayers}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href={routes.site.history}
                className="text-brand border-brand hover:bg-brand/5 font-display inline-flex min-h-12 items-center rounded-lg border px-6 text-sm font-semibold tracking-[0.08em] uppercase transition-colors"
              >
                {hero.ctaHistory}
              </Link>
            </div>
          </div>

          <div className="flex items-stretch">
            <div className="flex w-full flex-col justify-center rounded-xl bg-[#14338F] p-7 text-white md:p-8">
              <p className="font-display text-[clamp(34px,4vw,48px)] leading-none font-bold tracking-[0.02em] uppercase">
                {hero.aubl.title}
              </p>
              <span
                className="mt-5 block h-px w-16 bg-white/30"
                aria-hidden="true"
              />
              <p className="mt-5 text-[15px] leading-[1.65] text-white/85">
                {hero.aubl.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/** Row of four quiet stat cards under the hero. */
export function StatCards({
  stats,
}: {
  stats: ReadonlyArray<{ label: string; value: string }>;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="border-line bg-paper shadow-card card-lift rounded-xl border p-5"
        >
          <p className="text-brand font-display text-[38px] leading-none font-bold">
            {stat.value}
          </p>
          <p className="text-mute mt-3 text-sm font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
