const { test, expect } = require('@playwright/test')

test.only('Browser Context Playwright Test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('mrinmoy.blr@gmail.com');
    await page.locator('#userPassword').fill('Test1234');
    await page.locator('#login').click();


    //await page.pause();

});


