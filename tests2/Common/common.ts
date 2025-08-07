import { Page,Locator } from 'playwright';

export class common
{

 async function scrollByPixels(page: Page, x: number, y: number): Promise<void> {
  await page.evaluate(
    ([scrollX, scrollY]) => {
      window.scrollBy(scrollX, scrollY);
    },
    [x, y]
  );
}
 async function clickElement(locator: Locator): Promise<void> 
{
  await locator.click();
}

}