import { cn } from "@/lib/utils";

/**
 * UFE wordmark: the stacked-bars mark + "UFE" lettering, drawn inline so it
 * inherits `currentColor` on any surface (white utility bar or navy header).
 */
export function UfeLogo({
  className,
  markOnly = false,
}: {
  className?: string;
  markOnly?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[1.4em] w-[1.4em] shrink-0"
        fill="none"
      >
        <rect x="3" y="4" width="18" height="3.2" rx="1" fill="currentColor" />
        <rect
          x="3"
          y="10.4"
          width="18"
          height="3.2"
          rx="1"
          fill="currentColor"
        />
        <rect
          x="3"
          y="16.8"
          width="12"
          height="3.2"
          rx="1"
          fill="currentColor"
        />
      </svg>
      {markOnly ? null : (
        <span className="text-[1.35em] leading-none font-black tracking-tight">
          UFE
        </span>
      )}
    </span>
  );
}
