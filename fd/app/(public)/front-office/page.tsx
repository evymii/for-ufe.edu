import type { Metadata } from "next";

import { PageHero } from "@/components/team/page-hero";
import { Reveal } from "@/components/team/reveal";
import { FrontOfficeDirectory } from "@/components/team/front-office-directory";
import { frontOfficeHeroFallback } from "@/content/pages";
import { getExecutives, getPageCopy } from "@/lib/content";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийн удирдлага — эзэмшигчид, спортын алба, бизнес, дасгалжуулагчид.",
  title: "Удирдлага",
};

export const revalidate = 60;

export default async function FrontOfficePage() {
  const [members, heroCopy] = await Promise.all([
    getExecutives(),
    getPageCopy("front-office", "hero"),
  ]);
  const intro =
    (typeof heroCopy?.intro === "string" && heroCopy.intro) ||
    frontOfficeHeroFallback.intro;

  return (
    <>
      <PageHero breadcrumb="Удирдлага" subtitle={intro} title="Удирдлага" />
      <Reveal delay={60}>
        <FrontOfficeDirectory members={members} />
      </Reveal>
    </>
  );
}
