import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/team/reveal";
import { routes } from "@/config/routes";

type Medal = "gold" | "silver" | "bronze";

const medalStyles: Record<
  Medal,
  { card: string; year: string; period: string; marker: string; center: string }
> = {
  gold: {
    card: "border-amber-300/70 bg-amber-200/[0.07] shadow-[0_0_24px_rgba(234,179,8,0.18)] hover:border-amber-200 hover:shadow-[0_0_30px_rgba(234,179,8,0.28)]",
    year: "text-amber-200/20",
    period: "text-amber-200",
    marker:
      "border-amber-200 bg-amber-300 shadow-[0_0_16px_rgba(234,179,8,0.55)] group-hover:shadow-[0_0_22px_rgba(234,179,8,0.7)]",
    center: "bg-amber-100",
  },
  silver: {
    card: "border-slate-300/70 bg-slate-200/[0.06] shadow-[0_0_24px_rgba(203,213,225,0.16)] hover:border-slate-200 hover:shadow-[0_0_30px_rgba(203,213,225,0.25)]",
    year: "text-slate-200/20",
    period: "text-slate-200",
    marker:
      "border-slate-200 bg-slate-300 shadow-[0_0_16px_rgba(203,213,225,0.45)] group-hover:shadow-[0_0_22px_rgba(203,213,225,0.65)]",
    center: "bg-white",
  },
  bronze: {
    card: "border-orange-400/70 bg-orange-300/[0.06] shadow-[0_0_24px_rgba(194,108,52,0.18)] hover:border-orange-300 hover:shadow-[0_0_30px_rgba(194,108,52,0.3)]",
    year: "text-orange-200/20",
    period: "text-orange-200",
    marker:
      "border-orange-300 bg-orange-500 shadow-[0_0_16px_rgba(194,108,52,0.55)] group-hover:shadow-[0_0_22px_rgba(194,108,52,0.75)]",
    center: "bg-orange-200",
  },
};

const milestones = [
  {
    period: "1992",
    description: "Их, дээд сургуулийн аварга.",
    medal: "gold",
  },
  {
    period: "1997–2006",
    description: "Оюутны лигийн 3 мөнгөн медаль.",
    medal: "silver",
  },
  { period: "2017–2018", description: "Хотын аваргын мөнгө · Elite 8." },
  { period: "2021–2022", description: "Final 4 · Баруун бүсийн тэргүүн." },
  {
    period: "2024–2025",
    description: "Оюутны лигийн хүрэл медаль.",
    medal: "bronze",
  },
  {
    period: "2025–2026",
    description: "Оюутны лигийн анхны аварга.",
    medal: "gold",
  },
] as const;

function MilestoneCard({
  period,
  description,
  medal,
  className,
}: {
  period: string;
  description: string;
  medal?: Medal;
  className?: string;
}) {
  const medalStyle = medal ? medalStyles[medal] : null;

  return (
    <Link
      href={routes.site.history}
      aria-label={`${period}: ${description}`}
      className={`group/card relative block border p-3 text-left transition-[transform,background-color,border-color,box-shadow] duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:z-10 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/[0.12] hover:shadow-[0_10px_24px_rgba(0,0,0,0.22)] focus-visible:z-10 focus-visible:-translate-y-1 focus-visible:scale-[1.02] focus-visible:bg-white/[0.12] focus-visible:shadow-[0_10px_24px_rgba(0,0,0,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none ${
        medalStyle
          ? medalStyle.card
          : "border-white/20 bg-white/[0.04] hover:border-white/45"
      } ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className={`font-display pointer-events-none absolute top-2 right-3 text-3xl leading-none font-bold ${medalStyle?.year ?? "text-white/10"}`}
      >
        {period.slice(0, 4)}
      </span>
      <span
        className={`font-display block text-[12px] font-bold tracking-[0.1em] uppercase ${medalStyle?.period ?? "text-white"}`}
      >
        {period}
      </span>
      <span className="mt-2 block text-[12px] leading-[1.5] text-white/70">
        {description}
      </span>
      <span className="mt-3 flex items-center gap-1 text-[9px] font-semibold tracking-[0.12em] text-white/45 uppercase transition-colors group-hover/card:text-white group-focus-visible/card:text-white">
        Түүхийг үзэх
        <ArrowUpRight className="size-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function HomeTimeline() {
  return (
    <section
      aria-labelledby="home-history-title"
      className="overflow-hidden bg-[#05070b] text-white"
    >
      <div className="team-shell team-shell-wide py-8 md:py-10">
        <Reveal>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-white/55 uppercase">
                1992 — ӨНӨӨДРИЙГ ХҮРТЭЛ
              </p>
              <h2
                id="home-history-title"
                className="font-display mt-2 text-[clamp(26px,3vw,34px)] leading-[1.05] font-bold tracking-[0.02em] uppercase"
              >
                Түүхэн мөчүүд
              </h2>
            </div>
            <Link
              href={routes.site.history}
              className="group hover:text-ink inline-flex min-h-10 items-center gap-2 border border-white/30 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors hover:border-white hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Цаг хугацааны тууз
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>

        <ol className="relative hidden min-h-[320px] grid-cols-6 lg:grid">
          <svg
            aria-hidden="true"
            viewBox="0 0 600 48"
            preserveAspectRatio="none"
            className="pointer-events-none absolute top-1/2 right-0 left-0 h-12 w-full -translate-y-1/2 overflow-visible"
          >
            <path
              d="M0 24 L50 17 L150 31 L250 17 L350 31 L450 17 L550 31 L600 24"
              fill="none"
              stroke="rgb(255 255 255 / 0.32)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {milestones.map((entry, index) => {
            const above = index % 2 === 0;
            return (
              <Reveal
                key={entry.period}
                as="li"
                delay={index * 60}
                className="group relative grid grid-rows-[1fr_40px_1fr]"
              >
                <MilestoneCard
                  period={entry.period}
                  description={entry.description}
                  medal={"medal" in entry ? entry.medal : undefined}
                  className={`w-full ${above ? "row-start-1 mb-4 self-end" : "row-start-3 mt-4 self-start"}`}
                />
                <span
                  aria-hidden="true"
                  className="relative z-[1] row-start-2 flex items-center justify-center before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-px before:-translate-x-1/2 before:bg-white/35"
                >
                  <span
                    className={`relative z-[1] size-4 rounded-full border-2 transition-[transform,box-shadow] duration-200 ease-out group-hover:scale-110 ${
                      "medal" in entry
                        ? medalStyles[entry.medal].marker
                        : "border-white/70 bg-[#05070b] group-hover:shadow-[0_0_0_4px_rgba(255,255,255,0.1)]"
                    } ${above ? "translate-y-[-7px]" : "translate-y-[7px]"}`}
                  >
                    <span
                      className={`absolute inset-0.5 rounded-full ${
                        "medal" in entry
                          ? medalStyles[entry.medal].center
                          : "bg-white"
                      }`}
                    />
                  </span>
                </span>
              </Reveal>
            );
          })}
        </ol>

        <ol className="relative space-y-4 border-l border-white/25 pl-7 lg:hidden">
          {milestones.map((entry, index) => (
            <Reveal
              key={entry.period}
              as="li"
              delay={index * 50}
              className="group relative"
            >
              <span
                aria-hidden="true"
                className={`absolute top-5 -left-[35px] z-[1] size-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-110 ${
                  "medal" in entry
                    ? medalStyles[entry.medal].marker
                    : "border-white/70 bg-[#202020]"
                }`}
              />
              <MilestoneCard
                period={entry.period}
                description={entry.description}
                medal={"medal" in entry ? entry.medal : undefined}
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
