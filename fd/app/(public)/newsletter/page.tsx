import type { Metadata } from "next";

import { NewsletterSignup } from "@/components/team/newsletter-signup";
import { newsletterFallback } from "@/content/pages";
import { getPageCopy } from "@/lib/content";
import type { NewsletterCopy } from "@/types/content";

export const metadata: Metadata = {
  description:
    "СЭЗИС Сагсан бөмбөгийн фэнэйд мэдээ — тоглолтын дүгнэлт, тасалбарын мэдээлэл имэйлээр.",
  title: "Фэнэйд мэдээ",
};

export const revalidate = 60;

const INTEREST_LABELS: Record<string, string> = {
  community: "Нийгмийн ажил",
  recaps: "Тоглолтын дүгнэлт",
  shop: "Дэлгүүр",
  tickets: "Тасалбар",
};

export default async function NewsletterPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const [copy, params] = await Promise.all([
    getPageCopy("newsletter", "page"),
    searchParams,
  ]);

  const merged: NewsletterCopy = {
    ...newsletterFallback,
    ...(typeof copy?.kicker === "string" ? { kicker: copy.kicker } : {}),
    ...(typeof copy?.title === "string" ? { title: copy.title } : {}),
    ...(typeof copy?.consent === "string" ? { consent: copy.consent } : {}),
    ...(typeof copy?.cta === "string" ? { cta: copy.cta } : {}),
    ...(Array.isArray(copy?.benefits) &&
    copy.benefits.every((b) => typeof b === "string")
      ? { benefits: copy.benefits as string[] }
      : {}),
    ...(Array.isArray(copy?.interests)
      ? {
          interests: (copy.interests as string[])
            .filter(
              (key): key is NewsletterCopy["interests"][number]["key"] =>
                key === "recaps" ||
                key === "tickets" ||
                key === "community" ||
                key === "shop",
            )
            .map((key) => ({ key, label: INTEREST_LABELS[key] ?? key })),
        }
      : {}),
  };

  return <NewsletterSignup copy={merged} initialEmail={params.email ?? ""} />;
}
