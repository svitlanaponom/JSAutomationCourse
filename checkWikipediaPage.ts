import { expect, type Locator, type Page } from '@playwright/test';

export class WikipediaPage {
    readonly page: Page;
    readonly getHeaderText: Locator;
    readonly getBannerText: Locator;
    readonly getAnotherLang: Locator;
    readonly getUkrainianLang: Locator;
    readonly showSuggestedLang: Locator;
    readonly getAutomatedQALink: Locator;
    readonly showSmartBear: Locator;
    readonly changePreviewSett: Locator;
    readonly searchWiki: Locator;
    readonly searchButton: Locator;
    readonly searchResult: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getHeaderText = page.getByRole('link', { name: 'Wikipedia The Free' });
        this.getBannerText = page.getByRole('link', { name: 'Banner logo Participate in' });
        this.getAnotherLang = page.getByLabel('Go to an article in another');
        this.getUkrainianLang = page.getByRole('link', { name: 'Українська' });
        this.showSuggestedLang = page.locator('div').filter({ hasText: 'Suggested languages' }).nth(1);
        this.getAutomatedQALink = page.getByRole('link', { name: 'AutomatedQA' });
        this.showSmartBear = page.locator('div').filter({ hasText: 'SmartBear Software is an' }).nth(1);
        this.changePreviewSett = page.getByRole('link', { name: 'Change page preview settings' });
        this.searchWiki = page.getByPlaceholder('Search Wikipedia');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.searchResult = page.getByRole('link', { name: 'QA Topics referred to by the' });
    }

    async goto() {
        await this.page.goto('https://en.wikipedia.org/wiki/Test_automation');
    }
}