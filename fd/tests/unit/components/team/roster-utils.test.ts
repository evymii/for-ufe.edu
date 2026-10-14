import { describe, expect, it } from "vitest";

import { paginate } from "@/components/team/roster-utils";

/** The roster grid pages 15 players (3 rows × 5 columns) at a time. */
describe("paginate", () => {
  const numbers = (count: number) =>
    Array.from({ length: count }, (_, index) => index + 1);

  it("returns everything on a single page when the list fits", () => {
    const result = paginate(numbers(15), 1, 15);
    expect(result.totalPages).toBe(1);
    expect(result.items).toHaveLength(15);
  });

  it("splits 16 players into two pages, the second holding the remainder", () => {
    expect(paginate(numbers(16), 1, 15).items).toHaveLength(15);
    const second = paginate(numbers(16), 2, 15);
    expect(second.totalPages).toBe(2);
    expect(second.items).toEqual([16]);
  });

  it("keeps full pages for exact multiples", () => {
    const result = paginate(numbers(30), 2, 15);
    expect(result.totalPages).toBe(2);
    expect(result.items).toEqual(numbers(15).map((n) => n + 15));
  });

  it("clamps an out-of-range page back to the last page", () => {
    const result = paginate(numbers(18), 5, 15);
    expect(result.items).toEqual([16, 17, 18]);
  });

  it("handles the empty roster without pointing past the end", () => {
    const result = paginate([], 3, 15);
    expect(result.totalPages).toBe(1);
    expect(result.items).toEqual([]);
  });
});
