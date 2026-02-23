import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // Arrange
  await page.goto('https://playwright.dev/');

  // Act
  // (No specific action needed for this test)

  // Assert
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Act
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Assert
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
