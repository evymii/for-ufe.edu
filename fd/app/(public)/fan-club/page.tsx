import type { Metadata } from "next";

import { FanClubShop } from "@/components/team/fan-club-shop";
import type { FanClubContent } from "@/components/team/fan-club-shop";
import { fanClubFallback } from "@/content/pages";
import { getPageCopy, getShopProducts } from "@/lib/content";

export const metadata: Metadata = {
  description:
    "СЭЗИС мерч — албан ёсны өмсгөл, хувцас, хэрэгсэл. FORZA үйлдвэрлэсэн бүтээгдэхүүн.",
  title: "Мерч",
};

export const revalidate = 60;

export default async function FanClubPage() {
  const [products, copy] = await Promise.all([
    getShopProducts(),
    getPageCopy("fan-club", "page"),
  ]);

  const content: FanClubContent = {
    cta: typeof copy?.cta === "string" ? copy.cta : fanClubFallback.cta,
    heroImage: typeof copy?.heroImage === "string" ? copy.heroImage : "",
    promos:
      Array.isArray(copy?.promos) &&
      copy.promos.every((p) => typeof p === "string")
        ? (copy.promos as string[])
        : fanClubFallback.promos,
    subtitle:
      typeof copy?.subtitle === "string"
        ? copy.subtitle
        : fanClubFallback.subtitle,
    title: typeof copy?.title === "string" ? copy.title : fanClubFallback.title,
  };

  return <FanClubShop products={products} content={content} />;
}
