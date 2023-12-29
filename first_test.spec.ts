import { test, expect } from '@playwright/test';

test.describe('Wiki Test automation article', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Test_automation');
  });

  test('article header', async ({ page }) => {
    await expect(page).toHaveTitle(/Test automation/);

    await page.getByRole('link', { name: 'Wikipedia The Free' });

    await page.getByRole('link', { name: 'Banner logo Participate in' })

  });

  test('has languages dropdown', async ({ page }) => {
    await page.getByLabel('Go to an article in another').click();

    await expect(page.locator('div').filter({ hasText: 'Suggested languages' }).nth(1)).toBeVisible;

    await page.getByRole('link', { name: 'Українська' }).first();

  });

  test('popup on hover AutomatedQA', async ({ page }) => {
    await page.getByRole('link', { name: 'AutomatedQA' }).hover();

    await expect(page.locator('div').filter({ hasText: 'SmartBear Software is an' }).nth(1)).toBeVisible;

    await expect(page.getByRole('link', { name: 'Change page preview settings' })).toBeVisible;
  });

  test('search field', async ({ page }) => {
    await page.getByPlaceholder('Search Wikipedia').fill('QA');

    await page.getByRole('button', { name: 'Search' }).click();

    await expect(page.getByRole('link', { name: 'QA Topics referred to by the' })).toBeVisible;
  });

  test('text tests', async ({ page }) => {
    const Roles = page.getByText('Roles', { exact: true });

    await Roles.scrollIntoViewIfNeeded();

    await page.getByText('Roles', { exact: true }).screenshot();
  });

})
