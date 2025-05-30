import { test, expect } from '@playwright/test';

test('Github signin', async ({ page, request }) => {
 
  await page.goto('https://github.com/');
 
 await page.getByRole('link', { name: 'Sign in' }).click();
 await page.getByRole('textbox', { name: 'Username or email address' }).click();
 await page.getByRole('textbox', { name: 'Username or email address' }).fill('Anandg99');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});