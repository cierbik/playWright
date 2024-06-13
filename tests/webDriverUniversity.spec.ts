import { test, expect } from "@playwright/test";
import { MainPage } from "../pageObjects/mainPage.spec";
import config from "../config.json";
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/index.html");
});

test("Navigate to Contact us section", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.sectionChoose(config.contactUs);
});
