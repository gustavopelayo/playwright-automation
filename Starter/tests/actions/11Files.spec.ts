import { test, expect } from '@playwright/test'
import { join } from 'path/win32';

test('Upload a file - practice', async ({ page }) => {
    await page.goto('Files.html');
    
    const filename = 'testFile.txt';
    const filename2 = 'testFile2.txt';
    const fileInput = page.locator('#fileInput');

    await fileInput.setInputFiles(
        { name: filename
        , mimeType: 'text/plain'
        , buffer: Buffer.from('This is a test file for Playwright upload functionality.') }
    );
    await fileInput.setInputFiles(
        { name: filename2
        , mimeType: 'text/plain'
        , buffer: Buffer.from('This is another test file for Playwright upload functionality.') }
    );
    await expect(page.locator('#fileListContainer')).toContainText(filename);
    await expect(page.locator('#fileListContainer')).toContainText(filename2);
    
});

test('Download a file - practice', async ({ page }) => {

  await page.goto('Files.html')

    const downloadPromise = page.waitForEvent('download');
    await page.getByText('Download document').click();
    const download = await downloadPromise;

    const path = join(__dirname, '..', '..', 'test-results', 'files', download.suggestedFilename())

    await download.saveAs(path)

});