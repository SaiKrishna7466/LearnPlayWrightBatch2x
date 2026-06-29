//Basic async and wait
async function getTestResult() {
    return "pass";
}

getTestResult.then(function (res){
    console.log("hey welcome to the class");
});

import { test, expect } from '@playwright/test';

test('has title', async({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

    let r = page.locator();


})