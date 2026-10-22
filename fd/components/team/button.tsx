import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Editorial pill button — 44px high, 24px side padding, radius 999.
 * Variants: "solid" (royal blue), "outline" (hairline), "dark" (for ink surfaces:
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
    variant === "solid" && "bg-brand text-brand-contrast hover:bg-brand-2",
    variant === "outline" && "border border-brand text-brand hover:bg-brand/10",
    variant === "dark" &&
      "bg-white text-[#05070b] hover:bg-mute hover:text-white",
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
