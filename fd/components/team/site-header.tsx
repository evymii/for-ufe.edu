"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";

import { BallMark } from "@/components/team/photo-slot";
import { routes } from "@/config/routes";
import { publicNav, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Sticky translucent header — 64px, hairline bottom border, blur. */
export function SiteHeader() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-line bg-paper/80 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center gap-6 px-4 sm:px-6">
        <Link
          href={routes.home}
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${siteConfig.name} — нүүр хуудас`}
        >
          <span className="bg-brand text-brand-contrast flex size-9 items-center justify-center rounded-lg">
            <BallMark className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-ink font-display text-lg font-bold tracking-[0.04em] uppercase">
              СЭЗИС
            </span>
            <span className="text-mute text-[10px] font-medium tracking-[0.22em] uppercase">
              {siteConfig.headerSubtitle}
            </span>
          </span>
        </Link>

        <nav
          aria-label="Үндсэн цэс"
          className="hidden flex-1 items-center justify-end gap-7 lg:flex"
        >
          {publicNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-display text-[0.82rem] font-semibold tracking-[0.08em] uppercase transition-colors",
                isActive(item.href)
                  ? "text-brand"
                  : "text-mute hover:text-brand",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-6">
          <button
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label={
              resolvedTheme === "dark" ? "Гэрэлт горим" : "Харанхуй горим"
            }
            className="text-mute hover:text-brand flex size-11 items-center justify-center rounded-lg transition-colors"
          >
            <Sun className="hidden size-5 dark:block" aria-hidden="true" />
            <Moon className="size-5 dark:hidden" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Цэс хаах" : "Цэс нээх"}
            aria-expanded={menuOpen}
            className="text-mute hover:text-brand flex size-11 items-center justify-center rounded-lg transition-colors lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen ? (
        <nav
          aria-label="Мобайл цэс"
          className="border-line bg-paper fixed inset-0 top-16 z-50 flex flex-col gap-1 overflow-y-auto border-t px-6 py-6 lg:hidden"
        >
          {publicNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "border-line font-display flex min-h-11 items-center border-b py-3 text-xl font-semibold tracking-[0.04em] uppercase transition-colors",
                isActive(item.href)
                  ? "text-brand"
                  : "text-ink hover:text-brand",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={routes.login}
            onClick={closeMenu}
            className="text-mute mt-2 flex min-h-11 items-center justify-center text-sm tracking-[0.14em] uppercase"
          >
            Нэвтрэх
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
