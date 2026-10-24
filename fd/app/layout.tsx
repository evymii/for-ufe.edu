import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Oswald } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";
import { AuthProvider } from "@/providers/auth-provider";
import { QueryProvider } from "@/providers/query-provider";

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

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="mn"
      className={`${inter.variable} ${oswald.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <QueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </QueryProvider>
        <Analytics />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
