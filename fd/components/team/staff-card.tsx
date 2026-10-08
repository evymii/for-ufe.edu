import type { StaffProfile } from "@/content/site";

/**
 * Staff profile card: name + role header, intro, optional honour bullets and
 * structured sections (heading + text / list). The head coach gets the
 * champion treatment — a gold border.
 */
export function StaffCard({
  member,
  featured = false,
}: {
  member: StaffProfile;
  featured?: boolean;
}) {
  return (
    <article
      className={`border-line bg-paper shadow-card rounded-xl border p-6 md:p-8 ${
        featured ? "border-gold" : ""
      }`}
    >
      <p className="eyebrow">{member.role}</p>
      <h3 className="font-display text-ink mt-2 text-[clamp(22px,3vw,28px)] leading-[1.2] font-semibold tracking-[0.02em] uppercase">
        {member.name}
      </h3>

      {member.intro ? (
        <p className="border-brand-2 text-mute mt-4 border-l-2 pl-4 text-sm leading-[1.75]">
          {member.intro}
        </p>
      ) : null}

      {member.bullets ? (
        <ul className="mt-5 space-y-2">
          {member.bullets.map((bullet) => (
            <li
              key={bullet}
              className="text-mute flex gap-2.5 text-sm leading-[1.65]"
            >
              <span
                className={featured ? "bg-gold" : "bg-brand-2/60"}
                aria-hidden="true"
                style={{
                  marginTop: 8,
                  height: 6,
                  width: 6,
                  borderRadius: 999,
                  flexShrink: 0,
                }}
              />
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}

      {member.sections ? (
        <div className="border-line mt-6 space-y-6 border-t pt-6">
          {member.sections.map((section) => (
            <section key={section.heading}>
              <h4 className="text-ink font-display text-[15px] font-semibold tracking-[0.06em] uppercase">
                {section.heading}
              </h4>
              {section.text ? (
                <p className="text-mute mt-2 text-sm leading-[1.75]">
                  {section.text}
                </p>
              ) : null}
              {section.list ? (
                <ul className="mt-2.5 space-y-1.5">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="text-mute flex max-w-2xl gap-2 text-sm leading-[1.65]"
                    >
                      <span
                        className="bg-brand-2/60 mt-2 size-1.5 shrink-0 rounded-full"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      ) : null}
    </article>
  );
}
