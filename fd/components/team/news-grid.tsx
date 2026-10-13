import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { routes } from "@/config/routes";
import { featuredNews } from "@/content/site";

/**
 * 12-column news grid: one featured story card (8 cols, 480px, ink panel
 * with an outlined watermark numeral) and a stack of compact cards in the
 * remaining 4 columns. Copy comes verbatim from content/site.ts.
 */
export function NewsGrid() {
  const [featured, ...rest] = featuredNews.items;

  return (
    <div className="grid gap-6 md:grid-cols-12">
      {featured ? (
        <article className="bg-ink card-lift relative flex min-h-[420px] flex-col justify-end overflow-hidden p-8 text-white md:col-span-8 md:min-h-[480px]">
          <span
            aria-hidden="true"
            className="font-display pointer-events-none absolute top-2 right-4 text-[150px] leading-[0.8] font-bold text-transparent select-none [-webkit-text-stroke:2px_rgba(255,255,255,0.16)]"
          >
            01
          </span>
          <p className="text-[12px] font-semibold tracking-[0.12em] text-white/60 uppercase">
            {featuredNews.label} · {featured.kicker}
          </p>
          <h3 className="font-display mt-3 max-w-[520px] text-[clamp(26px,3.4vw,36px)] leading-[1.05] font-bold tracking-[0.02em] uppercase">
            {featured.title}
          </h3>
          <p className="mt-4 max-w-[520px] text-[15px] leading-[1.6] text-white/70">
            {featured.body}
          </p>
        </article>
      ) : null}

      <div className="flex flex-col gap-6 md:col-span-4">
        {rest.map((item, index) => (
          <article
            key={item.title}
            className="border-line bg-paper card-lift relative flex gap-4 overflow-hidden border p-5"
          >
            <span
              aria-hidden="true"
              className="font-display text-mute/25 pointer-events-none w-14 shrink-0 text-[64px] leading-none font-bold select-none"
            >
              {String(index + 2).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <p className="eyebrow">{item.kicker}</p>
              <h3 className="font-display text-ink mt-1.5 text-[22px] leading-[1.1] font-semibold tracking-[0.02em] uppercase">
                {item.title}
              </h3>
              <p className="text-mute mt-2 line-clamp-3 text-[13px] leading-[1.6]">
                {item.body}
              </p>
            </div>
          </article>
        ))}

        {/* Archive link tile completes the 3-high stack */}
        <Link
          href={routes.site.history}
          className="group border-line bg-paper-soft hover:border-ink flex min-h-24 flex-col justify-center gap-1 border p-5 transition-colors"
        >
          <p className="eyebrow">Архив</p>
          <p className="font-display text-ink flex items-center gap-2 text-[22px] leading-none font-semibold tracking-[0.02em] uppercase">
            Түүхэн замнал
            <ArrowRight
              className="size-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </p>
          <p className="text-mute text-[13px]">1992 оноос өнөөдрийг хүртэл</p>
        </Link>
      </div>
    </div>
  );
}
