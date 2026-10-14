import type { Metadata } from "next";

import { Reveal } from "@/components/team/reveal";
import { PageHero } from "@/components/team/page-hero";
import { TeamButton } from "@/components/team/button";
import { routes } from "@/config/routes";
import { thanks } from "@/content/site";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийг дэмждэг ивээн тэтгэгч, хамтран ажиллагчид.",
  title: "Дэмжигчид",
};

export default function SponsorsPage() {
  const sponsors = thanks.sponsors.filter((sponsor) => sponsor !== "FORZA");

  return (
    <>
      <PageHero
        breadcrumb="Дэмжигчид"
        title="Бидний дэмжигчид"
        subtitle="Багийн амжилт, хөгжилд үнэтэй хувь нэмэр оруулж буй байгууллага, хамтрагчдадаа баярлалаа."
      />

      <section aria-labelledby="sponsors-heading" className="bg-paper">
        <div className="team-shell py-14 md:py-20">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">ХАМТЫН АМЖИЛТ</p>
                <h2
                  id="sponsors-heading"
                  className="font-display text-ink mt-2 text-[clamp(28px,4vw,40px)] leading-none font-bold tracking-[0.02em] uppercase"
                >
                  Ивээн тэтгэгч, хамтрагчид
                </h2>
              </div>
              <span className="text-mute text-[12px] font-semibold tracking-[0.12em] uppercase">
                {sponsors.length} байгууллага
              </span>
            </div>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((sponsor, index) => (
              <Reveal
                key={sponsor}
                as="li"
                delay={index * 60}
                className="border-line bg-paper-soft group hover:bg-ink flex min-h-40 items-end border p-6 transition-colors duration-200 hover:text-white"
              >
                <span className="font-display text-[clamp(22px,2.4vw,30px)] font-bold tracking-[0.04em] uppercase">
                  {sponsor}
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={240}>
            <div className="border-line bg-paper-soft mt-6 grid gap-8 border p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
              <div>
                <p className="eyebrow">
                  АЛБАН ЁСНЫ ӨМСГӨЛ, СПОРТ ХУВЦАСНЫ ҮЙЛДВЭРЛЭГЧ
                </p>
                <h3 className="font-display text-ink mt-3 text-[clamp(28px,4vw,40px)] leading-none font-bold tracking-[0.04em] uppercase">
                  FORZA
                </h3>
                <p className="text-mute mt-3 max-w-2xl text-sm leading-[1.7]">
                  Багийн өмсгөл болон спорт хувцасны албан ёсны үйлдвэрлэгч.
                </p>
              </div>
              <TeamButton variant="outline" href={routes.site.fanClub}>
                Фэн клаб дэлгүүр
              </TeamButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-line bg-paper-soft border-t">
        <div className="team-shell grid gap-8 py-14 md:grid-cols-[1fr_280px] md:items-center md:py-20">
          <Reveal>
            <p className="eyebrow">ТАЛАРХАЛ</p>
            <h2 className="font-display text-ink mt-3 text-[clamp(26px,3.5vw,36px)] leading-[1.05] font-bold tracking-[0.02em] uppercase">
              {thanks.heading}
            </h2>
            <p className="text-mute mt-4 max-w-3xl text-sm leading-[1.8]">
              {thanks.paragraphOne}
            </p>
            <p className="text-mute mt-3 max-w-3xl text-sm leading-[1.8]">
              {thanks.paragraphTwo}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div className="border-line bg-paper border p-6">
              <p className="eyebrow">ХАМТРАН АЖИЛЛАХ</p>
              <p className="text-mute mt-3 text-sm leading-[1.7]">
                Манай багтай хамтрах талаар бидэнтэй холбогдоно уу.
              </p>
              <TeamButton
                variant="outline"
                href={routes.site.contact}
                className="mt-5"
              >
                Холбоо барих
              </TeamButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
