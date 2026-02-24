import {test, expect} from '@playwright/test';  

test('get by text - practice', async ({page}) => {
    await page.goto('FeedBackForm.html');

    const title = await page.getByText('Feedback Form').first();

    await expect(title).toBeVisible();
});

test('get by text - error messages', async ({page}) => {


    await page.goto('FeedBackForm.html');

    const emailValidationMessage = await page.getByText('Invalid email format');
    await expect(emailValidationMessage).toBeHidden();

    await page.getByRole('textbox', {
        name: 'email'
    }).fill('invalid@mail');
    await expect(emailValidationMessage).toBeVisible();

   
    await page.getByRole('textbox', {
        name: 'email'
    }).fill('valid@email.com');
    await expect(emailValidationMessage).toBeHidden(); 
});

test('get by text - hidden elements', async ({page}) => {

    await page.goto('FeedBackForm.html');

    const hiddenButton = await page.getByText('hidden feature');
    await expect(hiddenButton).toBeHidden();

    const hideButtonText = await hiddenButton.textContent();
    console.log('Hidden button text content:', hideButtonText);
});