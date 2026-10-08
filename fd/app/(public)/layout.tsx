import { SiteFooter } from "@/components/team/site-footer";
import { SiteHeader } from "@/components/team/site-header";

/**
 * Light academic shell for the public team site: sticky header, content,
 * solid UFE-blue footer. All copy is static (content/site.ts).
 */
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-paper text-ink flex min-h-svh flex-col font-sans antialiased">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
