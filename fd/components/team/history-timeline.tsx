import type { TimelineEntry } from "@/content/site";

import { cn } from "@/lib/utils";

/**
 * Team history timeline. The 2025–2026 championship entry is marked
 * `highlightLabel` and renders with the gold treatment — the only gold
 * accent outside the hero badge.
 */
export function HistoryTimeline({
  entries,
}: {
  entries: readonly TimelineEntry[];
}) {
  return (
    <ol className="border-line relative ml-2 space-y-9 border-l-2 pl-7">
      {entries.map((entry) => {
        const highlight = Boolean(entry.highlightLabel);
        return (
          <li key={entry.period} className="relative">
            <span
              aria-hidden="true"
              className={cn(
                "absolute rounded-full",
                highlight
                  ? "bg-gold top-1 -left-[37px] size-3.5 ring-4 ring-[color:rgb(200_150_46/0.18)]"
                  : "bg-brand-2 ring-paper top-1.5 -left-[35px] size-2.5 ring-4",
              )}
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p
                className={cn(
                  "font-display text-xl font-bold tracking-[0.02em]",
                  highlight ? "text-gold" : "text-ink",
                )}
              >
                {entry.period}
              </p>
              {entry.highlightLabel ? (
                <span className="border-gold/40 text-gold rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-[0.12em] uppercase">
                  {entry.highlightLabel}
                </span>
              ) : null}
            </div>
            {entry.text ? (
              <p className="text-mute mt-1.5 max-w-xl text-sm leading-[1.65]">
                {entry.text}
              </p>
            ) : null}
            {entry.bullets ? (
              <ul className="mt-2 space-y-1.5">
                {entry.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-mute flex max-w-xl gap-2 text-sm leading-[1.65]"
                  >
                    <span
                      className="bg-brand-2/60 mt-2 size-1.5 shrink-0 rounded-full"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
