import type { Metadata } from "next";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/team/page-hero";
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
        <div className="mx-auto w-full max-w-[1120px] px-4 py-[72px] sm:px-6 md:py-24">
          <div className="grid gap-4 sm:grid-cols-3">
            {cards.map((card) => {
              const content = (
                <>
                  <card.icon
                    className="text-brand-2 size-5"
                    aria-hidden="true"
                  />
                  <p className="text-mute mt-3 text-[11px] font-semibold tracking-[0.14em] uppercase">
                    {card.label}
                  </p>
                  <p className="text-ink mt-1 text-sm leading-[1.65] font-medium">
                    {card.value}
                  </p>
                </>
              );
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="border-line bg-paper shadow-card card-lift rounded-xl border p-5"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={card.label}
                  className="border-line bg-paper shadow-card rounded-xl border p-5"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="border-line bg-paper shadow-card mt-4 rounded-xl border p-6 md:p-8">
            <p className="text-brand-2 flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] uppercase">
              <Phone className="size-4" aria-hidden="true" />
              Утас
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="text-brand font-display hover:text-brand-2 text-xl font-bold tracking-[0.04em] transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
            <p className="border-gold text-gold font-display mt-8 inline-block rounded-full border px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.14em] uppercase">
              СЭЗИС · «{contact.slogan}»
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
