import { expect, test } from "@playwright/test";

/**
 * Full user journey against the real backend:
 * register → dashboard → logout → login → dashboard → guarded redirect.
 */
test.describe("user auth flow", () => {
  const email = `e2e-user-${Date.now()}@ufeedu.test`;
  const password = "Password123!";
  const name = "E2E User";

  test("register lands on the dashboard", async ({ page }) => {
    await page.goto("/register");

    await page.getByLabel("Name").fill(name);
    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Password", { exact: true }).fill(password);
    await page.getByLabel("Confirm password").fill(password);
    await page.getByRole("button", { name: "Create account" }).click();

    await expect(page).toHaveURL(/\/dashboard$/);
    await expect(
      page.getByRole("heading", { name: "Dashboard" }),
    ).toBeVisible();
    await expect(page.getByText(email)).toBeVisible();
  });

  test("form validation blocks a bad submission client-side", async ({
    page,
  }) => {
    await page.goto("/register");

    await page.getByLabel("Email").fill("not-an-email");
    await page.getByLabel("Password", { exact: true }).fill("short");
    await page.getByLabel("Confirm password").fill("different");
    await page.getByRole("button", { name: "Create account" }).click();

    await expect(page.getByText("Enter a valid email address")).toBeVisible();
    await expect(
      page.getByText("Password must be at least 8 characters"),
    ).toBeVisible();
    await expect(page.getByText("Passwords do not match")).toBeVisible();
    await expect(page).toHaveURL(/\/register$/);
  });

  test("logout clears the session and guards kick in", async ({ page }) => {
    // Log in as the user created above.
    await page.goto("/login");
    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Password").fill(password);
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(page).toHaveURL(/\/dashboard$/);

    // Log out via the account menu.
    await page.getByRole("button", { name: "Account menu" }).click();
    await page.getByRole("menuitem", { name: "Log out" }).click();
    await expect(page).toHaveURL(/^(?:https?:\/\/localhost:3000)?\/$/);

    // Anonymous visit to a protected page bounces to /login.
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/login/);
  });

  test("can log back in with the same credentials", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Password").fill(password);
    await page.getByRole("button", { name: "Log in" }).click();

    await expect(page).toHaveURL(/\/dashboard$/);
    await expect(page.getByText(name)).toBeVisible();
  });

  test("a plain user cannot open the admin area", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Password").fill(password);
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(page).toHaveURL(/\/dashboard$/);

    await page.goto("/admin");
    await expect(page).toHaveURL(/\/dashboard$/);
  });
});
