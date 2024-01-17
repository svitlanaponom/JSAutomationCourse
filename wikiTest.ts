import { test, expect } from '@playwright/test';
import { WikipediaPage } from './checkWikipediaPage.ts'

test.describe('Wiki Test automation article', () => {

    test.beforeEach(async ({ page }) => {
        const checkWikipediaPage = new WikipediaPage(page);
        await checkWikipediaPage.goto();
    });

    test('article header', async ({ page }) => {
        const checkWikipediaPage = new WikipediaPage(page);
        await expect(page).toHaveTitle(/Test automation/);
        await checkWikipediaPage.getHeaderText;
        await checkWikipediaPage.getBannerText;
    });

    test('has languages dropdown', async ({ page }) => {
        const checkWikipediaPage = new WikipediaPage(page);
        await checkWikipediaPage.getAnotherLang.click();
        await expect(checkWikipediaPage.showSuggestedLang).toBeVisible;
        await checkWikipediaPage.getUkrainianLang.first();
    });

    test('popup on hover AutomatedQA', async ({ page }) => {
        const checkWikipediaPage = new WikipediaPage(page);
        await checkWikipediaPage.getAutomatedQALink.hover();
        await expect(checkWikipediaPage.showSmartBear).toBeVisible;
        await expect(checkWikipediaPage.changePreviewSett).toBeVisible;
    });

    test('search field', async ({ page }) => {
        const checkWikipediaPage = new WikipediaPage(page);
        await checkWikipediaPage.searchWiki.fill('QA');
        await checkWikipediaPage.searchButton.click();
        await expect(checkWikipediaPage.searchResult).toBeVisible;
    });

})
