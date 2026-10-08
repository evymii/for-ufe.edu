import type { Metadata } from "next";

import { PageHero } from "@/components/team/page-hero";
import { StaffCard } from "@/components/team/staff-card";
import { staff } from "@/content/site";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийн удирдлага — дасгалжуулагчид, багийн ахлагч.",
  title: "Удирдлага",
};

export default function ManagementPage() {
  const [headCoach, ...others] = staff;

  return (
    <>
      <PageHero breadcrumb="Удирдлага" title="Удирдлага" />

      <section className="bg-paper-soft">
        <div className="mx-auto w-full max-w-[1120px] px-4 py-[72px] sm:px-6 md:py-24">
          {headCoach ? <StaffCard member={headCoach} featured /> : null}

          {others.length > 0 ? (
            <div className="mt-4 grid items-start gap-4 md:grid-cols-2">
              {others.map((member) => (
                <StaffCard key={member.name} member={member} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
