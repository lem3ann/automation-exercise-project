import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByText('Add to cart').nth(1).click();
  await page.locator('#cartModal').click();
  await page.locator('#cartModal').click();
  await page.locator('#cartModal').click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('div:nth-child(6) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByText('Add to cart').nth(5).click();
});