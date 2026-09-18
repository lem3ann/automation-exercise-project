import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://automationexercise.com/login");
  await page
    .locator("form")
    .filter({ hasText: "Login" })
    .getByPlaceholder("Email Address")
    .click();
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("textbox", { name: "Name" }).click();
  await page
    .locator("form")
    .filter({ hasText: "Signup" })
    .getByPlaceholder("Email Address")
    .click();
  await page.getByRole("button", { name: "Signup" }).click();
});
