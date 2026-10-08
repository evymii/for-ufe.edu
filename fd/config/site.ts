/** Team identity + public navigation — everything user-facing is Mongolian. */
export const siteConfig = {
  name: "СЭЗИС Сагсан бөмбөг",
  shortName: "СЭЗИС",
  fullName: "СЭЗИС-ийн сагсан бөмбөгийн шигшээ баг",
  title: "СЭЗИС Сагсан бөмбөгийн шигшээ баг",
  description:
    "1992 оноос эхтэй түүхтэй СЭЗИС-ийн Сагсан бөмбөгийн шигшээ баг. Бид зөвхөн тоглолтын оноо биш, багаар ажиллах соёл, тууштай хөдөлмөрлөх зан чанар, өөрийгөө болон хамтдаа хөгжих тэмүүллийг төлөвшүүлдэг.",
  headerSubtitle: "Сагсан бөмбөгийн шигшээ баг",
  university: "Санхүү, эдийн засгийн их сургууль",
  latinName: "UFE BASKETBALL",
  foundedYear: 1992,
} as const;

export const publicNav = [
  { href: "/", label: "Нүүр" },
  { href: "/tuuh", label: "Түүх" },
  { href: "/toglogchid", label: "Тоглогчид" },
  { href: "/udirdlaga", label: "Удирдлага" },
  { href: "/holboo-barih", label: "Холбоо барих" },
] as const;
