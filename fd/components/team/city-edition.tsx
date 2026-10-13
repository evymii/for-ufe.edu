"use client";

import { useState } from "react";
import Image from "next/image";
import { BadgeCheck, Hash, Layers, Shield } from "lucide-react";

import { TeamButton } from "@/components/team/button";
import { Reveal } from "@/components/team/reveal";
import { ParallaxLayer } from "@/components/team/parallax";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";

/**
 * City edition page: 760px ink hero (96px title, 32px colorway swatches,
 * 520×620 jersey spotlight, 360px story column), two alternating story
 * chapters with 0.3× parallax images, four detail cards and a 240px shop
 * banner.
 */

const DETAIL_ICONS = [Layers, Shield, Hash, BadgeCheck];

export interface CityEditionContent {
  kicker: string;
  editionName: string;
  year: string;
  story: string;
  colorways: string[];
  colorwayNames: string[];
  jerseyImage: string;
  chapters: Array<{ title: string; text: string }>;
  chapterImages: string[];
  details: Array<{ title: string; text: string }>;
  shopTitle: string;
  shopButton: string;
}

export function CityEditionPage({ content }: { content: CityEditionContent }) {
  const [activeColorway, setActiveColorway] = useState(0);

  return (
    <>
      {/* Hero — 760px ink band */}
      <section className="bg-ink relative min-h-[560px] overflow-hidden text-white md:min-h-[760px]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 px-6 py-14 md:min-h-[760px] md:grid-cols-[1fr_420px_360px] md:gap-10 md:px-8 md:py-0 lg:grid-cols-[1fr_520px_360px]">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.12em] text-white/50 uppercase">
              {content.kicker}
            </p>
            <h1 className="font-display mt-2 text-[clamp(48px,8vw,96px)] leading-[0.9] font-bold tracking-[0.02em] uppercase">
              {content.editionName}
            </h1>
            <p className="text-mute mt-4 hidden text-[13px] font-semibold tracking-[0.12em] uppercase md:block">
              {content.year}
            </p>

            {/* Colorway swatches */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {content.colorways.map((color, index) => (
                <button
                  key={color + index}
                  type="button"
                  onClick={() => setActiveColorway(index)}
                  aria-pressed={activeColorway === index}
                  aria-label={
                    content.colorwayNames[index] ?? `Өнгө ${index + 1}`
                  }
                  className={cn(
                    "team-focus size-8 rounded-full border-2 transition-transform",
                    activeColorway === index
                      ? "scale-110 border-white"
                      : "border-white/60 hover:scale-105",
                  )}
                  style={{ backgroundColor: color }}
                />
              ))}
              <span className="text-[12px] font-semibold tracking-[0.12em] text-white/60 uppercase">
                {content.colorwayNames[activeColorway] ?? ""}
              </span>
            </div>
          </div>

          {/* Jersey spotlight */}
          <div className="relative order-first h-[380px] overflow-hidden md:order-none md:h-[620px]">
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 50% 42%, rgba(255,255,255,0.14), transparent 70%)",
              }}
            />
            {content.jerseyImage ? (
              <Image
                src={content.jerseyImage}
                alt={`${content.editionName} өмсгөл`}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-contain"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span
                  className="font-display block text-[clamp(80px,10vw,140px)] leading-none font-bold tracking-[0.06em] uppercase"
                  style={{
                    color: content.colorways[activeColorway],
                    textShadow: "0 0 48px rgba(255,255,255,0.18)",
                  }}
                >
                  УБ
                </span>
              </div>
            )}
          </div>

          {/* Story column */}
          <p className="max-w-[420px] text-[16px] leading-[1.6] text-[#D9D9D6]">
            {content.story}
          </p>
        </div>
      </section>

      {/* Story chapters — alternating, parallax image panels */}
      <div className="team-shell py-16 md:py-20">
        {content.chapters.map((chapter, index) => (
          <Reveal key={chapter.title} delay={40}>
            <section
              className={cn(
                "mb-12 grid min-h-[320px] items-center gap-8 md:mb-14 md:min-h-[420px] md:gap-12",
                index % 2 === 0
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 md:[&>*:first-child]:order-2",
              )}
            >
              <div className="bg-paper-soft border-line relative h-[300px] overflow-hidden border md:h-[420px]">
                {content.chapterImages[index] ? (
                  <ParallaxLayer speed={0.3} className="absolute inset-0">
                    <Image
                      src={content.chapterImages[index]}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 90vw"
                      className="object-cover"
                    />
                  </ParallaxLayer>
                ) : (
                  <span className="font-display text-mute/30 flex h-full items-center justify-center text-[13px] tracking-[0.12em] uppercase">
                    {chapter.title}
                  </span>
                )}
              </div>
              <div>
                <p className="eyebrow">Бүлэг {index + 1}</p>
                <h2 className="font-display text-ink mt-3 text-[clamp(30px,4vw,44px)] leading-[1.05] font-bold tracking-[0.02em] uppercase">
                  {chapter.title}
                </h2>
                <p className="text-mute mt-3 max-w-[520px] text-[16px] leading-[1.6]">
                  {chapter.text}
                </p>
              </div>
            </section>
          </Reveal>
        ))}

        {/* Detail cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.details.slice(0, 4).map((detail, index) => {
            const Icon = DETAIL_ICONS[index] ?? Layers;
            return (
              <Reveal key={detail.title} delay={index * 60}>
                <div className="border-line flex min-h-[200px] flex-col justify-between border p-6">
                  <span className="border-ink flex size-10 items-center justify-center rounded-full border-2">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-ink text-[24px] font-bold tracking-[0.02em] uppercase">
                      {detail.title}
                    </h3>
                    <p className="text-mute mt-1 text-[14px] leading-[1.5]">
                      {detail.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Shop banner */}
      <div className="team-shell pb-16 md:pb-20">
        <div className="bg-ink text-paper flex min-h-[240px] flex-col items-center justify-center gap-6 px-8 text-center md:flex-row md:justify-between md:px-12">
          <h2 className="font-display text-[clamp(30px,4.5vw,48px)] leading-none font-bold tracking-[0.02em] uppercase">
            {content.shopTitle}
          </h2>
          <TeamButton href={routes.site.fanClub} variant="dark">
            {content.shopButton}
          </TeamButton>
        </div>
      </div>
    </>
  );
}
