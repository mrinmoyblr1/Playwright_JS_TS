//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test('Playwright Special Locator', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();

    // In below, we can perform .click() or .check()
    await page.getByLabel("Employed").click();
    await page.getByLabel("Employed").check();

    // This is getByLabel() then Select Option
    await page.getByLabel("Gender").selectOption("Female");

    // getByPlaceholder
    await page.getByPlaceholder("Password").fill("ASD");

    // getByRole : we need one extra parameter for {name:'Submit'}
    await page.getByRole("button", { name: 'Submit' }).click();

    // This locator will work on visible Text
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    await page.getByRole("Link", { name: 'Shop' }).click();

    // Here we do not mention name of the button as there is only one button
    // This is very important locator mechanism
    await page.locator("app-card").filter({ hasText: 'Nokia Edge' }).getByRole("button").click();
});
