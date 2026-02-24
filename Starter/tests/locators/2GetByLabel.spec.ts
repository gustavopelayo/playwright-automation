import {test, expect} from '@playwright/test';  

test('get by label practice - inside forms', async ({page}) => {
    await page.goto('FeedBackForm.html');

    const name = page.getByLabel('name');
    await name.fill('Gustavo');

    const email = page.getByLabel('email');
    await email.fill('pelayo@gmail.com');

});
    