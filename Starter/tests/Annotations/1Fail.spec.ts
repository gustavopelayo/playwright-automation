import { test, expect } from '@playwright/test';
import { get } from 'http';

test.fail('Failing test example', async ({ page }) => {
    await page.goto('');
    const flightData = getFlightData();
    expect(flightData).toBeDefined();
});
