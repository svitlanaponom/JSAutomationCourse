import { test, expect } from '@playwright/test';

test.describe('Menu home page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://expz.menu/58b668de-2a36-4e9c-a6fc-bf45ab905d69');
    });

    test('Menu header', async ({ page }) => {
        await expect(page).toHaveTitle(/El Batangueño/);
        await page.getByRole('img', { name: 'restaurant logo' });
        await page.getByText('Миколаїв, вул. Бузника,').first();
    });

    test('Menu sidebar', async ({ page }) => {
        await page.getByRole('heading', { name: 'Розділи меню:' });
        await page.getByRole('link', { name: 'Безалкогольні напої' });
        await page.getByRole('link', { name: 'Алкогольні напої', exact: true });
    });

    test('Contact info', async ({ page }) => {
        await page.getByRole('heading', { name: 'Про заклад' });
        await expect(page.locator('div').filter({ hasText: /^АдресаМиколаїв, вул\. Бузника, 5$/ }).first()).toBeVisible;
        await page.getByRole('main').locator('div').filter({ hasText: 'Робочі годиниПн08:00 — 23:00' }).nth(3);
        await expect(page.locator('div').filter({ hasText: /^Телефон\+380 99 11 11 111$/ }).first()).toBeVisible;
        await expect(page.locator('div').filter({ hasText: /^Доставка\+380 93 27 33 031$/ }).first()).toBeVisible;
    });

})