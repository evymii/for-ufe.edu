import { expect, test } from "@playwright/test";

/** The edge middleware must bounce anonymous and non-admin traffic away from /admin. */
test.describe("admin guard", () => {
  test("anonymous visitor is redirected to /login with a next hint", async ({
    page,
  }) => {
    await page.goto("/admin");
    await expect(page).toHaveURL(/\/login\?next=%2Fadmin/);
    await expect(
      page.getByRole("heading", { name: "Welcome back" }),
    ).toBeVisible();
  });

  test("anonymous visitor is redirected from a user page too", async ({
    page,
  }) => {
    await page.goto("/profile");
    await expect(page).toHaveURL(/\/login/);
  });
});
