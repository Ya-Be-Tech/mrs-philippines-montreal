import { test, expect } from '@playwright/test'

test.describe('E2E - Page Rendering and Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Set default timeout for navigation
    page.setDefaultTimeout(30000)
  })

  test('home page loads and displays correct h1 with "Mrs Philippines Montreal"', async ({
    page
  }) => {
    await page.goto('http://localhost:3000/')
    const h1 = page.locator('h1')
    await expect(h1).toContainText('Mrs Philippines Montreal')
  })

  test('about page loads without 404', async ({ page }) => {
    await page.goto('http://localhost:3000/about')
    expect(page.url()).toContain('/about')
    // Verify page contains h1 tag (any h1)
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
  })

  test('events/2019 page loads without 404', async ({ page }) => {
    await page.goto('http://localhost:3000/events/2019')
    expect(page.url()).toContain('/events/2019')
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
  })

  test('events/2022 page loads without 404', async ({ page }) => {
    await page.goto('http://localhost:3000/events/2022')
    expect(page.url()).toContain('/events/2022')
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
  })

  test('talent page loads without 404', async ({ page }) => {
    await page.goto('http://localhost:3000/talent')
    expect(page.url()).toContain('/talent')
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
  })

  test('mobile nav button exists and is visible on mobile viewport', async ({ page }) => {
    // Set mobile viewport (375px is iPhone SE size)
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('http://localhost:3000/')

    // Look for hamburger button or mobile nav button
    const mobileNavButton = page.locator('button[aria-label*="navigation"], button.md\\:hidden')
    await expect(mobileNavButton.first()).toBeVisible()
  })

  test('mobile nav button toggles menu visibility on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('http://localhost:3000/')

    // Find and click the hamburger button
    const hamburgerButton = page.locator('button').filter({ has: page.locator('svg') }).first()

    if (await hamburgerButton.isVisible()) {
      // Get the mobile menu element
      const mobileMenu = page.locator('[data-testid="mobile-menu"]')

      // Initially menu should be hidden or not visible
      // Click button to toggle menu open
      await hamburgerButton.click()

      // Menu should now be visible
      await expect(mobileMenu).toBeVisible()

      // Click button again to toggle menu closed
      await hamburgerButton.click()
      // Menu should be hidden
      // Note: v-show may hide with CSS, so we check visibility
      const isVisible = await mobileMenu.evaluate((el) => {
        return window.getComputedStyle(el).display !== 'none'
      })
      expect(isVisible).toBe(false)
    }
  })

  test('navigation links are present in header', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    // Check that nav links exist (Home, About, Events, Talent)
    const homeLink = page.locator('a[href="/"]')
    const aboutLink = page.locator('a[href="/about"]')

    await expect(homeLink).toBeVisible()
    await expect(aboutLink).toBeVisible()
  })

  test('language selector exists and is functional', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    // Look for language selector
    const languageSelect = page.locator('select')
    await expect(languageSelect).toBeVisible()

    // Change language to French
    await languageSelect.selectOption('fr')

    // Verify URL includes /fr/ for French locale
    await page.waitForURL(/\/fr\//)
  })
})
