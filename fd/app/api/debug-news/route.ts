import { getNews } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  const rows = await getNews({ limit: 12 });
  return Response.json({
    count: rows.length,
    titles: rows.map(
      (r) => `${r.title} | feat:${r.isFeatured} | ${r.publishedAt}`,
    ),
  });
}
