import { test, expect } from '@playwright/test';

test('Verify the the title of the TTA Cart', async ({ page }) => {

  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await expect(page).toHaveTitle("TTACart - Login");

});

test('Verify the the title of the TTA Cart2', async ({ page }) => {

  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await expect(page).toHaveTitle("TTACart - Login");

});