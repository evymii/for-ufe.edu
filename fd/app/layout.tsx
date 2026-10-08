import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Oswald } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";
import { AuthProvider } from "@/providers/auth-provider";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";

/* Body font with full Cyrillic coverage; Oswald drives the condensed
   display/uppercase system of the team site. */
const inter = Inter({
  variable: "--font-sans",
  subsets: ["cyrillic", "latin"],
});

const oswald = Oswald({
  variable: "--font-team-display",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Inter({
  variable: "--font-geist-mono",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

const SESSION_COOKIE = "uf_session";

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // Server-side session hint so AuthProvider only attempts a silent refresh
  // when the API actually left an httpOnly session cookie.
  const cookieStore = await cookies();
  const hasSession = cookieStore.has(SESSION_COOKIE);

  return (
    <html
      lang="mn"
      suppressHydrationWarning
      className={`${inter.variable} ${oswald.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <AuthProvider hasSession={hasSession}>{children}</AuthProvider>
          </QueryProvider>
        </ThemeProvider>
        <Toaster theme="dark" position="top-right" />
      </body>
    </html>
  );
}
