import {test, expect} from '@playwright/test';  

test.use({
    storageState: {
        cookies: [],
        origins: [
            {
                origin: 'http://localhost:5001',
                localStorage: [
                    {
                    name:'name',
                    value:'Gustavo Pelayo'
            }]
            }
        ]   
    }
})

test('Storage - load from configuration', async ({page}) => {
await page.goto('FeedbackForm.html');
const nameField = page.getByRole('textbox', {
    name: 'name'  

});
await expect(nameField).toHaveValue('Gustavo Pelayo');
});

test('Storage - configure inside the test', async ({page}) => {
await page.goto('FeedbackForm.html');

await page.evaluate(() => {
    localStorage.setItem('email', 'gustavo.pelayo@example.com');
});
await page.reload();
const emailField = page.getByRole('textbox', {
    name: 'email'  
});
await expect(emailField).toHaveValue('gustavo.pelayo@example.com');
    
});