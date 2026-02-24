import {test, expect} from '@playwright/test';  

test('get by role - heading', async ({page}) => {
    await page.goto('http://localhost:5001');

    const servicesHeading = await page.getByRole('heading', {
        name:'our services'
    });

    await expect(servicesHeading).toBeVisible();

});

test('get by role - list', async ({page}) => {
    await page.goto('');
  
    const serviceList = page.getByRole('list');
    await expect(serviceList).toBeVisible();

    const serviceItems = await serviceList.getByRole('listitem').all();
    for (const item of serviceItems) {
        const itemText = await item.textContent();
        expect(itemText).toBeTruthy();

    }
});

test('get by role - button', async ({page}) => {
    await page.goto('');
  
    const acceptCookiesButton = page.getByRole('button', {
        name: 'Accept',
        exact: true
    }); 
        const declineCookiesButton = page.getByRole('button', {
        name: 'Decline',
        exact: true
    }); 
    await acceptCookiesButton.click();

    await expect(acceptCookiesButton).not.toBeVisible();
});

test('get by role - link', async ({page}) => {
    await page.goto('');


    const feedbackFormLink = page.getByRole('link', {
        name: 'Go to Feedback Form',
        exact: true
    });
       const acceptCookiesButton = page.getByRole('button', {
        name: 'Accept',
        exact: true
    }); 
    await acceptCookiesButton.click();
    await feedbackFormLink.click();

    const url = page.url();
    expect(url).toContain('FeedBack');

 });

