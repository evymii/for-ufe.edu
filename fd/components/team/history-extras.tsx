"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Download, Share2, X } from "lucide-react";

import { TeamButton } from "@/components/team/button";
import { Reveal } from "@/components/team/reveal";
import { hero } from "@/content/site";
import { routes } from "@/config/routes";

/** Archive photos that exist on disk (public/images/tuuh/<year>/). */
const MOMENTS: Array<{ year: number; src: string; alt: string }> = [
  1996, 2006, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
].map((year) => ({
  year,
  src: `/images/tuuh/${year}/${year}.png`,
  alt: `СЭЗИС-ийн шигшээ багийн ${year} оны дурсамжийн зураг`,
}));

/** Honour roll derived from the timeline: count + title + year span. */
const HONORS = [
  { count: "2×", title: "Аварга", years: "1992 · 2025–2026" },
  { count: "5×", title: "Мөнгөн медаль", years: "1999–2018" },
  { count: "3×", title: "Elite 8", years: "2017–2020" },
  { count: "2×", title: "Final 4", years: "2021–2023" },
] as const;

/**
 * History-page extras below the side-scrolling timeline: the honour roll
 * (dark cards with giant count watermarks), the archive moments gallery
 * (masonry + full-screen lightbox with keyboard nav, counter, download and
 * share), and the closing ink CTA band.
 */
export function HistoryExtras() {
  return (
    <>
      {/* Honour roll — dark cards, 140px count watermark */}
      <section aria-label="Багийн хүндэтгэл" className="bg-paper">
        <div className="team-shell py-16 md:py-24">
          <Reveal>
            <h2 className="font-display text-ink text-[clamp(30px,4vw,40px)] leading-none font-bold tracking-[0.02em] uppercase">
              Амжилтууд
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HONORS.map((honor, index) => (
              <Reveal key={honor.title} delay={index * 60}>
                <article className="bg-ink relative h-[300px] overflow-hidden text-white md:h-[360px]">
                  <span
                    aria-hidden="true"
                    className="font-display pointer-events-none absolute -top-2 right-3 text-[140px] leading-none font-bold text-transparent select-none [-webkit-text-stroke:2px_rgba(255,255,255,0.14)]"
                  >
                    {honor.count}
                  </span>
                  <div className="absolute right-4 bottom-4 left-4">
                    <p className="text-[12px] font-semibold tracking-[0.12em] text-white/50 uppercase">
                      {honor.years}
                    </p>
                    <h3 className="font-display mt-1 text-[30px] leading-none font-bold tracking-[0.02em] uppercase">
                      {honor.title}
                    </h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Moments gallery — masonry + lightbox */}
      <section aria-label="Дурсамжийн зургууд" className="border-line border-t">
        <div className="team-shell py-16 md:py-24">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-display text-ink text-[clamp(30px,4vw,40px)] leading-none font-bold tracking-[0.02em] uppercase">
                Дурсамжийн зургууд
              </h2>
              <span className="text-mute text-[12px] font-semibold tracking-[0.12em] uppercase">
                {MOMENTS.length} зураг
              </span>
            </div>
          </Reveal>
          <MomentsGallery />
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="bg-paper">
        <div className="team-shell pb-16 md:pb-24">
          <Reveal>
            <div className="bg-ink flex min-h-[240px] flex-wrap items-center justify-between gap-8 p-8 text-white md:p-12">
              <div className="max-w-[640px]">
                <p className="text-[12px] font-semibold tracking-[0.12em] text-white/50 uppercase">
                  {hero.aubl.title} · Дараагийн бүлэг
                </p>
                <h2 className="font-display mt-3 text-[clamp(28px,4vw,48px)] leading-[1] font-bold tracking-[0.02em] uppercase">
                  2026–2027 он · Азийн лиг
                </h2>
                <p className="mt-4 max-w-[520px] text-[15px] leading-[1.6] text-white/70">
                  {hero.aubl.text}
                </p>
              </div>
              <TeamButton variant="dark" href={routes.site.roster}>
                Тоглогчид
              </TeamButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function MomentsGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = openIndex !== null;

  const move = useCallback((delta: number) => {
    setOpenIndex((current) =>
      current === null
        ? current
        : (current + delta + MOMENTS.length) % MOMENTS.length,
    );
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, move]);

  const active = openIndex !== null ? MOMENTS[openIndex] : null;

  const share = async () => {
    if (!active) return;
    const url = new URL(active.src, window.location.origin).href;
    if (navigator.share) {
      try {
        await navigator.share({ title: `СЭЗИС — ${active.year}`, url });
      } catch {
        /* dismissed */
      }
    } else {
      await navigator.clipboard?.writeText(url);
    }
  };

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {MOMENTS.map((moment, index) => (
          <button
            key={moment.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`${moment.year} оны зургийг томруулах`}
            className="team-focus group mb-6 block w-full break-inside-avoid text-left"
          >
            <div className="border-line relative overflow-hidden border">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.04]"
                />
              </div>
              <span className="bg-ink text-paper absolute bottom-3 left-3 px-2 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase">
                {moment.year}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox — ink overlay, image at 90vh, keyboard nav + counter */}
      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.year} оны зураг`}
          className="fixed inset-0 z-50 flex flex-col bg-[rgb(11_11_12/0.94)] p-4"
        >
          <div className="flex items-center justify-between text-white">
            <p className="font-display text-lg font-bold tracking-[0.08em] uppercase">
              {active.year}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-mute mr-2 text-[12px] tracking-[0.12em] uppercase">
                {(openIndex ?? 0) + 1} / {MOMENTS.length}
              </span>
              <a
                href={active.src}
                download
                aria-label="Зургийг татах"
                className="team-focus hover:text-ink flex size-11 items-center justify-center border border-white/30 transition-colors hover:border-white hover:bg-white"
              >
                <Download className="size-5" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={share}
                aria-label="Хуваалцах"
                className="team-focus hover:text-ink flex size-11 items-center justify-center border border-white/30 transition-colors hover:border-white hover:bg-white"
              >
                <Share2 className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Хаах"
                className="team-focus hover:text-ink flex size-11 items-center justify-center border border-white/30 transition-colors hover:border-white hover:bg-white"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- plain full-bleed lightbox image */}
            <img
              key={active.src}
              src={active.src}
              alt={active.alt}
              className="view-swap max-h-[76vh] max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center gap-3 pb-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Өмнөх зураг"
              className="team-focus hover:text-ink flex size-11 items-center justify-center border border-white/30 text-white transition-colors hover:border-white hover:bg-white"
            >
              <ArrowLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Дараагийн зураг"
              className="team-focus hover:text-ink flex size-11 items-center justify-center border border-white/30 text-white transition-colors hover:border-white hover:bg-white"
            >
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
