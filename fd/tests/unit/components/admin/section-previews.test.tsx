import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { SectionPreview } from "@/components/admin/content/site-content/section-previews";
import { SITE_CONTENT_PAGES } from "@/components/admin/content/site-content/sections";

/**
 * The editor preview must be the real render: the honours section previews
 * its cards (photo included), no section ever renders an empty frame, and
 * the old "Шууд харагдац" header label is gone.
 */

const support = { newsItems: [], shopProducts: [], historyIntro: "" };

function findSection(id: string) {
  for (const page of SITE_CONTENT_PAGES) {
    const section = page.sections.find(
      (candidate) => `${candidate.page}/${candidate.section}` === id,
    );
    if (section) return section;
  }
  return undefined;
}

describe("SectionPreview", () => {
  it("previews honours cards with their uploaded image", () => {
    const def = findSection("history/honors")!;
    render(
      <SectionPreview
        def={def}
        data={{
          honors: [
            {
              count: "2×",
              title: "Аварга",
              years: "1992",
              image: "https://res.cloudinary.com/x/a.png",
            },
          ],
        }}
        support={support}
      />,
    );
    expect(
      screen.getByRole("heading", { level: 2, name: "Амжилтууд" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Аварга" })).toBeInTheDocument();
  });

  it("renders no frame at all for sections without a preview", () => {
    const def = findSection("history/honors")!;
    const { container } = render(
      <SectionPreview
        def={{ ...def, page: "nowhere", section: "blank" }}
        data={{}}
        support={support}
      />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("no longer shows the Шууд харагдац label", () => {
    const def = findSection("history/honors")!;
    render(<SectionPreview def={def} data={{}} support={support} />);
    expect(screen.queryByText("Шууд харагдац")).not.toBeInTheDocument();
  });
});
