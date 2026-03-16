const { test, expect } = require('@playwright/test')

test.only('Browser Context Playwright Test', async ({ browser }) => {
    // It will open a fresh instance of the browser for each test
    const context = await browser.newContext();
    // It will open a new page in the fresh browser context
    const page = await context.newPage();

    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const signInButton = page.locator('#signInBtn');
    const terms = page.locator('#terms');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/#')
    console.log(await page.title());
    expect(await page.title()).toContain('LoginPage Practise')

    //.fill() is used to fill the input field with the given value. 
    // It will clear the input field before filling it with the new value.
    await userName.fill('rahulshettyacademy')
    await password.fill('Learning@830$3mK21')
    await terms.click()
    await signInButton.click()

    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    //await expect(page.locator("p[class='error']")).toHaveText('Incorrect username/password.')
    await expect(page.locator("[style*='block']")).toHaveText('Incorrect username/password.')

    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await password.fill('');
    await password.fill('Learning@830$3mK2');
    await signInButton.click();

    const cardTitles = await page.locator(".card-body a");
    // It will return the first element of the locator.
    console.log("First Product: " + await cardTitles.first().textContent());
    // It will return the last element of the locator.
    console.log("Last Product: " + await cardTitles.last().textContent());
    console.log("2nd Product: " + await cardTitles.nth(1).textContent());
    // It will return all the elements of the locator.
    // Whenever we will have multiple matches in element identification, 
    // then we should use either .first() or .last() or .nth() to get the specific element then use.allTextContents() to get the text of all the elements.
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

    for (let i = 0; i < await cardTitles.count(); i++) {
        console.log("Product: " + await cardTitles.nth(i).textContent());
    }
});





test('Plage Playwright Test', async ({ page }) => {
    await page.goto('https://google.com')
    console.log(await page.title())
    expect(await page.title()).toContain('Google')
    await expect(page).toHaveTitle('Google')

});


test('Ui Controls', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const dropdown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='documents-request']");

    await dropdown.selectOption("Consultant");
    // It will open Playwright Inspector and pause the execution.
    //await page.pause();

    await page.locator(".radiotextsty").nth(1).click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    // It will return Boolean value.
    await page.locator("#terms").click();
    expect(await page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    // Here we are checking the checkbox is unchecked.

    await expect(documentLink).toHaveAttribute('class', 'blinkingText');
});


test('Child Windows Handles', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='document']");

    const [newPage, newPage2] = await Promise.all(
        [
            context.waitForEvent('page'),  // This will listen for any page
            documentLink.click(),   // New page is opened here
        ])

    const text = await newPage.locator(".red").textContent();
    console.log(text);
    const arrayText = text.split('@');
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);
    await userName.fill(domain);
    console.log(await userName.textContent());
    console.log("===============");
    console.log(await userName.inputValue());

    await page.pause();
});
