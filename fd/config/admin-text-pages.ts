/**
 * Хуудасны текст — one admin route per editable copy page, mirroring the
 * CMS registry (components/admin/content/site-content/sections.ts). `key`
 * is both the /admin/text/[page] param and the site-content page key.
 */
export interface TextPageEntry {
  slug: string;
  label: string;
  description: string;
}

export const ADMIN_TEXT_PAGES: readonly TextPageEntry[] = [
  {
    slug: "home",
    label: "Нүүр",
    description:
      "Нүүр хуудасны текст — эхний дэлгэц, статистик, мэдээ, талархал.",
  },
  {
    slug: "history",
    label: "Түүх",
    description: "Түүхийн хуудасны бичвэрүүд — цаг хугацааны тууз.",
  },
  {
    slug: "players",
    label: "Тоглогчид",
    description: "Тоглогчдын хуудасны тайлбарууд.",
  },
  {
    slug: "fan-club",
    label: "Мерч",
    description: "Мерч / дэлгүүрийн хуудасны текстүүд.",
  },
  {
    slug: "contact",
    label: "Холбоо барих",
    description: "Хөлийн хэсэгт харагдах холбооны мэдээлэл.",
  },
  {
    slug: "heroes",
    label: "Толгой тайлбар",
    description:
      "Хуваарь, мэдээ, медиа, удирдлагын хуудаснуудын толгой тайлбарууд.",
  },
] as const;

export function findTextPage(slug: string): TextPageEntry | undefined {
  return ADMIN_TEXT_PAGES.find((page) => page.slug === slug);
}
