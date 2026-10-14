"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { BallMark } from "@/components/team/photo-slot";
import { routes } from "@/config/routes";
import { publicNav, secondaryNav, siteConfig } from "@/config/site";
import type { ContactInfo } from "@/types/content";

/**
 * Ink footer: brand + newsletter mini-field, link columns, contact details
 * and a mute bottom row. The newsletter field hops to the /newsletter
 * signup page, where the real subscribe endpoint lives. Contact details
 * arrive as props from the public layout (site-content contact/info over
 * the static default).
 */
export function SiteFooter({ info }: { info: ContactInfo }) {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const subscribe = (event: FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    router.push(`${routes.site.newsletter}?email=${encodeURIComponent(email)}`);
  };

  const columns: Array<{
    heading: string;
    links: Array<{ label: string; href: string; external?: boolean }>;
  }> = [
    {
      heading: "Баг",
      links: publicNav
        .filter((item) => item.href !== "/")
        .map((item) => ({ label: item.label, href: item.href })),
    },
    {
      heading: "Дагах",
      links: secondaryNav.map((item) => ({
        label: item.label,
        href: item.href,
      })),
    },
    {
      heading: "Их сургууль",
      links: [
        { label: info.web, href: info.webUrl, external: true },
        { label: info.email, href: `mailto:${info.email}` },
      ],
    },
  ];

  return (
    <footer className="bg-ink text-white">
      <div className="team-shell grid gap-12 py-16 md:grid-cols-12 md:py-16">
        {/* Brand + newsletter */}
        <div className="space-y-6 md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-full bg-white/10">
              <BallMark className="size-6" />
            </span>
            <div className="leading-none">
              <p className="font-display text-xl font-bold tracking-[0.04em] uppercase">
                {siteConfig.shortName}
              </p>
              <p className="text-[10px] font-medium tracking-[0.22em] text-white/50 uppercase">
                {siteConfig.headerSubtitle}
              </p>
            </div>
          </div>
          <p className="font-display max-w-sm text-2xl leading-[1.2] font-semibold tracking-[0.02em] uppercase">
            “{info.slogan}”
          </p>
          <form onSubmit={subscribe} className="max-w-sm">
            <label
              htmlFor="footer-newsletter"
              className="text-[12px] font-semibold tracking-[0.12em] text-white/50 uppercase"
            >
              Багийн шинэ мэдээ
            </label>
            <div className="mt-2 flex h-12 items-center border border-white/25">
              <input
                id="footer-newsletter"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="имэйл хаяг"
                className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Бүртгүүлэх"
                className="font-display hover:text-ink flex h-full w-12 items-center justify-center transition-colors hover:bg-white"
              >
                <ArrowRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>

        {/* Link columns */}
        {columns.map((column) => (
          <nav
            key={column.heading}
            aria-label={column.heading}
            className="space-y-4 md:col-span-2"
          >
            <p className="text-[12px] font-semibold tracking-[0.12em] text-white/50 uppercase">
              {column.heading}
            </p>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display text-sm font-medium tracking-[0.06em] text-white/85 uppercase transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-display text-sm font-medium tracking-[0.06em] text-white/85 uppercase transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contact details */}
        <div className="space-y-4 border-t border-white/10 pt-6 md:col-span-12">
          <p className="text-[12px] font-semibold tracking-[0.12em] text-white/50 uppercase">
            Холбоо барих
          </p>
          <ul className="flex flex-col gap-3 text-sm leading-[1.6] text-white/85 sm:flex-row sm:flex-wrap sm:gap-x-10">
            <li>{info.address}</li>
            <li>{info.footerPhones.join(", ")}</li>
            <li>
              <a
                href={`mailto:${info.email}`}
                className="transition-colors hover:text-white"
              >
                {info.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="team-shell flex flex-col items-center justify-between gap-2 py-5 text-[12px] tracking-[0.08em] text-white/40 uppercase sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}
          </p>
          <p className="font-display tracking-[0.28em] uppercase">{info.web}</p>
        </div>
      </div>
    </footer>
  );
}
