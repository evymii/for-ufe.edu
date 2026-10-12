import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { HistoryExperience } from "@/components/team/history-experience";
import { history } from "@/content/site";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийн түүх — 1992 оноос өнөөдрийг хүртэлх замнал, аваргын цолууд.",
  title: "Түүх",
};

/** Season-celebration style history page: dark hero, then the sticky
 *  year rail + scrollable era sections rendered by HistoryExperience. */
export default function HistoryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#14338F] text-white">
        <p
          aria-hidden="true"
          className="font-display pointer-events-none absolute right-4 bottom-6 hidden text-[clamp(64px,10vw,150px)] leading-none font-bold tracking-[0.02em] text-transparent select-none [-webkit-text-stroke:2px_rgba(255,255,255,0.15)] sm:block"
        >
          1992–2026
        </p>
        <div className="relative mx-auto w-full max-w-[1120px] px-4 py-16 sm:px-6 md:py-24">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-white/60 uppercase"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Нүүр
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-gold">Түүх</span>
          </nav>
          <h1 className="font-display text-[clamp(48px,9vw,96px)] leading-[1] font-bold tracking-[0.02em] uppercase">
            Түүх
          </h1>
          <p className="font-display mt-2 text-[clamp(18px,3vw,28px)] font-semibold tracking-[0.04em] text-white/85 uppercase">
            1992 оноос өнөөдрийг хүртэл
          </p>
          <p className="mt-6 max-w-2xl text-base leading-[1.75] text-white/80">
            {history.intro}
          </p>
          <div
            aria-hidden="true"
            className="mt-10 hidden items-center gap-2 text-sm font-medium tracking-[0.14em] text-white/60 uppercase md:flex"
          >
            <ChevronDown className="animate-bounce" />
            Доош гүйлгэх
          </div>
        </div>
      </section>

      <HistoryExperience />
    </>
  );
}
