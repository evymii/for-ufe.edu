import type { Metadata } from "next";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/team/page-hero";
import { Reveal } from "@/components/team/reveal";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багтай холбоо барих — хаяг, утас, имэйл, вэб.",
  title: "Холбоо барих",
};

export default function ContactPage() {
  const cards = [
    {
      icon: MapPin,
      label: "Хаяг",
      value: contact.address,
    },
    {
      icon: Mail,
      label: "Имэйл",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Globe,
      label: "Вэб",
      value: contact.web,
      href: contact.webUrl,
    },
  ];

  return (
    <>
      <PageHero breadcrumb="Холбоо барих" title="Холбоо барих" />

      <section className="bg-paper-soft">
        <div className="team-shell py-16 md:py-24">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {cards.map((card) => {
                const content = (
                  <>
                    <card.icon className="text-ink size-5" aria-hidden="true" />
                    <p className="text-mute mt-4 text-[11px] font-semibold tracking-[0.14em] uppercase">
                      {card.label}
                    </p>
                    <p className="text-ink mt-1.5 text-sm leading-[1.65] font-medium">
                      {card.value}
                    </p>
                  </>
                );
                return card.href ? (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      card.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="border-line bg-paper card-lift team-focus border p-6"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={card.label}
                    className="border-line bg-paper card-lift border p-6"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="border-line bg-paper mt-6 border p-6 md:p-8">
              <p className="text-ink flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] uppercase">
                <Phone className="size-4" aria-hidden="true" />
                Утас
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone}`}
                      className="font-display text-ink team-focus hover:text-mute text-[clamp(20px,2.4vw,28px)] font-bold tracking-[0.04em] uppercase transition-colors"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="border-ink text-ink font-display mt-8 inline-block border px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.14em] uppercase">
                СЭЗИС · «{contact.slogan}»
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
