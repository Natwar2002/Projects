import { test, expect} from '@playwright/test';

test('Should render the button', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('button'); // wait for the button to be rendered

    // take a ss
    await page.screenshot({ path: `ss-${page.viewportSize().width}.png`});
    
    await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
})