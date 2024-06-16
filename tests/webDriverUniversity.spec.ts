import { test, expect } from "@playwright/test";
import { PageManager } from "../pageObjects/pageManager";
import { MainPage } from "../pageObjects/mainPage";
import { ContactUs } from "../pageObjects/contacUs";
import config from "../config.json";

test("Navigate to Contact us section", async ({ page }) => {
  const pm = new PageManager(page);
  await page.goto("https://www.webdriveruniversity.com/index.html");
  await pm.mainPageView().sectionChoose(config.contactUs);
  //When new window is open after clicking element playwright dont find any elems
});

test("ContactUs form complementation", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Contact-Us/contactus.html"
  );
  const pm = new PageManager(page);
  await pm
    .contactUsView()
    .fillAllFields(
      "Dawid",
      "Dawid",
      "Dawid@dsacas.pl",
      "Dawidsadasd31231242cxzczxczxczxcz"
    );
  await pm.contactUsView().submitForm();
});
