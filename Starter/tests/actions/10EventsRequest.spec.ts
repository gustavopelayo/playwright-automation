import { test, expect } from '@playwright/test'

test.use(
    { baseURL: '' })
test ('Monitor request from inside a page - playwright', async ({ page }) => {

    page.on('request', addRequest);

    const requests: Request[] = [];
    function addRequest(request: Request) {
        requests.push(request);
    }

    await page.goto('https://playwright.dev/');

    const requestUrls = requests.map(request => request.url());
    console.log(requestUrls);
})

test.fail('Check for failed requests', async ({ page }) => {
    page.on('requestfailed', request => {
        expect(request,`failed request ${request.url()} with ${request.failure()?.errorText}`).toBeUndefined();
    });
    await page.goto('https://localhost:5001/Events.html');
    const requestButton = page.getByRole('button', {
        name: 'Call wrong server'
    });
    await requestButton.click();
    await page.waitForTimeout(500);

})