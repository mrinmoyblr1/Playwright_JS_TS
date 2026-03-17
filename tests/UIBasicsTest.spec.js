const { test, expect } = require('@playwright/test')

test('Browser Context Playwright Test', async ({ browser }) => {
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
    const documentLink = page.locator("[href*='documents-request']");

    // To handle the dropdown, we can use the selectOption() method.
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("Consultant");

    // await page.pause() will open Playwright Inspector and pause the execution.
    await page.locator(".radiotextsty").nth(1).click();
    await page.locator("#okayBtn").click();
    // For asserting the radio button is checked or not, we can use the isChecked() method. 
    // It will return true if the radio button is checked, otherwise false.
    // We use .toBe(true) or toBeChecked() method to assert the value returned by isChecked() method.
    expect(await page.locator(".radiotextsty").nth(1).isChecked()).toBe(true);
    await expect(page.locator(".radiotextsty").last()).toBeChecked();

    // Print statement:
    // It will check the checkbox and return true if it is checked, otherwise false.
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await page.locator("#terms").click();

    await expect(page.locator("#terms")).toBeChecked();

    await page.locator("#terms").uncheck();

    // If action is performed outside of expect then awat will be outside of expect.
    // If action is performed inside of expect then await will be inside of expect.

    // This is the assertion to check if the checkbox is unchecked. It will return true if the checkbox is unchecked, otherwise false.
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    // This is a assertion, to check the attribute of an element, we can use the toHaveAttribute() method.
    await expect(documentLink).toHaveAttribute('class', 'blinkingText');

    // To check the attribute of an element, we can use the getAttribute() method. It will return the value of the attribute.
    if (await documentLink.getAttribute('class') === 'blinkingText') {
        console.log(await documentLink.textContent());
        console.log("It's a blinking text");
    }
});


test('Child Windows Handles', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='document']");

    // Always promise will in 3 stages, pending, fulfilled and rejected. So, we use Promise.all() to wait for the promise to be fulfilled.
    // Promise.all() is used to wait for multiple promises to be fulfilled. It will return an array of the results of the promises.
    const [newPage, newPage2] = await Promise.all(
        [
            //The event is emitted when a new Page is created in the BrowserContext.
            // This is a new page that is opened in the same browser context. It will return the new page object.
            context.waitForEvent('page'),
            documentLink.click(),   // New page is opened here
        ]);

    const text = await newPage.locator(".red").textContent();
    console.log(text);
    const arrayText = text.split('@');
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);
    await userName.fill(domain);
    // To get the text content of an element, we can use the textContent() method. It will return the text content of the element.
    // .textContent() method will return the text content of the element, including the text of its child elements. 
    // It will return null if the element is not found.
    // It will return the text which is attached with DOM, but it will not return the text which is not attached with DOM. 
    console.log(await userName.textContent());
    // To get the value of the input field, we can use the inputValue() method. It will return the value of the input field.
    console.log(await userName.inputValue());
    //await page.pause();
});
