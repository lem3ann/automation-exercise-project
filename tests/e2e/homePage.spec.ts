import { test, expect, type Page } from "@playwright/test";
import { HomePage } from "../../src/pages/homePage";
import { log } from "console";
test.describe("Test cases for HomePage", () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });
  // CASE-1
  test("should open main page successfully", { tag: "@homePage" }, async () => {
    await expect(
      homePage
        .getByText("Full-Fledged practice website for Automation Engineers")
        .first(),
    ).toBeVisible();
  });
  // CASE-3
  test("should display all navbar elements", { tag: "@homePage" }, async () => {
    const navElements = Object.values(homePage.navLinks);
    for (let item of navElements) {
      await expect(item).toBeVisible();
    }
  });
  // CASE-[4--7]
  test(
    "should display sidebar and catgeories successfully",
    { tag: "@homePage" },
    async () => {
      const sidebarElements = homePage.mainPageSideBar;
      for (let item of sidebarElements) {
        await expect(homePage.getByHeader(item)).toBeVisible();
      }
    },
  );
  // CASE -8
  test(
    "each product contain name and price field successfully",
    { tag: "@homePage" },
    async () => {
      let allProductsName = await homePage.productName.all();
      let allProductsPrice = await homePage.productPrice.all();
      let allProducts = await homePage.productList.all();
      expect(allProductsName.length).toBe(allProducts.length);
      // console.log(allProducts.length, allProductsName.length);
      for (let i = 0; i < allProductsName.length; i++) {
        await expect(allProductsName[i]).toBeVisible();
        await expect(allProductsPrice[i]).toBeVisible();
      }
    },
  );
  // CASE -9
  test(
    "each product has add to cart button",
    { tag: "@homePage" },
    async () => {
      let allProducts = await homePage.productList.all();
      expect(allProducts.length).toBe();
    },
  );
});
