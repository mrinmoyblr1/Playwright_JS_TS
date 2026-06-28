# Manual Test Cases
## Author: Mrinmoy

---

## 1. Find Duplicates Functionality (findDuplicates001.js)

### TC-001: Find All Duplicates in Array
**Objective:** Verify that the function correctly identifies all duplicate numbers in an array
**Test Data:** [1, 2, 3, 2, 4, 3, 5]
**Expected Result:** [2, 3]
**Steps:**
1. Execute findDuplicates([1, 2, 3, 2, 4, 3, 5])
2. Verify the returned array contains [2, 3]
3. Verify no duplicate entries in result

### TC-002: Find Duplicates with Empty Array
**Objective:** Verify function handles empty array gracefully
**Test Data:** []
**Expected Result:** []
**Steps:**
1. Execute findDuplicates([])
2. Verify empty array is returned

### TC-003: Find Duplicates with No Duplicates
**Objective:** Verify function returns empty array when no duplicates exist
**Test Data:** [1, 2, 3, 4, 5]
**Expected Result:** []
**Steps:**
1. Execute findDuplicates([1, 2, 3, 4, 5])
2. Verify empty array is returned

### TC-004: Find First Duplicate
**Objective:** Verify function returns the first encountered duplicate
**Test Data:** [1, 2, 3, 2, 4, 3, 5]
**Expected Result:** 2
**Steps:**
1. Execute findFirstDuplicate([1, 2, 3, 2, 4, 3, 5])
2. Verify returned value is 2 (first duplicate found)

### TC-005: Find First Duplicate with No Duplicates
**Objective:** Verify function returns -1 when no duplicates exist
**Test Data:** [1, 2, 3, 4, 5]
**Expected Result:** -1
**Steps:**
1. Execute findFirstDuplicate([1, 2, 3, 4, 5])
2. Verify -1 is returned

### TC-006: Count Duplicates Using Object Method
**Objective:** Verify object-based approach correctly counts duplicate occurrences
**Test Data:** [1, 2, 3, 2, 4, 3, 5]
**Expected Result:** [2, 3]
**Steps:**
1. Execute the object-based findDuplicates function
2. Verify both 2 and 3 are returned
3. Verify frequency count is accurate

---

## 2. UI Basics Test Cases (UIBasicsTest.spec.js)

### TC-007: Browser Context Playwright Test - Invalid Credentials
**Objective:** Verify login fails with incorrect credentials
**Test Data:** Username: rahulshettyacademy, Password: Learning@830$3mK21
**Expected Result:** Error message "Incorrect username/password." displayed
**URL:** https://rahulshettyacademy.com/loginpagePractise/
**Steps:**
1. Navigate to login page
2. Enter username: rahulshettyacademy
3. Enter password: Learning@830$3mK21
4. Check terms & conditions checkbox
5. Click Sign In button
6. Verify error message appears with text "Incorrect username/password."
7. Verify error message style contains 'block'

### TC-008: Browser Context Playwright Test - Valid Credentials
**Objective:** Verify successful login with correct credentials
**Test Data:** Username: rahulshettyacademy, Password: Learning@830$3mK2
**Expected Result:** User successfully logs in and products are displayed
**URL:** https://rahulshettyacademy.com/loginpagePractise/
**Steps:**
1. Clear username field
2. Enter username: rahulshettyacademy
3. Clear password field
4. Enter password: Learning@830$3mK2
5. Click Sign In button
6. Verify products load successfully
7. Verify first, last, and nth products can be retrieved
8. Verify product count is correct

### TC-009: Product List Navigation - First Product
**Objective:** Verify ability to access and display first product
**Expected Result:** First product text is displayed
**Steps:**
1. After successful login (TC-008)
2. Get first product using .first() method
3. Verify product text is retrieved and logged
4. Expected: First product is "Iphone 13 Pro"

### TC-010: Product List Navigation - Last Product
**Objective:** Verify ability to access and display last product
**Expected Result:** Last product text is displayed
**Steps:**
1. After successful login (TC-008)
2. Get last product using .last() method
3. Verify product text is retrieved and logged
4. Verify last product in list

### TC-011: Product List Navigation - Nth Product
**Objective:** Verify ability to access specific product by index
**Expected Result:** 2nd product (index 1) text is displayed
**Steps:**
1. After successful login (TC-008)
2. Get 2nd product using .nth(1) method
3. Verify product text is retrieved and logged

### TC-012: Get All Product Titles
**Objective:** Verify all product titles can be retrieved as array
**Expected Result:** Array containing all product titles
**Steps:**
1. After successful login (TC-008)
2. Use .allTextContents() to get all product titles
3. Verify array is not empty
4. Verify each product title is readable

### TC-013: Iterate Through All Products
**Objective:** Verify loop iteration through all products
**Expected Result:** Each product is accessed and logged
**Steps:**
1. After successful login (TC-008)
2. Get count of products using .count()
3. Loop through each product using .nth(i)
4. Verify each product text is logged
5. Verify loop completes without errors

### TC-014: Page Title Verification - Google
**Objective:** Verify page title contains expected text
**Test URL:** https://google.com
**Expected Result:** Page title contains "Google"
**Steps:**
1. Navigate to Google homepage
2. Get page title
3. Verify title contains "Google"
4. Use expect assertion to verify title

### TC-015: Dropdown Selection
**Objective:** Verify dropdown selection functionality
**Test URL:** https://rahulshettyacademy.com/loginpagePractise/
**Test Data:** Select "Consultant" from dropdown
**Expected Result:** "Consultant" is selected
**Steps:**
1. Navigate to login page
2. Locate dropdown with class "form-control"
3. Use selectOption("Consultant")
4. Verify selection is successful

### TC-016: Radio Button Selection
**Objective:** Verify radio button selection functionality
**Test URL:** https://rahulshettyacademy.com/loginpagePractise/
**Expected Result:** Second radio button is selected
**Steps:**
1. Navigate to login page
2. Click 2nd radio button with class "radiotextsty"
3. Click "Okay" button
4. Verify radio button is checked using isChecked()
5. Verify result is true

### TC-017: Radio Button Assertion
**Objective:** Verify assertion methods for radio button state
**Expected Result:** Last radio button is checked
**Steps:**
1. After TC-016
2. Use toBeChecked() assertion on last radio button
3. Verify assertion passes
4. Log the checked state

### TC-018: Checkbox - Check Operation
**Objective:** Verify checkbox can be checked
**Test URL:** https://rahulshettyacademy.com/loginpagePractise/
**Expected Result:** Checkbox with id "terms" is checked
**Steps:**
1. Navigate to login page
2. Click checkbox with id "terms"
3. Use toBeChecked() assertion
4. Verify checkbox is checked

### TC-019: Checkbox - Uncheck Operation
**Objective:** Verify checkbox can be unchecked
**Expected Result:** Checkbox is unchecked
**Steps:**
1. After TC-018 (checkbox is checked)
2. Use .uncheck() method on terms checkbox
3. Verify checkbox is unchecked using isChecked()
4. Verify result is falsy

### TC-020: Element Attribute Verification
**Objective:** Verify element attribute can be retrieved and verified
**Test URL:** https://rahulshettyacademy.com/loginpagePractise/
**Expected Result:** Document link has class "blinkingText"
**Steps:**
1. Navigate to login page
2. Locate link with href containing "documents-request"
3. Use toHaveAttribute() to verify class is "blinkingText"
4. Use getAttribute() to retrieve class value
5. Verify class equals "blinkingText"
6. Log element text content

### TC-021: Child Window Handle - New Page Event
**Objective:** Verify new page can be handled when child window opens
**Test URL:** https://rahulshettyacademy.com/loginpagePractise/
**Expected Result:** New page is captured and text from child window is extracted
**Steps:**
1. Navigate to login page
2. Use Promise.all() with waitForEvent('page') and click on document link
3. Capture new page reference
4. On new page, locate element with class "red"
5. Extract text content
6. Verify text is retrieved successfully

### TC-022: Text Content Extraction from Child Window
**Objective:** Verify text can be extracted from child window
**Expected Result:** Email domain is extracted from text
**Steps:**
1. After TC-021 (new page is open)
2. Get text content containing '@' symbol
3. Split text by '@'
4. Extract domain after '@' symbol
5. Verify domain is extracted correctly

### TC-023: Input Value Filling in Child Window
**Objective:** Verify input value can be filled in child window
**Expected Result:** Username field is filled with extracted domain
**Steps:**
1. After TC-022 (domain is extracted)
2. Fill username field in parent page with extracted domain
3. Verify field contains the domain value
4. Use inputValue() method to verify

### TC-024: Input Value Retrieval
**Objective:** Verify input value can be retrieved from text content and input value methods
**Expected Result:** Input value matches filled value
**Steps:**
1. After TC-023 (username is filled)
2. Use textContent() on username field
3. Use inputValue() on username field
4. Verify both methods return the filled value or null/actual value

---

## 3. Client App E-Commerce Test Cases (ClientAppOtherWay.spec.js)

### TC-025: E-Commerce Login
**Objective:** Verify user can login with valid credentials
**Test URL:** https://rahulshettyacademy.com/client
**Test Data:** Email: mrinmoy.blr@gmail.com, Password: Test1234
**Expected Result:** User successfully logs in
**Steps:**
1. Navigate to e-commerce app
2. Fill email using placeholder "email@example.com"
3. Fill password using placeholder "enter your passsword"
4. Click Login button using role
5. Verify login is successful

### TC-026: Network Idle Wait
**Objective:** Verify page waits for network to be idle
**Expected Result:** Page fully loads before proceeding
**Steps:**
1. After successful login (TC-025)
2. Wait for networkidle state
3. Verify no pending network requests

### TC-027: Product Card Elements Wait
**Objective:** Verify product cards are loaded before interaction
**Expected Result:** All product cards are visible
**Steps:**
1. After TC-026
2. Wait for first product card (class 'card-body b')
3. Wait for last product card
4. Wait for second product card
5. Verify all product cards are visible

### TC-028: Add Product to Cart Using Filter
**Objective:** Verify product can be added to cart using filter mechanism
**Test Data:** Product: "ZARA COAT 3"
**Expected Result:** "ZARA COAT 3" is added to cart
**Steps:**
1. After TC-027
2. Use filter mechanism to find "ZARA COAT 3"
3. Click "Add To Cart" button
4. Verify product is added to cart

### TC-029: Navigate to Cart
**Objective:** Verify user can navigate to cart
**Expected Result:** Cart page is displayed
**Steps:**
1. After TC-028 (product is added to cart)
2. Click Cart button from listitem
3. Wait for cart content to load
4. Verify cart page is displayed

### TC-030: Verify Product in Cart
**Objective:** Verify added product appears in cart
**Test Data:** Expected Product: "ZARA COAT 3"
**Expected Result:** Product is visible in cart
**Steps:**
1. After TC-029 (on cart page)
2. Verify "ZARA COAT 3" is visible in cart
3. Use isVisible() method
4. Use toBeVisible() assertion
5. Verify product display is correct

### TC-031: Checkout Process
**Objective:** Verify checkout button is accessible
**Expected Result:** Checkout page is displayed
**Steps:**
1. After TC-030 (product is in cart)
2. Click Checkout button
3. Verify checkout page loads
4. Verify checkout form is displayed

### TC-032: Country Selection
**Objective:** Verify country can be selected using dropdown
**Test Data:** Input: "Ind", Expected Country: "India"
**Expected Result:** India is selected from dropdown
**Steps:**
1. After TC-031 (on checkout page)
2. Locate "Select Country" placeholder field
3. Use pressSequentially() to type "Ind"
4. Verify India option appears
5. Click India button (use nth(1) if multiple options)
6. Verify country is selected

### TC-033: Email Display Verification
**Objective:** Verify user email is displayed on checkout page
**Test Data:** Expected Email: mrinmoy.blr@gmail.com
**Expected Result:** Email matches logged-in user email
**Steps:**
1. After TC-032 (country is selected)
2. Locate text with style "color: lightgray"
3. Extract email from text
4. Verify email matches: mrinmoy.blr@gmail.com
5. Use assertion to verify email display

### TC-034: User Name Field Verification
**Objective:** Verify user email in name field matches logged-in email
**Test Data:** Expected Email: mrinmoy.blr@gmail.com
**Expected Result:** Name field contains user email
**Steps:**
1. After TC-033 (email is verified)
2. Locate name field with type="text"
3. Use first() to get first name field
4. Use toHaveText() assertion to verify email
5. Verify text matches exactly

### TC-035: Place Order
**Objective:** Verify order can be placed successfully
**Expected Result:** Success message is displayed
**Steps:**
1. After TC-034 (checkout form is complete)
2. Click "Place Order" button
3. Wait for success message
4. Verify success message is visible

### TC-036: Order Confirmation Message
**Objective:** Verify order confirmation message is displayed
**Test Data:** Expected Message: " Thankyou for the order. "
**Expected Result:** Confirmation message appears
**Steps:**
1. After TC-035 (order is placed)
2. Verify message " Thankyou for the order. " is visible
3. Use toBeVisible() assertion
4. Verify message text is exact

---

## 4. Calendar Test Cases (Calender.spec.js)

### TC-037: Calendar Date Selection
**Objective:** Verify user can select a specific date from calendar
**Test Data:** Month: 6 (June), Date: 15, Year: 2027
**Expected Result:** Date 15/June/2027 is selected
**Steps:**
1. Navigate to calendar page/application
2. Open calendar widget
3. Select month: June (6)
4. Select year: 2027
5. Click date: 15
6. Verify selected date is highlighted
7. Verify selected date matches: 15/June/2027

### TC-038: Calendar Month Navigation
**Objective:** Verify month can be navigated and selected
**Test Data:** Month Number: 6 (June)
**Expected Result:** June is displayed in calendar
**Steps:**
1. Open calendar widget
2. Select month number 6
3. Verify June is displayed
4. Verify calendar days are for June
5. Verify current month is highlighted

### TC-039: Calendar Year Navigation
**Objective:** Verify year can be navigated and selected
**Test Data:** Year: 2027
**Expected Result:** Year 2027 is selected
**Steps:**
1. Open calendar widget
2. Navigate to year selection
3. Select year 2027
4. Verify year is updated to 2027
5. Verify dates are for 2027

### TC-040: Calendar Date Display
**Objective:** Verify calendar displays dates for selected month/year
**Test Data:** Month: 6, Year: 2027
**Expected Result:** All dates for June 2027 are displayed
**Steps:**
1. After selecting month 6 and year 2027
2. Verify calendar grid displays dates 1-30 for June
3. Verify first day is positioned correctly (weekday)
4. Verify last day is June 30
5. Verify no dates from other months are shown

### TC-041: Calendar - Already Selected Date
**Objective:** Verify pre-selected date handling
**Test Data:** Date: 15 (already selected from TC-037)
**Expected Result:** Date 15 shows as selected/highlighted
**Steps:**
1. After TC-037 (date 15 is selected)
2. Close calendar and reopen
3. Verify date 15 is still highlighted as selected
4. Verify selection persists

---

## Test Execution Summary

| Test Case # | Module | Test Scenario | Priority | Status |
|-------------|--------|---------------|----------|--------|
| TC-001 to TC-006 | Find Duplicates | Duplicate Number Detection | High | Not Executed |
| TC-007 to TC-024 | UI Basics | Login, Forms, Navigation | High | Not Executed |
| TC-025 to TC-036 | E-Commerce Client App | Full Purchase Flow | High | Not Executed |
| TC-037 to TC-041 | Calendar | Date Selection | Medium | Not Executed |

---

**Total Test Cases: 41**
**Author: Mrinmoy**
