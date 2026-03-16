const { test, expect } = require('@playwright/test')

test.only('Browser Context Playwright Test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('mrinmoy.blr@gmail.com');
    await page.locator('#userPassword').fill('Test1234');
    await page.locator('[value="Login"]').click();
    // Below line is used to wait for the network to be idle, which means that there are no more network requests being made. 
    // This is useful when you want to ensure that the page has fully loaded before proceeding with further actions.
    await page.waitForLoadState('networkidle');
    // Below line is used to wait for the element with the class 'card-body' to be visible on the page.
    // await page.locator('.card-body b').first().waitFor();

    const titles = page.locator('.card-body b').allTextContents();
    console.log(await titles);



    //await page.pause();

});


