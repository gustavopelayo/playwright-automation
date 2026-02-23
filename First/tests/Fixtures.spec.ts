import { test, expect } from '@playwright/test';


test('close cookies banner', async ({ page })  => {

await page.goto('https://www.udemy.com/');
await page.getByRole('button', { name: 'OK', exact: true }).click();

})
test('is cookie banner still visible', async ({ page })  => {
  await page.goto('https://www.udemy.com/');

})

test('Browser fixtures', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.udemy.com/');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.close();
})
