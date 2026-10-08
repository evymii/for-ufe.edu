import { describe, expect, it } from "vitest";

import { PageHeader } from "@/components/shared/page-header";
import { render, screen } from "@testing-library/react";

describe("PageHeader (shared component)", () => {
  it("renders title and description", () => {
    render(
      <PageHeader title="Dashboard" description="Everything at a glance." />,
    );

    expect(
      screen.getByRole("heading", { level: 1, name: "Dashboard" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Everything at a glance.")).toBeInTheDocument();
  });

  it("omits the description paragraph when not provided", () => {
    render(<PageHeader title="Users" />);

    expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
    expect(screen.queryByText(/./, { selector: "p" })).not.toBeInTheDocument();
  });

  it("renders the actions slot", () => {
    render(
      <PageHeader
        title="Settings"
        actions={<button type="button">Save</button>}
      />,
    );

    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });
});
