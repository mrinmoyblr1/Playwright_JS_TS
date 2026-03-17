const { test, expect } = require('@playwright/test')

test.only('Browser Context Playwright Test', async ({ page }) => {
    const productName = 'ZARA COAT 3';
    const products = page.locator('.card-body');

    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('mrinmoy.blr@gmail.com');
    await page.locator('#userPassword').fill('Test1234');
    await page.locator('[value="Login"]').click();
    // Below line is used to wait for the network to be idle, which means that there are no more network requests being made. 
    // This is useful when you want to ensure that the page has fully loaded before proceeding with further actions.
    await page.waitForLoadState('networkidle');
    // Below line is a alternative of above, we use tthis wait for the element with the class 'card-body' to be visible on the page.
    await page.locator('.card-body b').first().waitFor();
    await page.locator('.card-body b').last().waitFor();
    await page.locator('.card-body b').nth(1).waitFor();

    // const titles = page.locator('.card-body b').allTextContents();
    // console.log(await titles);

    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator('b').textContent() === productName) {
            await products.nth(i).locator("text=Add To Cart").click();
            break;
        }
    }

    await page.locator("[routerlink*='cart']").click();
    







    await page.pause(3000);




});