import { Page, expect } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async sectionChoose(section: string) {
    await this.page.locator(".section-title").getByText(section).click();
  }
}
