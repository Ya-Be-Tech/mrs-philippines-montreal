# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pages.spec.ts >> E2E - Page Rendering and Navigation >> navigation links are present in header
- Location: tests\e2e\pages.spec.ts:86:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a[href="/"]')
Expected: visible
Error: strict mode violation: locator('a[href="/"]') resolved to 3 elements:
    1) <a href="/" aria-current="page" class="router-link-active router-link-exact-active text-2xl font-serif font-bold text-[#D4AF37]"> MPM </a> aka getByRole('link', { name: 'MPM' })
    2) <a href="/" aria-current="page" class="router-link-active router-link-exact-active hover:text-[#D4AF37] transition-colors">Home</a> aka getByRole('navigation').getByText('Home')
    3) <a href="/" aria-current="page" class="router-link-active router-link-exact-active py-3 border-b border-mpm-gold/20 hover:text-mpm-gold transition-colors">Home</a> aka getByTestId('mobile-menu').getByText('Home')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a[href="/"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - navigation [ref=e5]:
      - link "MPM" [ref=e6] [cursor=pointer]:
        - /url: /
      - generic [ref=e7]:
        - combobox [ref=e8]:
          - option "English" [selected]
          - option "Français"
          - option "Tagalog"
        - button [ref=e9] [cursor=pointer]:
          - img [ref=e10]
  - main [ref=e12]:
    - generic [ref=e13]:
      - iframe [ref=e16]:
        - generic [ref=f1e5]:
          - generic [ref=f1e6]: Unavailable
          - generic [ref=f1e7]: This video can't be embedded because it may contain content owned by someone else.
          - generic [ref=f1e9]:
            - link "Video on Facebook" [ref=f1e10] [cursor=pointer]:
              - /url: /reel/1935227787165392/?ref=embed_video
            - text: ·
            - link "Learn more" [ref=f1e11] [cursor=pointer]:
              - /url: https://www.facebook.com/help/396404120401278/list?ref=embed_video
      - generic [ref=e17]:
        - heading "Mrs Philippines Montreal" [level=1] [ref=e18]
        - paragraph [ref=e19]: "\"From wearing the crown to passing it on\""
        - paragraph [ref=e20]: What a beautiful journey…
        - link "Explore Our History" [ref=e22] [cursor=pointer]:
          - /url: /about
        - paragraph [ref=e24]: See you this September!!
  - contentinfo [ref=e25]:
    - paragraph [ref=e26]: © 2026 Mrs Philippines Montreal. All rights reserved.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test'
  2   | 
  3   | test.describe('E2E - Page Rendering and Navigation', () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     // Set default timeout for navigation
  6   |     page.setDefaultTimeout(30000)
  7   |   })
  8   | 
  9   |   test('home page loads and displays correct h1 with "Mrs Philippines Montreal"', async ({
  10  |     page
  11  |   }) => {
  12  |     await page.goto('http://localhost:3000/')
  13  |     const h1 = page.locator('h1')
  14  |     await expect(h1).toContainText('Mrs Philippines Montreal')
  15  |   })
  16  | 
  17  |   test('about page loads without 404', async ({ page }) => {
  18  |     await page.goto('http://localhost:3000/about')
  19  |     expect(page.url()).toContain('/about')
  20  |     // Verify page contains h1 tag (any h1)
  21  |     const h1 = page.locator('h1')
  22  |     await expect(h1).toBeVisible()
  23  |   })
  24  | 
  25  |   test('events/2019 page loads without 404', async ({ page }) => {
  26  |     await page.goto('http://localhost:3000/events/2019')
  27  |     expect(page.url()).toContain('/events/2019')
  28  |     const h1 = page.locator('h1')
  29  |     await expect(h1).toBeVisible()
  30  |   })
  31  | 
  32  |   test('events/2022 page loads without 404', async ({ page }) => {
  33  |     await page.goto('http://localhost:3000/events/2022')
  34  |     expect(page.url()).toContain('/events/2022')
  35  |     const h1 = page.locator('h1')
  36  |     await expect(h1).toBeVisible()
  37  |   })
  38  | 
  39  |   test('talent page loads without 404', async ({ page }) => {
  40  |     await page.goto('http://localhost:3000/talent')
  41  |     expect(page.url()).toContain('/talent')
  42  |     const h1 = page.locator('h1')
  43  |     await expect(h1).toBeVisible()
  44  |   })
  45  | 
  46  |   test('mobile nav button exists and is visible on mobile viewport', async ({ page }) => {
  47  |     // Set mobile viewport (375px is iPhone SE size)
  48  |     await page.setViewportSize({ width: 375, height: 667 })
  49  |     await page.goto('http://localhost:3000/')
  50  | 
  51  |     // Look for hamburger button or mobile nav button
  52  |     const mobileNavButton = page.locator('button[aria-label*="navigation"], button.md\\:hidden')
  53  |     await expect(mobileNavButton.first()).toBeVisible()
  54  |   })
  55  | 
  56  |   test('mobile nav button toggles menu visibility on mobile', async ({ page }) => {
  57  |     // Set mobile viewport
  58  |     await page.setViewportSize({ width: 375, height: 667 })
  59  |     await page.goto('http://localhost:3000/')
  60  | 
  61  |     // Find and click the hamburger button
  62  |     const hamburgerButton = page.locator('button').filter({ has: page.locator('svg') }).first()
  63  | 
  64  |     if (await hamburgerButton.isVisible()) {
  65  |       // Get the mobile menu element
  66  |       const mobileMenu = page.locator('[data-testid="mobile-menu"]')
  67  | 
  68  |       // Initially menu should be hidden or not visible
  69  |       // Click button to toggle menu open
  70  |       await hamburgerButton.click()
  71  | 
  72  |       // Menu should now be visible
  73  |       await expect(mobileMenu).toBeVisible()
  74  | 
  75  |       // Click button again to toggle menu closed
  76  |       await hamburgerButton.click()
  77  |       // Menu should be hidden
  78  |       // Note: v-show may hide with CSS, so we check visibility
  79  |       const isVisible = await mobileMenu.evaluate((el) => {
  80  |         return window.getComputedStyle(el).display !== 'none'
  81  |       })
  82  |       expect(isVisible).toBe(false)
  83  |     }
  84  |   })
  85  | 
  86  |   test('navigation links are present in header', async ({ page }) => {
  87  |     await page.goto('http://localhost:3000/')
  88  | 
  89  |     // Check that nav links exist (Home, About, Events, Talent)
  90  |     const homeLink = page.locator('a[href="/"]')
  91  |     const aboutLink = page.locator('a[href="/about"]')
  92  | 
> 93  |     await expect(homeLink).toBeVisible()
      |                            ^ Error: expect(locator).toBeVisible() failed
  94  |     await expect(aboutLink).toBeVisible()
  95  |   })
  96  | 
  97  |   test('language selector exists and is functional', async ({ page }) => {
  98  |     await page.goto('http://localhost:3000/')
  99  | 
  100 |     // Look for language selector
  101 |     const languageSelect = page.locator('select')
  102 |     await expect(languageSelect).toBeVisible()
  103 | 
  104 |     // Change language to French
  105 |     await languageSelect.selectOption('fr')
  106 | 
  107 |     // Verify URL includes /fr/ for French locale
  108 |     await page.waitForURL(/\/fr\//)
  109 |   })
  110 | })
  111 | 
```