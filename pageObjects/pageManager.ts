import { Page, expect } from "@playwright/test";
import { MainPage } from "../pageObjects/mainPage";
import { ContactUs } from "../pageObjects/contacUs";

export class PageManager {
  private readonly page: Page;
  private readonly mainPage: MainPage;
  private readonly contactUs: ContactUs;

  constructor(page: Page) {
    this.page = page;
    this.mainPage = new MainPage(page);
    this.contactUs = new ContactUs(page);
  }
  mainPageView() {
    return this.mainPage;
  }
  contactUsView() {
    return this.contactUs;
  }
}
