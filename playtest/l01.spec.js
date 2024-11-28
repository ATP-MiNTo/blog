// Test sign up option
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Email').fill('athipat.arip@gmail.com');
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('super1234');
  await page.getByLabel('Password', { exact: true }).press('Tab');
  await page.getByLabel('Password confirmation').fill('super1234');
  await page.getByRole('button', { name: 'Sign up' }).click();
});