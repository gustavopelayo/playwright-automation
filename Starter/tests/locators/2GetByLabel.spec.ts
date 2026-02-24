import {test, expect} from '@playwright/test';  
import { assert } from 'console';

test('Fill actions', async ({page}) => {
    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', {
        name: 'name'
    });
    await nameField.fill('Gustavo');


});
test('Key actions', async ({page}) => {
    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', {
        name: 'name'
    });
    await nameField.fill('Gustavo');

    await nameField.press('P'); 


    await expect(nameField).toHaveValue('GustavoP');

});
    
    