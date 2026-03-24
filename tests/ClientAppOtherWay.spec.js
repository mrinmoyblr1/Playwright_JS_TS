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
    await page.getByRole("listitem").getByRole("button", { name: "Cart" }).click();
    await page.locator("div li").first().waitFor();

    expect(await page.getByText("ZARA COAT 3").isVisible()).toBeTruthy();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();

    await page.getByRole("button", { name: "Checkout" }).click();
    await page.getByPlaceholder("Select Country").pressSequentially("Ind");

    await page.getByRole("button", { name: "India" }).nth(1).click();


    console.log(await page.locator("[style*='color: lightgray']").textContent());
    const email = await page.locator("[style*='color: lightgray']").textContent();
    expect(userEmail).toBe(email);
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.getByText("Place Order ").click();

    await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
});