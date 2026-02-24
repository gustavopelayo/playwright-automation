import {test, expect} from '@playwright/test';  


test('Cookies inside actions', async ({page}) => {
    await page.goto('');

    await page.context().addCookies([{
            name: 'cookieConsent',
            value: 'accepted',
            url: page.url(),
        }]);

    await page.reload();
    const cookieBanner = page.locator('#cookieBanner');
    await expect(cookieBanner).toBeHidden();
});