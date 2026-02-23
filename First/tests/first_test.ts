import { test, expect } from '@playwright/test';

test('Intro heading has correct text', async ({ page }) => {
  // Arrange
    await page.goto('https://playwright.dev/docs/intro');
    await page.getByRole('link', { name: 'Docs' }).click();
    const heading = page.getByRole('heading', { name: 'IntroductionDirect link to' });
    await expect(heading).toHaveText('Introduction');
});
