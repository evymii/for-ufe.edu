import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";

import { PageHero } from "@/components/team/page-hero";
import { StaffCard, type RosterStaff } from "@/components/team/staff-card";
import { staff } from "@/content/site";
import { staffKey } from "@/lib/staff";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийн удирдлага — дасгалжуулагчид, багийн ахлагч.",
  title: "Удирдлага",
};

/**
 * Transparent cutouts live at public/images/staff/<staffKey>.png — dropping a
 * file in is enough (an explicit `photo` field on the profile always wins).
 */
function resolvePhoto(member: (typeof staff)[number]): null | string {
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

export default function ManagementPage() {
  const roster: RosterStaff[] = staff.map((member) => ({
    ...member,
    photo: resolvePhoto(member),
  }));
  const [headCoach, ...others] = roster;

  return (
    <>
      <PageHero breadcrumb="Удирдлага" title="Удирдлага" />

      <section className="bg-paper-soft">
        <div className="mx-auto w-full max-w-[1120px] px-4 py-[72px] sm:px-6 md:py-24">
          <div className="border-line mb-8 flex flex-wrap items-end justify-between gap-4 border-b pb-5">
            <div>
              <p className="eyebrow">Багийн удирдлага</p>
              <h2 className="font-display text-ink mt-1.5 text-xl font-semibold tracking-[0.02em] uppercase">
                Удирдлага
                <span className="text-mute ml-2 text-sm font-medium">
                  {roster.length}
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {headCoach ? <StaffCard member={headCoach} featured /> : null}
            {others.map((member) => (
              <StaffCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
