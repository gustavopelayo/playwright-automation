import {test, expect} from '@playwright/test';  

test('Fill actions', async ({page}) => {

    await page.goto('FeedBackForm.html');
    const nameField = page.getByRole('textbox', {
        name: 'name'
    });

    await nameField.fill('Gustavo Pelayo');

});