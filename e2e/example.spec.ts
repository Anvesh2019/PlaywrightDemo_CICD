import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { Page } from 'playwright';



test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Verify Scroll by pixels', async ({  }) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://amazon.in');

  // Scroll 0px horizontally and 500px vertically
  await scrollByPixels(page, 0, 500);

  await browser.close();
});

async function scrollByPixels(page: Page, x: number, y: number): Promise<void> {
  await page.evaluate(
    ([scrollX, scrollY]) => {
      window.scrollBy(scrollX, scrollY);
    },
    [x, y]
  );
}