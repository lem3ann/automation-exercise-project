import { test, expect, type Page } from "@playwright/test";
import { HomePage } from "../../src/pages/homePage";
import { log } from "console";
test.describe("Test cases for HomePage", () => {
    let homePage: HomePage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.open();
    })
    // CASE-1
    test("should open main page successfully", { tag: "@homePage" }, async () => {
        await expect(homePage.getByText("Full-Fledged practice website for Automation Engineers").first()).toBeVisible();
    })
    // CASE-3
    test("should display all navbar elements", { tag: "@homePage" }, async () => {
        const navElements = Object.values(homePage.navLinks);
        for (let item of navElements) {
            await expect(item).toBeVisible();
        }
    })
    // CASE-[4--7]
    test("should display sidebar and catgeories successfully", async () => {
        const sidebarElements = homePage.mainPageSideBar;
        for (let item of sidebarElements) {
            await expect(homePage.getByHeader(item)).toBeVisible();

        }
    })
})
