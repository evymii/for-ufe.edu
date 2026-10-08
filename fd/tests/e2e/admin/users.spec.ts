import { expect, test } from "@playwright/test";

/**
 * Admin console against the real backend. Uses the seeded admin account
 * (bd/ `npm run db:seed`: admin@ufeedu.local / Admin123!).
 */
test.describe("admin console", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email").fill("admin@ufeedu.local");
    await page.getByLabel("Password").fill("Admin123!");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(page).toHaveURL(/\/admin$/);
  });

  test("dashboard shows stat cards and the registrations chart", async ({
    page,
  }) => {
    await expect(
      page.getByRole("heading", { name: "Admin dashboard" }),
    ).toBeVisible();
    await expect(page.getByText("Total users")).toBeVisible();
    await expect(page.getByText("Active")).toBeVisible();
    await expect(page.getByText("Admins")).toBeVisible();
    await expect(
      page.getByRole("img", { name: /registrations/i }),
    ).toBeVisible();
  });

  test("users page lists seeded users with pagination", async ({ page }) => {
    await page.goto("/admin/users");
    await expect(page.getByRole("heading", { name: "Users" })).toBeVisible();

    // Seeded chart users are deterministic — seed.user1@ufeedu.local is newest.
    await page.getByLabel("Search users").fill("seed.user1@ufeedu.local");
    await page.getByRole("button", { name: "Search" }).click();
    await expect(
      page.getByRole("cell", { name: "seed.user1@ufeedu.local" }),
    ).toBeVisible();
    await expect(page.getByText(/1 users?/)).toBeVisible();
  });

  test("admin can deactivate and reactivate a user", async ({ page }) => {
    await page.goto("/admin/users");
    await page.getByLabel("Search users").fill("demo@ufeedu.local");
    await page.getByRole("button", { name: "Search" }).click();
    await expect(
      page.getByRole("cell", { name: "demo@ufeedu.local" }),
    ).toBeVisible();

    const row = page.getByRole("row", { name: /demo@ufeedu\.local/ });
    await row.getByRole("button", { name: "Deactivate" }).click();
    await expect(row.getByText("Inactive")).toBeVisible();

    await row.getByRole("button", { name: "Activate" }).click();
    await expect(row.getByText("Active")).toBeVisible();
  });
});
