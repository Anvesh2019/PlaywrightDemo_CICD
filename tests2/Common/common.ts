import { Page } from 'playwright';


async function scrollByPixels(page: Page, x: number, y: number): Promise<void> {
  await page.evaluate(
    ([scrollX, scrollY]) => {
      window.scrollBy(scrollX, scrollY);
    },
    [x, y]
  );
}

