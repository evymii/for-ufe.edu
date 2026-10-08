import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { BallMark } from "@/components/team/photo-slot";
import { publicNav, siteConfig } from "@/config/site";
import { contact } from "@/content/site";

/** Solid UFE-blue footer: brand + slogan, navigation, contact details. */
export function SiteFooter() {
  return (
    <footer className="bg-[#14338F] text-white">
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-12 md:py-16">
        <div className="space-y-4 md:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-white/12">
              <BallMark className="size-5" />
            </span>
            <div className="leading-none">
              <p className="font-display text-lg font-bold tracking-[0.04em] uppercase">
                {siteConfig.shortName}
              </p>
              <p className="text-[10px] font-medium tracking-[0.22em] text-white/70 uppercase">
                {siteConfig.headerSubtitle}
              </p>
            </div>
          </div>
          <p className="font-display max-w-sm text-lg font-semibold tracking-[0.02em] uppercase">
            “{contact.slogan}”
          </p>
        </div>

        <nav
          aria-label="Хөтчийн холбоосууд"
          className="space-y-3 md:col-span-3"
        >
          <p className="text-[11px] font-semibold tracking-[0.14em] text-white/60 uppercase">
            Хөтөч
          </p>
          {publicNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              <span className="font-display tracking-[0.06em] uppercase">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="space-y-3 md:col-span-4">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-white/60 uppercase">
            Холбоо барих
          </p>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-2.5">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-white/60"
                aria-hidden="true"
              />
              <span>{contact.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone
                className="mt-0.5 size-4 shrink-0 text-white/60"
                aria-hidden="true"
              />
              <span>{contact.footerPhones.join(", ")}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail
                className="mt-0.5 size-4 shrink-0 text-white/60"
                aria-hidden="true"
              />
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-white"
              >
                {contact.email}
              </a>
            </li>
          </ul>
          <Link
            href="/login"
            className="inline-block pt-2 text-xs tracking-[0.14em] text-white/60 uppercase transition-colors hover:text-white"
          >
            Админ → Нэвтрэх
          </Link>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}
          </p>
          <p className="font-display tracking-[0.28em] uppercase">
            {contact.web}
          </p>
        </div>
      </div>
    </footer>
  );
}
