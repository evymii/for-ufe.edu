import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageContentEditor } from "@/components/admin/content/site-content/site-content-editor";
import { PageHeader } from "@/components/shared/page-header";
import { ADMIN_TEXT_PAGES, findTextPage } from "@/config/admin-text-pages";

export function generateStaticParams() {
  return ADMIN_TEXT_PAGES.map((page) => ({ page: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const entry = findTextPage(page);
  return { title: entry ? `Admin · ${entry.label} текст` : "Admin · Текст" };
}

export default async function AdminTextPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const entry = findTextPage(page);
  if (!entry) notFound();
  return (
    <div className="space-y-8">
      <PageHeader
        title={`${entry.label} — текст`}
        description={entry.description}
      />
      <PageContentEditor pageKey={entry.slug} />
    </div>
  );
}
