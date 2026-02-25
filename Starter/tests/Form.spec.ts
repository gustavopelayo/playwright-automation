import { test, expect } from '@playwright/test';

async function fillForm(page, { name = '', email = '', comment = '', checked = false } = {}) {
    const nameInput = page.getByLabel('Name');
    const emailInput = page.getByLabel('Email');
    const checkboxButton = page.getByRole('checkbox');
    const commentsInput = page.getByLabel('Comment');
    await nameInput.fill(name);
    await emailInput.fill(email);
    await commentsInput.fill(comment);
    if (checked) {
        await checkboxButton.check();
    } else {
        await checkboxButton.uncheck();
    }
}
test.describe('Feedback Form Tests', () => {
    test('submits form with required fields', async ({ page }) => {
        let formSubmitted = false;
        page.on('dialog', async dialog => {
            await dialog.accept();
            formSubmitted = true;
        });
        await page.goto('FeedBackForm.html');
        await fillForm(page, {
            name: 'John Doe',
            email: 'john.doe@example.com',
            comment: 'This is a test comment for the feedback form.',
            checked: true
        });
        await page.getByRole('button', { name: 'Submit' }).click();
        expect(formSubmitted).toBeTruthy();
    });

    test('clears form on Clear Progress', async ({ page }) => {
        let formCleared = false;
        page.on('dialog', async dialog => {
            await dialog.accept();
            formCleared = true;
        });
        await page.goto('FeedBackForm.html');
        await fillForm(page, {
            name: 'John Doe',
            email: 'john.doe@example.com',
            comment: 'This is a test comment for the feedback form.',
            checked: true
        });
        await page.getByRole('button', { name: 'Clear Progress' }).click();
        expect(formCleared).toBeTruthy();
    });

    test('does not submit with empty fields', async ({ page }) => {
        let formSubmitted = false;
        page.on('dialog', async dialog => {
            await dialog.accept();
            formSubmitted = true;
        });
        await page.goto('FeedBackForm.html');
        await fillForm(page, {
            name: '',
            email: '',
            comment: '',
            checked: false
        });
        await page.getByRole('button', { name: 'Submit' }).click();
        expect(formSubmitted).toBeFalsy();
    });
});