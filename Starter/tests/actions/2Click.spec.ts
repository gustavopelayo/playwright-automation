import {test, expect} from '@playwright/test';  

test('click actions', async ({page}) => {

await page.goto('FeedBackForm.html');

const submitButton = page.getByRole('button', {
    name: 'Submit',
    exact: true
});
    
await submitButton.click();
});


test('click action right', async ({page}) => {

await page.goto('FeedBackForm.html');

const submitButton = page.getByRole('button', {
    name: 'Submit',
    exact: true
});
    
await submitButton.click(
    {
        button: 'right',
        position: {
            x: 10,
            y: 10
        }
    }
);
});

test('click action with keydown', async ({page}) => {

    await page.goto('FeedBackForm.html');
    
    const improvementInput = page.getByLabel('Areas for improvement');

    const firstOption = improvementInput.getByRole('option').nth(0);
    const secondOption = improvementInput.getByRole('option').nth(1);
    
    await firstOption.click();

    await expect(improvementInput).toHaveValue('content');

    await secondOption.click({
        modifiers: ['Meta']
    });
    await expect(improvementInput).toHaveValues(['content', 'presentation']);

});