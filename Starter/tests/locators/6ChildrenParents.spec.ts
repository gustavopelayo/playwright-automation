import {test, expect} from '@playwright/test';  

test('Child localtors - practice', async ({page}) => {
    await page.goto('')
    
    const servicesList = page.getByRole('list');
    const serviceItems = await servicesList.getByRole('listitem').all();
    expect(serviceItems.length).toBeGreaterThan(0);

    // with css locators
    const serviceItemsWithCss = await servicesList.locator('ul > li').all();
    for (const item of serviceItemsWithCss) {
        console.log(await item.textContent());
    }
});

test('Parent locators - practice', async ({page}) => {
    await page.goto('')

    const acceptCookiesButton = page.getByTestId('accept-cookies');
    const cookieBanner = acceptCookiesButton.locator('..');

    await acceptCookiesButton.click();
    await expect(cookieBanner).not.toBeVisible();
});

test('N-th element locator - practice', async ({page}) => {

    await page.goto('');

    const buttons = page.getByRole('button');
    const acceptCookiesButton = buttons.nth(0);
    const declineCookiesButton = buttons.nth(1);

    await acceptCookiesButton.click();
    await expect(declineCookiesButton).not.toBeVisible();
});

test('N-th element locators - practice', async ({page}) => {
    
    await page.goto('');
    const listItems = page.getByRole('listitem');
    
    const firstItem = listItems.first();
    const thirdItem = listItems.nth(2);
    console.log(await firstItem.textContent());
    console.log('Third item text:', await thirdItem.textContent());

});