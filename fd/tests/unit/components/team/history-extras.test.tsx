import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { HistoryExtras } from "@/components/team/history-extras";

/**
 * The honour roll must never render empty: an unsaved history/honors blob
 * (null or empty array) falls back to the static defaults, and a saved
 * card with an image renders the photo behind the readable ink gradient.
 */

const baseProps = {
  aubl: { title: "AUBL", text: "Азийн лиг." },
  photosByFolder: {},
};

describe("HistoryExtras honour roll", () => {
  it("falls back to the static cards when no honors are passed", () => {
    render(<HistoryExtras {...baseProps} />);
    expect(
      screen.getByRole("heading", { level: 3, name: "Аварга" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(4);
  });

  it("falls back when the saved blob is an empty array", () => {
    render(<HistoryExtras {...baseProps} honors={[]} />);
    expect(screen.getAllByRole("article")).toHaveLength(4);
  });

  it("renders saved cards, with the photo only on cards that have one", () => {
    render(
      <HistoryExtras
        {...baseProps}
        honors={[
          {
            count: "9×",
            title: "Шинэ амжилт",
            years: "2026",
            image: "https://res.cloudinary.com/x/honour.jpg",
          },
          { count: "1×", title: "Хүрэл", years: "2024" },
        ]}
      />,
    );
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(2);
    expect(
      screen.getByRole("heading", { level: 3, name: "Шинэ амжилт" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Шинэ амжилт" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("img", { name: "Хүрэл" }),
    ).not.toBeInTheDocument();
  });
});
