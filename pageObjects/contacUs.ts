import { Page } from "@playwright/test";

export class ContactUs {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async fillAllFields(
    firstName: string,
    lastName: string,
    email: string,
    comments: string
  ) {
    await this.page.getByPlaceholder("First Name").fill(firstName);
    await this.page.getByPlaceholder("First Name").fill(firstName);
    await this.page.getByPlaceholder("Last Name").fill(lastName);
    await this.page.getByPlaceholder("Email Address").fill(email);
    await this.page.getByPlaceholder("Comments").fill(comments);
  }
  async submitForm() {
    await this.page.click('input[type="submit"]');
  }
  async ResetForm() {
    await this.page.click('input[type="reset"]');
  }
}
