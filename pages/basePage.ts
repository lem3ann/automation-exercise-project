import { type Page, type Locator } from "@playwright/test";
export class BasePage {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  //   TEXTBOX
  getByTextBox(name: string): Locator {
    return this.page.getByRole("textbox", { name: name });
  }
  //   BUTTON
  getButton(name: string): Locator {
    return this.page.getByRole("button", { name: name });
  }
  //   GETBYPLACEHOLDER
  getByPlaceholder(name: string): Locator {
    return this.page.getByPlaceholder(name);
  }
}
