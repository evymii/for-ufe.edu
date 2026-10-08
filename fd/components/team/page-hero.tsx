import Link from "next/link";

import { cn } from "@/lib/utils";

/** Quiet subpage header: breadcrumb eyebrow, H1, hairline bottom. */
export function PageHero({
  breadcrumb,
  title,
  subtitle,
  className,
}: {
  breadcrumb: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={cn("border-line bg-paper border-b", className)}>
      <div className="mx-auto w-full max-w-[1120px] px-4 py-12 sm:px-6 md:py-16">
        <nav
          aria-label="Breadcrumb"
          className="text-mute mb-3 flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] uppercase"
        >
          <Link href="/" className="hover:text-brand-2 transition-colors">
            Нүүр
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-brand-2">{breadcrumb}</span>
        </nav>
        <h1 className="text-brand font-display text-[clamp(38px,6vw,56px)] leading-[1.15] font-bold tracking-[0.02em] uppercase">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-mute mt-4 max-w-2xl text-base leading-[1.65]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
