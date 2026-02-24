import {test, expect} from '@playwright/test';  

test(' get by test id - practice', async ({page}) => {

    await page.goto('');
    const acceptCookiesButton = page.getByTestId('accept-cookies');

    await acceptCookiesButton.click();
    await expect(acceptCookiesButton).not.toBeVisible();
});