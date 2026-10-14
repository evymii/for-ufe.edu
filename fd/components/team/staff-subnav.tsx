"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "coaching", label: "Дасгалжуулагчид" },
  { id: "directory", label: "Жагсаалт" },
] as const;

/**
 * Sticky 48px sub-nav with scroll-spy: the ink underline follows whichever
 * section owns the viewport middle.
 */
export function StaffSubnav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const mark = window.scrollY + window.innerHeight * 0.4;
      let current: string = SECTIONS[0].id;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= mark) {
          current = section.id;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav
      aria-label="Удирдлагын хэсгүүд"
      className="border-line bg-paper sticky top-[72px] z-30 border-b"
    >
      <div className="team-shell flex h-12 items-center gap-8 overflow-x-auto">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={active === section.id ? "true" : undefined}
            className={cn(
              "font-display flex h-12 shrink-0 items-center border-b-2 text-[15px] font-semibold tracking-[0.06em] uppercase transition-colors",
              active === section.id
                ? "border-accent-blue text-accent-blue"
                : "text-mute hover:text-ink border-transparent",
            )}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
