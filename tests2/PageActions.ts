import { Locator,Page } from "@playwright/test";
export class PageActions {
  
//Navigate to URL
public async navigateTo(page: Page, url: string): Promise<void> 
{
  await page.goto(url, { waitUntil: 'domcontentloaded' });
}

//Wait for Element
public async waitForElement(page: Page, selector: string): Promise<void> 
{
  await page.waitForSelector(selector, { state: 'attached' });
}
//Get Screenshot
public async takeScreenshot(page: Page, filePath: string): Promise<void> 
{
  await page.screenshot({ path: filePath, fullPage: true });
}

//Click on Element
public async clickElement(locator: Locator): Promise<void> 
{
    await locator.click();
}
//Enter text in text box
  public async EnterText(locator: Locator, text: string): Promise<void> 
  {
    await locator.fill(text);
  }
//Vertical scrolling
  public async scrollByPixels(page: Page, x: number, y: number): Promise<void> {
    await page.evaluate(
      ([scrollX, scrollY]) => {
        window.scrollBy(scrollX, scrollY);
      },
      [x, y]
    );
  }
  //Horizantal scrolling
  public async scrollHorizantalByPixels(page: Page, x: number, y: number): Promise<void> {
    await page.evaluate(
      ([scrollX, scrollY]) => {
        window.scrollBy(scrollX, scrollY);
      },
      [x, y]
    );
  }
  
//select option from dropdown
public async selectDropdownOption(  page: Page,  selector: string,  value: string): Promise<void> 
{
  await page.selectOption(selector, { value });
}
  
}