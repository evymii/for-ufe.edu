"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Menu, UserCircle } from "lucide-react";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site";
import { userNav } from "@/config/nav";
import { routes } from "@/config/routes";
import { useAuth } from "@/providers/auth-provider";

/** Top navigation shell for the authenticated user area. */
export function UserShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-svh flex-col">
      <header className="border-border/40 bg-background/95 sticky top-0 z-10 border-b backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-6">
            <Link
              href={routes.user.dashboard}
              className="font-semibold tracking-tight"
            >
              {siteConfig.name}
            </Link>
            <nav
              aria-label="User"
              className="hidden items-center gap-1 sm:flex"
            >
              {userNav.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "bg-muted text-foreground rounded-md px-3 py-1.5 text-sm font-medium"
                        : "text-muted-foreground hover:text-foreground rounded-md px-3 py-1.5 text-sm transition-colors"
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Account menu">
                  <UserCircle className="size-5" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                  <span className="truncate">{user?.name ?? "Account"}</span>
                  <span className="text-muted-foreground truncate text-xs font-normal">
                    {user?.email}
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  variant="destructive"
                  onSelect={() => {
                    void logout();
                  }}
                >
                  <LogOut aria-hidden="true" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* Mobile nav */}
        <nav
          aria-label="User mobile"
          className="flex items-center gap-1 overflow-x-auto border-t px-4 py-2 sm:hidden"
        >
          <Menu
            className="text-muted-foreground mr-1 size-4 shrink-0"
            aria-hidden="true"
          />
          {userNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "bg-muted text-foreground shrink-0 rounded-md px-3 py-1.5 text-sm font-medium"
                    : "text-muted-foreground shrink-0 rounded-md px-3 py-1.5 text-sm"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        {children}
      </main>
    </div>
  );
}
