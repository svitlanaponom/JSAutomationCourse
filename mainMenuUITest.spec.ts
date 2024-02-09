import { test, expect } from '@playwright/test';

test.describe('Main menu page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://expz.menu/58b668de-2a36-4e9c-a6fc-bf45ab905d69/menu?menuId=3295');
    });

    test('Main menu header', async ({ page }) => {
        await expect(page).toHaveTitle(/El Batangueño/);
        await page.getByRole('img', { name: 'restaurant logo' });
        await page.getByText('Миколаїв, вул. Бузника,').first();
        await page.getByRole('button', { name: 'Закладки порожні' });
        await page.getByRole('button', { name: 'UA' });
        await page.getByRole('button', { name: 'UA' }).click();
        await expect(page.getByText('UAEN')).toBeVisible;
    });

    test('Main menu sidebar', async ({ page }) => {
        await expect(page.locator('label span')).toBeVisible;
        await page.getByRole('link', { name: 'МЕНЮ' });
        await page.locator('li').filter({ hasText: /^Summer time$/ });
        await page.locator('li').filter({ hasText: /^Сніданки$/ });
        await page.locator('li').filter({ hasText: /^Закуски$/ });
        await page.locator('li').filter({ hasText: /^Супи$/ });
        await page.locator('li').filter({ hasText: /^Салати$/ });
        await page.locator('li').filter({ hasText: /^Основні страви$/ });
        await page.locator('li').filter({ hasText: /^Пасти$/ });
        await page.locator('li').filter({ hasText: /^Фаст-Фуд$/ });
        await page.locator('li').filter({ hasText: /^Роли$/ });
        await page.locator('li').filter({ hasText: /^Сети ролів$/ });
        await page.locator('li').filter({ hasText: /^Десерти$/ });
        await page.locator('li').filter({ hasText: /^Для діток$/ });
        await page.getByRole('link', { name: 'Безалкогольні напої' });
        await page.getByRole('link', { name: 'Алкогольні напої', exact: true });

    });

    test('Main menu banner', async ({ page }) => {
        await page.getByRole('img', { name: 'Солоденьке' }).click();
        await expect(page.getByRole('img', { name: 'Солоденьке' }).nth(1)).toBeVisible;
        await expect(page.locator('div').filter({ hasText: /^Солоденьке$/ }).nth(1)).toBeVisible;
        await expect(page.locator('div').filter({ hasText: 'Переглянути' }).nth(3)).toBeVisible;
    });
})