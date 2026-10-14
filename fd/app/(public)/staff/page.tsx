import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";

import { PageHero } from "@/components/team/page-hero";
import { FrontOffice, type RosterStaff } from "@/components/team/front-office";
import { StaffSubnav } from "@/components/team/staff-subnav";
import { Reveal } from "@/components/team/reveal";
import { staff } from "@/content/site";
import { getStaff } from "@/lib/content";
import { staffKey } from "@/lib/staff";
import type { Executive } from "@/types/content";

export const revalidate = 60;

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийн удирдлага — дасгалжуулагчид, багийн ахлагч.",
  title: "Удирдлага",
};

/** Executive row (STAFF group) → the /staff card shape. */
function toRosterStaff(row: Executive): RosterStaff {
  return {
    bullets: row.bullets ?? [],
    intro: row.bio ?? "",
    name: row.name,
    photo: row.photo,
    role: row.title,
    sections: row.sections ?? undefined,
  };
}

/**
 * Transparent cutouts live at public/images/staff/<staffKey>.png — dropping a
 * file in is enough (an explicit `photo` field on the row always wins).
 */
function resolvePhoto(member: RosterStaff): null | string {
  if (member.photo) return member.photo;
  const key = staffKey(member.name);
  const file = path.join(
    process.cwd(),
    "public",
    "images",
    "staff",
    `${key}.png`,
  );
  return fs.existsSync(file) ? `/images/staff/${key}.png` : null;
}

export default async function ManagementPage() {
  const staffRows = await getStaff();

  const roster: RosterStaff[] = (
    staffRows.length > 0
      ? staffRows.map(toRosterStaff)
      : staff.map((member) => ({ ...member, photo: member.photo ?? null }))
  ).map((member) => ({ ...member, photo: resolvePhoto(member) }));

  return (
    <>
      <PageHero
        breadcrumb="Удирдлага"
        title="Удирдлага"
        subtitle="Шигшээ багийн дасгалжуулагчид, удирдлага, багийн ахлагч."
      />

      <StaffSubnav />

      <section id="coaching" className="bg-paper-soft scroll-mt-24">
        <div className="team-shell py-12 md:py-16">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-display text-ink text-[clamp(26px,3vw,32px)] font-bold tracking-[0.02em] uppercase">
                Багийн удирдлага
              </h2>
              <span className="text-mute text-[12px] font-semibold tracking-[0.12em] uppercase">
                {roster.length} гишүүн
              </span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <FrontOffice members={roster} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
