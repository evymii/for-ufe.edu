import {
  expect,
  request,
  test,
  type APIRequestContext,
} from "@playwright/test";

/**
 * The full CMS working flow against real servers (bd + fd):
 *
 *   admin login → edit home copy in /admin/text/home (or create a news post
 *   in /admin/news) → save → revalidation bridge purges the ISR cache →
 *   the public home page shows the change on the next request.
 *
 * Cleanup restores any touched content through the bd API so the dev data
 * is left as it was found.
 */

const STAFF_PASSWORD = process.env.STAFF_PASSWORD ?? "9876";
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4010";

/** Bearer-authenticated API context for setup/cleanup. */
async function adminApi(): Promise<{
  api: APIRequestContext;
  bearer: string;
}> {
  const api = await request.newContext();
  const res = await api.post(`${API_URL}/api/v1/user/auth/login`, {
    data: { identifier: "manager", password: STAFF_PASSWORD },
  });
  const { accessToken } = (
    (await res.json()) as { data: { accessToken: string } }
  ).data;
  return { api, bearer: `Bearer ${accessToken}` };
}

async function loginAsManager(page: import("@playwright/test").Page) {
  await page.goto("/login");
  await page.getByLabel("Нэвтрэх нэр").fill("manager");
  await page.getByLabel("Нууц үг").fill(STAFF_PASSWORD);
  await page.getByRole("button", { name: "Нэвтрэх" }).click();
  await expect(page).toHaveURL(/\/admin/);
}

/** The purge is fire-and-forget on the client, so retry the visit a bit.
 *  Dev-server ISR regeneration can lag well behind the 60s window while
 *  the server is busy compiling, so the budget is generous. */
async function gotoUntilVisible(
  page: import("@playwright/test").Page,
  path: string,
  text: string,
) {
  await expect
    .poll(
      async () => {
        await page.goto(path, { waitUntil: "domcontentloaded" });
        return (await page.getByText(text, { exact: false }).count()) > 0;
      },
      { timeout: 45_000 },
    )
    .toBe(true);
}

test.describe("admin content flow", () => {
  test("page-copy edit reaches the public home page without waiting out the ISR window", async ({
    page,
  }) => {
    const { api, bearer } = await adminApi();
    const before = await api.get(`${API_URL}/api/v1/content/site-content/home`);
    const storedHero = (
      (await before.json()) as {
        data: { sections: Record<string, unknown> };
      }
    ).data.sections.hero;

    const marker = `E2E-hero-${Date.now()}`;
    await loginAsManager(page);
    await page.goto("/admin/text/home");

    // The hero section's headline field, prefilled with the live value.
    const headline = page.getByLabel("Толгой гарчиг");
    await expect(headline).not.toHaveValue("");
    await headline.fill(marker);

    await page.getByRole("button", { name: /^Хадгалах/ }).click();
    await expect(page.getByText("Хуудасны текст хадгалагдлаа")).toBeVisible();

    await gotoUntilVisible(page, "/", marker);

    // Restore: put back whatever was stored before the test. A null hero
    // means the section had never been edited — an empty record returns it
    // to that never-edited state (the public page falls back to defaults).
    await api.put(`${API_URL}/api/v1/content/site-content/home/hero`, {
      data: { data: storedHero ?? {} },
      headers: { Authorization: bearer },
    });
    await api.dispose();
  });

  test("a news post created in the admin panel appears on the home page", async ({
    page,
  }) => {
    const { api, bearer } = await adminApi();
    const run = Date.now();
    const slug = `e2e-news-${run}`;
    const title = `E2E мэдээ ${run}`;

    await loginAsManager(page);
    await page.goto("/admin/news");

    // The home grid's big card shows the latest GAME and deliberately drops
    // the FIRST news item (items[0]) from the stack — so create two posts:
    // the newest lands in the discarded slot, the second renders.
    for (const [index, suffix] of ["a", "b"].entries()) {
      await page.getByRole("button", { name: "Шинэ мэдээ" }).click();
      await page.locator("#field-title").fill(`${title} ${suffix}`);
      await page.locator("#field-slug").fill(`${slug}-${suffix}`);
      await page.locator("#field-category").fill("E2E");
      await page.locator("#field-excerpt").fill(`E2E тест мэдээ ${index + 1}.`);
      await page
        .locator("#field-content")
        .fill(`E2E тест мэдээний бүтэн утга ${index + 1}.`);
      // Featured + published: the home grid shows featured-first posts, so
      // unfeatured posts would lose the slot to real dev data.
      await page.getByLabel("Онцлох").check();
      await page.getByRole("button", { name: "Хадгалах", exact: true }).click();
      await expect(page.getByText("Үүсгэгдлээ")).toBeVisible();
    }

    await gotoUntilVisible(page, "/", `${title} b`);

    const list = await api.get(`${API_URL}/api/v1/content/news?limit=100`, {
      headers: { Authorization: bearer },
    });
    const items = (
      (await list.json()) as {
        data: { items: Array<{ id: string; slug: string }> };
      }
    ).data.items;
    for (const row of items.filter((item) => item.slug.startsWith(slug))) {
      await api.delete(`${API_URL}/api/v1/content/news/${row.id}`, {
        headers: { Authorization: bearer },
      });
    }
    await api.dispose();
  });
});
