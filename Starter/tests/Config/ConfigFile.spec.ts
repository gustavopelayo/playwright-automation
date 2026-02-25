import { test, expect } from '@playwright/test';

test.use({
    locale: 'it-IT'
});

test('Config file test', async ({ page }) => {
    await page.goto('https://www.google.com');
});
test.describe('Config file test suite', () => {
    test.use({
        locale: 'fr-FR'
    });
    test('Config file test 2', async ({ page }) => {
        await page.goto('https://www.google.com');
    });
});

test.fail('Settings  options - wrong', async ({ page }) => {   
   test.use({
    locale: 'pt-PT'
   });
    await page.goto('https://www.google.com');
});

test("Settings options - correct", async ({ browser }) => {
    const context = await browser.newContext({
        locale: 'de-DE'
    });
    const page = await context.newPage();
    await page.goto('https://www.google.com');
});