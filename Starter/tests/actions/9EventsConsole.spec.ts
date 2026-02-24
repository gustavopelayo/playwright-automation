import { test, expect } from '@playwright/test'

test.fail('Check for errors inside console', async ({ page }) => {

   page.on('console', msg => {
       expect.soft(msg.type(),
       `Received error log: ${msg.text()}`,
       ).not.toEqual('error');});

    await page.goto('Events.html');
    const requestButton = page.getByRole('button', {
        name: 'Call wrong server'
    });
    await requestButton.click();
    await page.waitForTimeout(500);

})
