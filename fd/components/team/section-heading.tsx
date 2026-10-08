import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/** Eyebrow + condensed H2, hairline underneath, optional "see all" link. */
export function SectionHeading({
  eyebrow,
  title,
  href,
  linkLabel = "Бүгдийг харах",
  className,
  children,
}: {
  eyebrow: string;
  title: string;
  href?: string;
  linkLabel?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("border-line mb-10 border-b pb-5", className)}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="font-display text-ink mt-2 text-[clamp(28px,4vw,40px)] leading-[1.15] font-semibold tracking-[0.02em] uppercase">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          {children}
          {href ? (
            <Link
              href={href}
              className="text-brand-2 hover:text-brand group flex min-h-11 items-center gap-1.5 text-sm font-semibold transition-colors"
            >
              {linkLabel}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
