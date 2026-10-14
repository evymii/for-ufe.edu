import {
  expect,
  request,
  test,
  type APIRequestContext,
} from "@playwright/test";

/**
 * /players roster rules against the real backend:
 *   - players only (a COACH row never appears; no coaches sidebar)
 *   - 15 per page (3×5 grid) with pagination when the roster is larger
 *
 * The roster is seeded through the admin API with unique slugs. Cleanup runs
 * in afterAll — a timed-out test body aborts its own finally, but afterAll
 * still runs, so e2e rows never leak into the dev database. The seed also
 * sweeps any rows a previously killed run may have left behind.
 */

const STAFF_PASSWORD = process.env.STAFF_PASSWORD ?? "9876";
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4010";
const FRONTEND_URL = process.env.FRONTEND_BASE_URL ?? "http://localhost:3000";
const RUN = Date.now();

let seeded: { bearer: string; ids: string[] } | null = null;

async function adminBearer(): Promise<string> {
  const api = await request.newContext();
  const login = await api.post(`${API_URL}/api/v1/user/auth/login`, {
    data: { identifier: "manager", password: STAFF_PASSWORD },
  });
  const { accessToken } = (
    (await login.json()) as { data: { accessToken: string } }
  ).data;
  await api.dispose();
  return `Bearer ${accessToken}`;
}

/** Deletes every leftover e2e-roster-* row (from this or a killed run). */
async function sweepE2ePlayers(api: APIRequestContext, bearer: string) {
  const list = await api.get(`${API_URL}/api/v1/content/players`, {
    headers: { Authorization: bearer },
  });
  const items = (
    (await list.json()) as {
      data: { items: Array<{ id: string; slug: string }> };
    }
  ).data.items;
  for (const row of items) {
    if (row.slug.startsWith("e2e-roster-")) {
      await api.delete(`${API_URL}/api/v1/content/players/${row.id}`, {
        headers: { Authorization: bearer },
      });
    }
  }
}

/** 18 players (two pages) + 1 coach that must never appear on /players. */
async function seedRoster() {
  const bearer = await adminBearer();
  const api = await request.newContext();
  await sweepE2ePlayers(api, bearer);

  const ids: string[] = [];
  const create = async (payload: Record<string, unknown>) => {
    const res = await api.post(`${API_URL}/api/v1/content/players`, {
      data: payload,
      headers: { Authorization: bearer },
    });
    ids.push(
      ((await res.json()) as { data: { player: { id: string } } }).data.player
        .id,
    );
  };

  for (let index = 1; index <= 18; index += 1) {
    await create({
      name: `E2E Тоглогч ${RUN} №${index}`,
      // Jersey numbers must be ≤ 99; 61–78 sit above a typical real roster.
      number: 60 + index,
      position: "Guard",
      role: "PLAYER",
      slug: `e2e-roster-${RUN}-${index}`,
    });
  }
  await create({
    name: `E2E Дасгалжуулагч ${RUN}`,
    role: "COACH",
    slug: `e2e-roster-coach-${RUN}`,
  });

  // Seeding bypassed the admin UI, so purge the public players cache
  // through the revalidation bridge exactly like a save would.
  await api.post(`${FRONTEND_URL}/api/revalidate`, {
    data: { tag: "players" },
    headers: { Authorization: bearer },
  });

  await api.dispose();
  seeded = { bearer, ids };
}

async function cleanupRosterFinally() {
  if (!seeded) return;
  const api = await request.newContext();
  for (const id of seeded.ids) {
    await api.delete(`${API_URL}/api/v1/content/players/${id}`, {
      headers: { Authorization: seeded.bearer },
    });
  }
  await api.post(`${FRONTEND_URL}/api/revalidate`, {
    data: { tag: "players" },
    headers: { Authorization: seeded.bearer },
  });
  await api.dispose();
}

test.describe("roster page", () => {
  test("shows players only, 15 per page, with pagination", async ({ page }) => {
    await seedRoster();
    try {
      await page.goto("/players");

      // Players-only: no coaches sidebar, the coach row never renders.
      await expect(
        page.getByRole("heading", { name: "Дасгалжуулагчид" }),
      ).toHaveCount(0);
      await expect(page.getByText(`Дасгалжуулагч ${RUN}`)).toHaveCount(0);

      // 5-column grid page 1: exactly 15 cards, starting at №1.
      const grid = page.locator("div.grid.lg\\:grid-cols-5");
      await expect(grid).toBeVisible();
      await expect(grid.locator("article")).toHaveCount(15);
      await expect(
        page.getByRole("heading", { exact: true, name: `Тоглогч ${RUN} №1` }),
      ).toBeVisible();

      // Second page holds the seeded remainder.
      await page.getByRole("button", { name: "Хуудас 2" }).click();
      await expect(
        page.getByRole("heading", { exact: true, name: `Тоглогч ${RUN} №18` }),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", { exact: true, name: `Тоглогч ${RUN} №1` }),
      ).toHaveCount(0);
    } finally {
      // A timed-out body aborts its finally — the seed-time sweep in the
      // NEXT run removes anything left behind.
      await cleanupRosterFinally();
    }
  });
});
