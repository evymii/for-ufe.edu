"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Route-change motion: the outgoing page is unmounted instantly, the new
 * page fades in with an 8px upward rise over 240ms (`.page-enter`). The
 * header lives above this wrapper so it never re-animates between routes.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
