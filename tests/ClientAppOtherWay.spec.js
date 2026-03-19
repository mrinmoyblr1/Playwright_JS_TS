const { test, expect } = require('@playwright/test')
test.only('Browser Context Playwright Test', async ({ page }) => {
    const productName = 'ZARA COAT 3';
    const products = page.locator('.card-body');
    const userEmail = 'mrinmoy.blr@gmail.com';
    const userPassword = 'Test1234';
    const successMessage = " Thankyou for the order. ";
    await page.goto('https://rahulshettyacademy.com/client');

    // await page.locator('#userEmail').fill(userEmail);
    await page.getByPlaceholder("email@example.com").fill(userEmail);
    await page.getByPlaceholder('enter your passsword').fill(userPassword);
    await page.getByRole("button", { name: "Login" }).click();

    // Below line is used to wait for the network to be idle, which means that there are no more network requests being made. 
    // This is useful when you want to ensure that the page has fully loaded before proceeding with further actions.
    await page.waitForLoadState('networkidle');

    // Below line is a alternative of above, we use tthis wait for the element with the class 'card-body' to be visible on the page.
    await page.locator('.card-body b').first().waitFor();
    await page.locator('.card-body b').last().waitFor();
    await page.locator('.card-body b').nth(1).waitFor();

    // Below is the best way to use filter mechanasm to click on Add to Cart
    await page.locator(".card-body").filter({ hasText: 'ZARA COAT 3' }).getByRole("button", { name: 'Add To Cart' }).click();


    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("Ind");
    //const options = page.locator("section").nth(1);
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionCount; i++) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text.trim() === "India") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    console.log(await page.locator("[style*='color: lightgray']").textContent());
    const email = await page.locator("[style*='color: lightgray']").textContent();
    expect(userEmail).toBe(email);
    expect(await page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator("a.action__submit").click();
    const message = await page.locator("h1").textContent();
    console.log(message);
    expect(successMessage).toEqual(message);
    expect(await page.locator(".hero-primary")).toHaveText(successMessage);
    const orderID = (await page.locator(".em-spacer-1 .ng-star-inserted").textContent()).split(" ")[2];
    console.log(orderID);
    // This is for finding the Order in the Order page
    await page.locator("button[routerlink*='myorders']").click();

    // Below code will find any button from a table and click on it
    await page.locator("tbody tr").first().waitFor();
    const rows = page.locator("tbody tr");
    for (let i = 0; i < await rows.count(); i++) {
        const rowOrderID = await rows.nth(i).locator("th").textContent();
        if (orderID.includes(rowOrderID)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
        const orderIdDetailsPage = await page.locator(".col-text").textContent();
        expect(orderID.includes(orderIdDetailsPage)).toBeTruthy();
    }
});