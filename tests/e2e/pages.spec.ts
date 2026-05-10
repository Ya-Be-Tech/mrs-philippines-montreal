import { test, expect } from '@playwright/test'

const BASE = 'http://localhost:3000'

test.describe('Page rendering', () => {
  test('home page loads with title', async ({ page }) => {
    await page.goto(BASE + '/')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page).not.toHaveURL('**/404')
  })

  test('about page loads without 404', async ({ page }) => {
    await page.goto(BASE + '/about')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page).not.toHaveURL('**/404')
  })

  test('events 2019 page loads without 404', async ({ page }) => {
    await page.goto(BASE + '/events/2019')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page).not.toHaveURL('**/404')
  })

  test('events 2022 page loads without 404', async ({ page }) => {
    await page.goto(BASE + '/events/2022')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page).not.toHaveURL('**/404')
  })

  test('talent page loads without 404', async ({ page }) => {
    await page.goto(BASE + '/talent')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page).not.toHaveURL('**/404')
  })
})

test.describe('Mobile nav', () => {
  test('hamburger menu toggles on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto(BASE + '/')
    const toggle = page.locator('[data-testid="mobile-menu"]')
    await expect(toggle).toBeHidden()
    await page.locator('button[aria-label="Toggle navigation"]').click()
    await expect(toggle).toBeVisible()
  })
})

test.describe('Language switcher', () => {
  test('switching to FR updates nav content', async ({ page }) => {
    await page.goto(BASE + '/')
    await page.selectOption('select', 'fr')
    await expect(page.locator('nav')).toContainText('Accueil')
  })
})
