/** Team identity + public navigation — everything user-facing is Mongolian. */
export const siteConfig = {
  name: "СЭЗИС Сагсан бөмбөг",
  shortName: "СЭЗИС",
  fullName: "СЭЗИС-ийн сагсан бөмбөгийн шигшээ баг",
  title: "СЭЗИС Сагсан бөмбөгийн шигшээ баг",
  description:
    "1992 оноос эхтэй түүхтэй СЭЗИС-ийн Сагсан бөмбөгийн шигшээ баг. Бид зөвхөн тоглолтын оноо биш, багаар ажиллах соёл, тууштай хөдөлмөрлөх зан чанар, өөрийгөө болон хамтдаа хөгжих тэмүүллийг төлөвшүүлдэг.",
  headerSubtitle: "Сагсан бөмбөг",
  university: "Санхүү, эдийн засгийн их сургууль",
  latinName: "UFE BASKETBALL",
  foundedYear: 1992,
} as const;

export const publicNav = [
  { href: "/", label: "Нүүр" },
  { href: "/history", label: "Түүх" },
  { href: "/players", label: "Тоглогчид" },
  { href: "/front-office", label: "Удирдлага" },
  { href: "/schedule", label: "Хуваарь" },
  { href: "/photos", label: "Фото" },
  { href: "/videos", label: "Видео" },
  { href: "/fan-club", label: "Фэн клаб" },
] as const;

/** Secondary destinations surfaced in the footer instead of the header. */
export const secondaryNav = [
  { href: "/city-edition", label: "Хотын загвар" },
  { href: "/newsletter", label: "Фэнэйд мэдээ" },
  { href: "/contact", label: "Холбоо барих" },
] as const;
