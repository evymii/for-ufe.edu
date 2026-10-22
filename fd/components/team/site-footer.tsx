import Image from "next/image";

import { siteConfig } from "@/config/site";
import type { ContactInfo } from "@/types/content";

/**
 * Minimal ink footer: small brand mark, a one-line contact row, the
 * ufe.edu.mn link and the copyright strip. No internal page links — the
 * header owns navigation. Contact details arrive as props from the public
 * layout (site-content contact/info over the static default).
 */
export function SiteFooter({ info }: { info: ContactInfo }) {
  return (
    <footer className="bg-ink text-white">
      <div className="team-shell space-y-5 py-10">
        <div className="flex items-center gap-2.5">
          <Image
            src="/ufe-logo.png"
            alt="UFE Broncos"
            width={32}
            height={32}
            className="size-8"
          />
          <p className="font-display text-sm font-bold tracking-[0.08em] uppercase">
            {siteConfig.shortName}
          </p>
        </div>

        <ul className="flex flex-col gap-1.5 text-[12px] text-white/40 sm:flex-row sm:flex-wrap sm:gap-x-6">
          <li>{info.address}</li>
          <li>{info.footerPhones.join(", ")}</li>
          <li>
            <a
              href={`mailto:${info.email}`}
              className="transition-colors hover:text-white/70"
            >
              {info.email}
            </a>
          </li>
          <li>
            <a
              href={info.webUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white/70"
            >
              {info.web}
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t border-white/10">
        <div className="team-shell flex flex-col items-start justify-between gap-1 py-4 text-[11px] tracking-[0.08em] text-white/30 uppercase sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}
          </p>
          <p>{siteConfig.university}</p>
        </div>
      </div>
    </footer>
  );
}
