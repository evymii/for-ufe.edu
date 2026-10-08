import { cn } from "@/lib/utils";

/**
 * Minimal typographic placeholders that stand in until real CMS-managed
 * photos arrive (photo fields win whenever a URL is present). Deliberately
 * free of illustration: soft surfaces, hairlines and big faded type only.
 */

/** Team mark: a quiet basketball glyph for the logo lockup. */
export function BallMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 2.5v19M2.5 12h19" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M5.2 4.9c2.3 2 2.3 12.2 0 14.2M18.8 4.9c-2.3 2-2.3 12.2 0 14.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/** Player photo slot: soft surface with a large faded jersey number. */
export function PlayerSlot({
  name,
  number,
  photo,
  className,
}: {
  name: string;
  number: null | number;
  photo: null | string;
  className?: string;
}) {
  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- CMS-served URLs, arbitrary origin
      <img
        src={photo}
        alt={name}
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
      />
    );
  }
  return (
    <div
      className={cn(
        "bg-paper-soft relative flex h-full w-full items-center justify-center overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      <span className="text-brand/10 font-display pointer-events-none text-[7rem] leading-none font-bold select-none">
        {number ?? name.slice(-1)}
      </span>
      <span className="bg-line absolute inset-x-0 bottom-0 h-px" />
    </div>
  );
}
