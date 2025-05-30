import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  await page.goto('https://www.google.com/');
  await expect(page.locator('#rcnt')).toContainText('India');
});
