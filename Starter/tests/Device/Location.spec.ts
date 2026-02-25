import { test, devices, expect } from '@playwright/test';

const iPhone13 = devices['iPhone 13 Pro'];
test.use({
    baseURL: '',
    geolocation: {longitude: 41.44, latitude: 30.37},
    permissions: ['geolocation']
    });
test('Location test', async ({ page }) => {
    await page.goto('https://www.openstreetmap.org');
    await page.getByRole('button', { name: 'Show My Location' }).click();

});