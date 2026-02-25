import { test, devices, expect } from '@playwright/test';

const iPhone13 = devices['iPhone 13 Pro'];
test.use({
    baseURL: '',
    ...iPhone13,
});
test('Device test', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
});