import {test, expect} from '@playwright/test';  

test(' Saving storage - correct loading', async ({page}) => {

await page.goto('FeedbackForm.html');
const someName = 'Gustavo Pelayo';
const nameField = page.getByRole('textbox', {
    name: 'name'
});
await nameField.fill(someName);

await page.getByRole('button', {
    name: 'Save Progress'
}).click();

await page.reload();

await expect(nameField).toHaveValue(someName);
});