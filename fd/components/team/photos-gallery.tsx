"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { FilterPills } from "@/components/team/filter-pills";
import type { AlbumImage, MediaAlbumRow } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * Photo gallery: category pills, 3-column album grid (392×236 covers with a
 * photo-count chip), a Load more button, and a lightbox — opens with a
 * 240ms scale .96→1, arrow keys + swipe navigation, 72px thumbnail strip.
 */

const PAGE_SIZE = 6;

const CATEGORIES = [
  { value: "ALL", label: "Бүгд" },
  { value: "GAMES", label: "Тоглолт" },
  { value: "COMMUNITY", label: "Нийгмийн" },
  { value: "EVENTS", label: "Арга хэмжээ" },
] as const;

type CategoryFilter = (typeof CATEGORIES)[number]["value"];

/** Placeholder frames stand in while an album has no uploaded images yet. */
function albumFrames(album: MediaAlbumRow): AlbumImage[] {
  if (album.images.length > 0) return album.images;
  return Array.from({ length: 8 }, (_, index) => ({
    caption: `${album.title} — кадр ${index + 1}`,
    url: "",
  }));
}

export function PhotosGallery({ albums }: { albums: MediaAlbumRow[] }) {
  const [category, setCategory] = useState<CategoryFilter>("ALL");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [openAlbum, setOpenAlbum] = useState<MediaAlbumRow | null>(null);

  const filtered = albums.filter(
    (album) => category === "ALL" || album.category === category,
  );
  const shown = filtered.slice(0, visible);

  return (
    <div className="team-shell pb-16 md:pb-20">
      <FilterPills
        className="mt-6"
        label="Ангилал"
        options={CATEGORIES.filter((option) =>
          option.value === "ALL"
            ? true
            : albums.some((album) => album.category === option.value),
        )}
        value={category}
        onChange={(value) => {
          setCategory(value);
          setVisible(PAGE_SIZE);
        }}
      />

      <div
        key={category}
        className="view-swap mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {shown.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            onOpen={() => setOpenAlbum(album)}
          />
        ))}
      </div>

      {visible < filtered.length ? (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setVisible((count) => count + PAGE_SIZE)}
            className="font-display team-focus hover:bg-ink/5 border-ink text-ink inline-flex h-12 items-center rounded-full border px-8 text-sm font-semibold tracking-[0.06em] uppercase transition-colors"
          >
            Дэлгэрэнгүй ачаалах
          </button>
        </div>
      ) : null}

      {openAlbum ? (
        <Lightbox album={openAlbum} onClose={() => setOpenAlbum(null)} />
      ) : null}
    </div>
  );
}

function AlbumCard({
  album,
  onOpen,
}: {
  album: MediaAlbumRow;
  onOpen: () => void;
}) {
  const count = album.images.length > 0 ? album.images.length : 8;
  const date = album.eventDate
    ? new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
        .format(new Date(album.eventDate))
        .toUpperCase()
    : "";

  return (
    <article>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${album.title} галерей нээх`}
        className="team-focus block w-full text-left"
      >
        <div className="bg-paper-soft border-line relative aspect-[392/236] overflow-hidden border">
          {album.coverImage ? (
            <Image
              src={album.coverImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover"
            />
          ) : (
            <span className="font-display text-mute/40 flex h-full items-center justify-center text-sm tracking-[0.12em] uppercase">
              {album.title}
            </span>
          )}
          <span className="bg-ink text-paper absolute right-2 bottom-2 px-2 py-0.5 text-[11px] font-semibold tracking-[0.06em]">
            {count} фото
          </span>
        </div>
        {date ? (
          <span className="text-mute mt-3 block text-[12px] font-semibold tracking-[0.12em] uppercase">
            {date}
          </span>
        ) : null}
        <h3 className="font-display text-ink mt-1 text-[24px] leading-tight font-bold tracking-[0.02em] uppercase">
          {album.title}
        </h3>
      </button>
    </article>
  );
}

/** Lightbox: ink backdrop, counter, actions, main frame, thumb strip.
 *  Exported for reuse by the combined media board. */
export function Lightbox({
  album,
  onClose,
}: {
  album: MediaAlbumRow | null;
  onClose: () => void;
}) {
  const frames = album ? albumFrames(album) : [];
  // Mounted only while an album is open, so useState initializers run fresh.
  const [index, setIndex] = useState(0);
  const [entered, setEntered] = useState(false);
  const open = album !== null;

  // Entrance scale (.96→1), body scroll lock, keyboard + swipe navigation.
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => setEntered(true), 10);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const touchStartX = { current: 0 };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setIndex((i) => (i + 1) % frames.length);
      if (event.key === "ArrowLeft")
        setIndex((i) => (i - 1 + frames.length) % frames.length);
    };
    const onTouchStart = (event: TouchEvent) => {
      touchStartX.current = event.touches[0]?.clientX ?? 0;
    };
    const onTouchEnd = (event: TouchEvent) => {
      const delta =
        (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
      if (Math.abs(delta) < 48) return;
      if (delta < 0) setIndex((i) => (i + 1) % frames.length);
      else setIndex((i) => (i - 1 + frames.length) % frames.length);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- frames derive from album
  }, [open, album]);

  const step = useCallback(
    (direction: 1 | -1) =>
      setIndex((i) => (i + direction + frames.length) % frames.length),
    [frames.length],
  );

  if (!open) return null;
  const frame = frames[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={album ? `${album.title} галерей` : "Галерей"}
      className="fixed inset-0 z-50 flex flex-col bg-[#0B0B0C]/95"
    >
      {/* Top bar: counter + actions */}
      <div className="flex items-center justify-between px-6 py-4 text-white">
        <span className="font-display text-xl font-semibold">
          {index + 1} / {frames.length}
        </span>
        <div className="flex items-center gap-4 text-[13px] tracking-[0.06em] uppercase">
          {frame?.url ? (
            <a
              href={frame.url}
              download
              target="_blank"
              rel="noreferrer"
              className="team-focus transition-opacity hover:opacity-70"
            >
              Татах
            </a>
          ) : null}
          <span aria-hidden="true" className="text-white/40">
            ·
          </span>
          <span className="text-white/60">Хуваалцах</span>
          <button
            type="button"
            onClick={onClose}
            data-lb-close
            aria-label="Галерей хаах"
            className="team-focus flex size-11 items-center justify-center transition-opacity hover:opacity-70"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Main frame */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Өмнөх зураг"
          className="team-focus absolute left-2 z-10 flex size-12 items-center justify-center text-white/80 transition-colors hover:text-white"
        >
          <ChevronLeft className="size-8" aria-hidden="true" />
        </button>
        <div
          className={cn(
            "relative h-full max-h-[90vh] w-full max-w-[760px] transition-transform duration-[240ms] ease-out",
            entered ? "scale-100" : "scale-[0.96]",
          )}
        >
          {frame?.url ? (
            <Image
              src={frame.url}
              alt={frame.caption ?? album?.title ?? ""}
              fill
              sizes="90vw"
              className="object-contain"
            />
          ) : (
            <div className="bg-paper-soft/10 flex h-full w-full items-center justify-center border border-white/10">
              <span className="font-display px-8 text-center text-lg tracking-[0.12em] text-white/30 uppercase">
                {frame?.caption ?? "Зураг"}
              </span>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Дараагийн зураг"
          className="team-focus absolute right-2 z-10 flex size-12 items-center justify-center text-white/80 transition-colors hover:text-white"
        >
          <ChevronRight className="size-8" aria-hidden="true" />
        </button>
      </div>

      {/* Caption + thumbnail strip */}
      <div className="pb-3">
        {frame?.caption ? (
          <p className="text-center text-[13px] text-white/70">
            {frame.caption}
          </p>
        ) : null}
        <div className="no-scrollbar mt-2 flex justify-center gap-2 overflow-x-auto px-4">
          {frames.map((item, i) => (
            <button
              key={`${item.url}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Зураг ${i + 1}`}
              tabIndex={i === index ? 0 : -1}
              className={cn(
                "h-14 w-[72px] shrink-0 overflow-hidden border transition-opacity",
                i === index
                  ? "border-white opacity-100"
                  : "border-transparent opacity-50",
              )}
            >
              {item.url ? (
                <Image
                  src={item.url}
                  alt=""
                  width={72}
                  height={56}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="block h-full w-full bg-white/10" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
