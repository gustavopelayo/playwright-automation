import {test, expect} from '@playwright/test';  


test('Complex button actions', async ({page}) => {

    await page.goto('ComplexButton.html');
    const complexButton = page.locator('button');
    await expect(complexButton).toBeVisible();

    await expect(complexButton).toBeEnabled();
    await complexButton.click();

    await expect(page.locator('#myLabel')).toBeVisible();
});