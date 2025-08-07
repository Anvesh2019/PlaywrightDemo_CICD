import { Locator,Page } from "@playwright/test";
export class PageActions {
  
public async clickElement(locator: Locator): Promise<void> 
{
    await locator.click();
}

  public async EnterText(locator: Locator, text: string): Promise<void> 
  {
    await locator.fill(text);
  }

  public async  scrollByPixels(page: Page, x: number, y: number): Promise<void> {
    await page.evaluate(
      ([scrollX, scrollY]) => {
        window.scrollBy(scrollX, scrollY);
      },
      [x, y]
    );
  }
  
public async selectDropdownOption(  page: Page,  selector: string,  value: string): Promise<void> 
{
  await page.selectOption(selector, { value });
}
  
}