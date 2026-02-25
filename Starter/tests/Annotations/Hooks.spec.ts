import {test, expect} from '@playwright/test';  
import { assert } from 'console';

test.beforeAll(async ({page}) => {
    console.log('This runs before all tests');
    // You can perform setup tasks here, such as logging in or initializing data
});

test.beforeEach(async ({page}) => {
    await page.goto('FeedBackForm.html');
});

test('Fill actions', async ({page}) => {

    const nameField = page.getByRole('textbox', {
        name: 'name'
    });
    await nameField.fill('Gustavo');


});
test('Key actions', async ({page}) => {

    const nameField = page.getByRole('textbox', {
        name: 'name'
    });
    await nameField.fill('Gustavo');

    await nameField.press('P'); 


    await expect(nameField).toHaveValue('GustavoP');

});
    
    