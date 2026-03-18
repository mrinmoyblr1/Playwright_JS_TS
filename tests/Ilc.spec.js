//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test.only('Playwright Special Locator', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();

    // In below, we can perform .click() or .check()
    await page.getByLabel("Employed").click();
    await page.getByLabel("Employed").check();

    // This is getByLabel() then Select Option
    await page.getByLabel("Gender").selectOption("Female");

    // getByPlaceholder
    await page.getByPlaceholder("Password").fill("ASD");

    await page.getByPlaceholder("Password").fill("ASD1");

    // getByRole : we need one extra parameter for {name:'Submit'}
    await page.getByRole("button", { name: 'Submit' }).click();

    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("Link", { name: 'Shop' }).click();
    await page.locator("app-card").filter({ hasText: 'Nokia Edge' }).getByRole("button").click();
    // Here we do not need to mention name of the button as there is only one button
});
