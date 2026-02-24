import {test, expect} from '@playwright/test';  


test('Select options', async ({page}) => {

    await page.goto('FeedBackForm.html');
    const improvementInput = page.getByLabel('Areas for improvement');

    await improvementInput.selectOption('content');
    
    await expect(improvementInput).toHaveValue('content');

    await improvementInput.selectOption(['presentation', 'timing']);
    
    await expect(improvementInput).toHaveValues(['presentation', 'timing']);

});