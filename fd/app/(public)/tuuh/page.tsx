import type { Metadata } from "next";

import { HistoryTimeline } from "@/components/team/history-timeline";
import { PageHero } from "@/components/team/page-hero";
import { history, timeline } from "@/content/site";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийн түүх — 1992 оноос өнөөдрийг хүртэлх замнал, аваргын цолууд.",
  title: "Түүх",
};

export default function HistoryPage() {
  return (
    <>
      <PageHero
        breadcrumb="Түүх"
        subtitle={history.intro}
        title={history.title}
      />

      <section className="bg-paper-soft">
        <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-4 py-[72px] sm:px-6 md:py-24 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <p className="eyebrow">Замнал</p>
            <h2 className="font-display text-ink mt-2 text-[clamp(28px,4vw,40px)] leading-[1.15] font-semibold tracking-[0.02em] uppercase">
              Он жилүүдэд
            </h2>
          </div>
          <HistoryTimeline entries={timeline} />
        </div>
      </section>
    </>
  );
}
