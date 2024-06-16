import { test, expect } from "@playwright/test";
import { MainPage } from "../pageObjects/mainPage.spec";
import { ContactUs } from "../pageObjects/contacUs.spec";
import config from "../config.json";

test("Navigate to Contact us section", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/index.html");
  const mainPage = new MainPage(page);
  await mainPage.sectionChoose(config.contactUs);
  //When new window is open after clicking element playwright dont find any elems
});

test("ContactUs form complementation", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Contact-Us/contactus.html"
  );
  const contactUS = new ContactUs(page);
  await contactUS.fillAllFields(
    "Dawid",
    "Dawid",
    "Dawid@dsacas.pl",
    "Dawidsadasd31231242cxzczxczxczxcz"
  );
  await contactUS.submitForm();
});
