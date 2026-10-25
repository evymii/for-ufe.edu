"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Auto-advancing news carousel: the finished-games result and the MVP of
 *  the match lead, then the regular news grid rides as the last slide. */
const AUTOPLAY_MS = 6000;

function MatchResultSlide() {
  return (
    <article className="bg-ink relative flex h-full w-full shrink-0 flex-col justify-end overflow-hidden p-8 text-white">
      <Image
        src="/images/news/falcons-win.jpg"
        alt="Broncos Falcons-ын эсрэг тоглолтоос"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.82),rgba(0,0,0,.25)_55%,rgba(0,0,0,0))]"
      />
      <div className="relative z-10">
        <p className="text-[12px] font-semibold tracking-[0.12em] text-white/60 uppercase">
          Тоглолтын үр дүн
        </p>
        <h3 className="font-display mt-3 max-w-[720px] text-[clamp(26px,3.4vw,36px)] leading-[1.05] font-bold tracking-[0.02em] uppercase">
          Broncos beat Falcons
        </h3>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-display text-[clamp(36px,5vw,56px)] leading-none font-bold tabular-nums">
            77
            <span className="mx-3 text-white/35">—</span>
            60
          </span>
          <span className="text-[13px] font-semibold tracking-[0.1em] text-white/65 uppercase">
            СЭЗИС Broncos · NUM Falcons
          </span>
        </div>
        <p className="mt-4 text-[14px] leading-[1.6] text-white/70">
          Steppe Arena · 2026.10.24
        </p>
      </div>
    </article>
  );
}

function MvpSlide() {
  const stats = [
    { value: "22", label: "оноо" },
    { value: "8", label: "самбар" },
    { value: "2", label: "хаалт" },
    { value: "+21", label: "+/-" },
  ];
  return (
    <article className="bg-ink relative flex h-full w-full shrink-0 flex-col justify-end overflow-hidden p-8 text-white">
      <Image
        src="/images/news/mvp-enkhmend.jpg"
        alt="Энхмэнд тоглолтын үеэр"
        fill
        sizes="(min-width: 768px) 70vw, 100vw"
        className="object-cover object-[72%_50%]"
      />
      {/* Light bottom fade — just enough scrim for the white text to read
          over the illustration. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.55),rgba(0,0,0,0)_50%)]"
      />
      <div className="relative z-10 flex h-full flex-col">
        <h3 className="font-display text-[clamp(38px,5.5vw,68px)] leading-[0.92] font-bold tracking-[0.02em] uppercase">
          Player of
          <br />
          the Game
        </h3>
        <div className="mt-auto">
          <p className="text-[12px] font-semibold tracking-[0.12em] text-white/60 uppercase">
            Тоглолтын MVP
          </p>
          <p className="font-display mt-3 text-[clamp(26px,3.4vw,36px)] leading-[1.05] font-bold tracking-[0.02em] uppercase">
            #3 Энхмэнд
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-display block text-[clamp(28px,4vw,44px)] leading-none font-bold tabular-nums">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[11px] font-semibold tracking-[0.1em] text-white/60 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[14px] leading-[1.6] text-white/70">
            NUM Falcons эсрэг · 77—60
          </p>
        </div>
      </div>
    </article>
  );
}

export function NewsCarousel({
  label,
  featured,
  stack,
}: {
  label: string;
  featured: React.ReactNode;
  stack: React.ReactNode;
}) {
  const slides = ["Тоглолтын үр дүн", "Player of the Game", "Сүүлийн тоглолт"];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  // Live swipe state lives in a ref: per-frame transform updates go straight
  // to the DOM so the drag tracks the finger without re-rendering React.
  const swipe = useRef({
    startX: 0,
    startY: 0,
    dragging: false,
    horizontal: false,
  });

  const go = useCallback(
    (next: number) =>
      setIndex(((next % slides.length) + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, go]);

  // Touch swipe: lock onto the horizontal axis once the intent is clear so
  // vertical page scrolling still works (touch-pan-y on the viewport).
  const onTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    swipe.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      dragging: true,
      horizontal: false,
    };
  };

  const onTouchMove = (event: React.TouchEvent) => {
    const state = swipe.current;
    const track = trackRef.current;
    if (!state.dragging || !track) return;
    const touch = event.touches[0];
    const dx = touch.clientX - state.startX;
    const dy = touch.clientY - state.startY;
    if (!state.horizontal) {
      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
      state.horizontal = Math.abs(dx) > Math.abs(dy);
      if (!state.horizontal) {
        state.dragging = false;
        return;
      }
    }
    track.style.transition = "none";
    track.style.transform = `translateX(calc(-${index * 100}% + ${dx}px))`;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const state = swipe.current;
    const track = trackRef.current;
    if (!state.dragging || !track) return;
    state.dragging = false;
    if (!state.horizontal) return;
    const dx = event.changedTouches[0].clientX - state.startX;
    const width = track.parentElement?.clientWidth ?? 0;
    // Restore the CSS transition, then snap: animate from wherever the
    // finger left the track to the settled slide position.
    track.style.transition = "";
    const target =
      Math.abs(dx) > width * 0.15 ? (dx < 0 ? index + 1 : index - 1) : index;
    const clamped = ((target % slides.length) + slides.length) % slides.length;
    track.style.transform = `translateX(-${clamped * 100}%)`;
    setIndex(clamped);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="grid gap-6 md:grid-cols-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") go(index + 1);
        if (event.key === "ArrowLeft") go(index - 1);
      }}
    >
      <div className="relative h-[420px] touch-pan-y overflow-hidden md:col-span-8 md:h-[520px]">
        <div
          ref={trackRef}
          className="flex h-full items-stretch transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
        >
          <MatchResultSlide />
          <MvpSlide />
          <div
            aria-hidden={index !== 2}
            inert={index !== 2}
            className="h-full w-full shrink-0"
          >
            {featured}
          </div>
        </div>
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-2 shadow-sm backdrop-blur-sm">
          {slides.map((slideLabel, slideIndex) => (
            <button
              key={slideLabel}
              type="button"
              onClick={() => go(slideIndex)}
              aria-label={`${slideIndex + 1}-р слайд: ${slideLabel}`}
              aria-current={slideIndex === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                slideIndex === index
                  ? "w-5 bg-[#05070b]"
                  : "w-2 bg-[#05070b]/30 hover:bg-[#05070b]/60"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Өмнөх слайд"
          className="absolute top-1/2 left-3 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#05070b] shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Дараагийн слайд"
          className="absolute top-1/2 right-3 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#05070b] shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
      <div className="md:col-span-4">{stack}</div>
    </div>
  );
}
