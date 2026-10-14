import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Editorial pill button — 44px high, 24px side padding, radius 999.
 * Variants: "solid" (ink), "outline" (hairline), "dark" (for ink surfaces:
 * white fill or white outline). Rendered as <Link> when `href` is set.
 */
export function TeamButton({
  variant = "solid",
  href,
  className,
  children,
  ...props
}: {
  variant?: "solid" | "outline" | "dark" | "dark-outline";
  href?: string;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentProps<"button">, "className" | "children">) {
  const styles = cn(
    "font-display inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-[0.06em] uppercase transition-colors team-focus",
    variant === "solid" && "bg-ink text-paper hover:bg-brand-2",
    variant === "outline" &&
      "border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-paper",
    variant === "dark" && "bg-paper text-ink hover:bg-mute hover:text-paper",
    variant === "dark-outline" &&
      "border border-paper text-paper hover:bg-paper hover:text-ink",
    className,
  );

  if (href !== undefined) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
}
