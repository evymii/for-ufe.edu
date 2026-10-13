"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import { FilterPills } from "@/components/team/filter-pills";
import type { VideoRow } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * Video library: 560px featured player (direct mp4 or YouTube embed), title
 * 36px below, category chips and a 4-column grid of 296×166 thumbs with play
 * buttons and duration chips. Clicking a tile smooth-scrolls to the player
 * (400ms), crossfades the featured video (160ms) and updates the URL hash
 * without a reload.
 */

const CATEGORIES = [
  { value: "ALL", label: "Бүгд" },
  { value: "HIGHLIGHTS", label: "Онцлох" },
  { value: "INTERVIEWS", label: "Ярилцлага" },
  { value: "BEHIND_THE_SCENES", label: "Ар тал" },
  { value: "PRESS", label: "Хэвлэл" },
] as const;

type CategoryFilter = (typeof CATEGORIES)[number]["value"];

function formatDuration(seconds: number | null): string {
  if (seconds === null) return "";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function VideoLibrary({ videos }: { videos: VideoRow[] }) {
  const [category, setCategory] = useState<CategoryFilter>("ALL");
  const playerRef = useRef<HTMLDivElement>(null);
  // null = "not chosen yet" → falls back to the flagged video, then the first.
  const [featuredSlug, setFeaturedSlug] = useState<string | null>(null);

  const featured = useMemo(
    () =>
      videos.find((video) => video.slug === featuredSlug) ??
      videos.find((video) => video.isFeatured) ??
      videos[0] ??
      null,
    [videos, featuredSlug],
  );

  const filtered = videos.filter(
    (video) => category === "ALL" || video.category === category,
  );

  const selectVideo = (video: VideoRow) => {
    setFeaturedSlug(video.slug);
    // URL updates without a reload — deep-linkable featured video.
    window.history.replaceState(null, "", `#${video.slug}`);
    playerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="team-shell pb-16 md:pb-20">
      {/* Featured player */}
      <div ref={playerRef} className="mt-8 scroll-mt-24 md:scroll-mt-32">
        <div className="bg-ink relative aspect-video max-h-[560px] w-full overflow-hidden">
          {featured ? (
            <FeaturedFrame key={featured.slug} video={featured} />
          ) : null}
        </div>
        {featured ? (
          <h2 className="font-display text-ink mt-5 text-[clamp(26px,3.4vw,36px)] leading-tight font-bold tracking-[0.02em] uppercase">
            {featured.title}
          </h2>
        ) : null}
      </div>

      {/* Category chips */}
      <FilterPills
        className="mt-8"
        label="Ангилал"
        options={CATEGORIES.filter((option) =>
          option.value === "ALL"
            ? true
            : videos.some((video) => video.category === option.value),
        )}
        value={category}
        onChange={setCategory}
      />

      {/* Grid */}
      <div
        key={category}
        className="view-swap mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {filtered.map((video) => (
          <VideoTile
            key={video.id}
            video={video}
            active={video.slug === featuredSlug}
            onSelect={() => selectVideo(video)}
          />
        ))}
      </div>
    </div>
  );
}

/** Featured surface: mp4 → native player, YouTube → iframe, else poster. */
function FeaturedFrame({ video }: { video: VideoRow }) {
  if (video.videoUrl) {
    return (
      <video
        key={video.slug}
        src={video.videoUrl}
        poster={video.thumbnail ?? undefined}
        controls
        playsInline
        className="h-full w-full object-contain"
      />
    );
  }
  if (video.youtubeId) {
    return (
      <iframe
        key={video.slug}
        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    );
  }
  return (
    <div className="view-swap group relative h-full w-full">
      {video.thumbnail ? (
        <Image
          src={video.thumbnail}
          alt=""
          fill
          sizes="90vw"
          className="object-cover opacity-80"
        />
      ) : null}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white/70">
        <span className="bg-paper/10 flex size-16 items-center justify-center rounded-full border border-white/20">
          <Play
            className="size-7 translate-x-0.5 fill-current"
            aria-hidden="true"
          />
        </span>
        <p className="font-display text-sm tracking-[0.12em] uppercase">
          Видео удахгүй нэмэгдэнэ
        </p>
      </div>
    </div>
  );
}

function VideoTile({
  video,
  active,
  onSelect,
}: {
  video: VideoRow;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <article>
      <button
        type="button"
        onClick={onSelect}
        aria-label={`${video.title} тоглуулах`}
        className="team-focus block w-full text-left"
      >
        <div
          className={cn(
            "bg-paper-soft border-line relative aspect-[296/166] overflow-hidden border transition-colors",
            active && "border-ink",
          )}
        >
          {video.thumbnail ? (
            <Image
              src={video.thumbnail}
              alt=""
              fill
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover"
            />
          ) : (
            <span className="font-display text-mute/30 flex h-full items-center justify-center text-[13px] tracking-[0.12em] uppercase">
              {video.title.slice(0, 24)}
            </span>
          )}
          <span className="bg-ink text-paper absolute bottom-2 left-2 flex size-9 items-center justify-center rounded-full">
            <Play
              className="size-4 translate-x-px fill-current"
              aria-hidden="true"
            />
          </span>
          {video.durationSec ? (
            <span className="bg-ink text-paper absolute right-2 bottom-2 px-1.5 py-0.5 text-[11px] font-semibold">
              {formatDuration(video.durationSec)}
            </span>
          ) : null}
        </div>
        <h3 className="font-display text-ink mt-2.5 line-clamp-2 text-[20px] leading-[1.1] font-semibold tracking-[0.02em] uppercase">
          {video.title}
        </h3>
      </button>
    </article>
  );
}
