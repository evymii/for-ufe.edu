import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Subpage header band (200px mist): breadcrumb kicker, 72px condensed H1,
 * optional intro line and controls (dropdowns / toggles) bottom-right.
 */
export function PageHero({
  breadcrumb,
  title,
  subtitle,
  controls,
  className,
}: {
  breadcrumb: string;
  title: string;
  subtitle?: string;
  /** Right-aligned control cluster rendered at the band's baseline. */
  controls?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("border-line bg-paper-soft border-b", className)}>
      <div className="team-shell flex min-h-[160px] flex-wrap items-end justify-between gap-6 py-10 md:min-h-[200px]">
        <div>
          <nav
            aria-label="Breadcrumb"
            className="text-mute mb-3 flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] uppercase"
          >
            <Link href="/" className="hover:text-ink transition-colors">
              Нүүр
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">{breadcrumb}</span>
          </nav>
          <h1 className="font-display text-ink text-[clamp(44px,7vw,72px)] leading-[0.95] font-bold tracking-[0.02em] uppercase">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-mute mt-3 max-w-2xl text-[15px] leading-[1.6]">
              {subtitle}
            </p>
          ) : null}
        </div>
        {controls ? <div className="pb-1">{controls}</div> : null}
      </div>
    </section>
  );
}
