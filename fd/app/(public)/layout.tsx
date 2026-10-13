import { SiteFooter } from "@/components/team/site-footer";
import { SiteHeader } from "@/components/team/site-header";
import { PageTransition } from "@/components/team/page-transition";

/**
 * Editorial shell for the public team site: skip link, sticky header
 * (utility bar + nav), page content with the 240ms rise-in transition
 * between routes, ink footer.
 */
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-paper text-ink flex min-h-svh flex-col font-sans antialiased">
      <a href="#content" className="skip-link">
        Агуулга руу алхах
      </a>
      <SiteHeader />
      <main id="content" className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <SiteFooter />
    </div>
  );
}
