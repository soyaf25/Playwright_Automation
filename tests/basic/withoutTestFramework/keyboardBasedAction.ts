import{Browser, BrowserContext, Page, chromium, Locator} from "@playwright/test";

async function kyboardAction(){

    let browser :Browser = await chromium.launch({headless:false});
    let browserContext : BrowserContext = await browser.newContext();
    let page: Page = await browserContext.newPage();

    await page.goto('https://www.letskodeit.com/practice');
    await page.waitForTimeout(3000);

    await page.locator('#autosuggest').fill("soyaf");
    await page.waitForTimeout(3000);
    
    await page.locator('#autosuggest').click();
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(3000);

    await page.keyboard.press('Control+C');
    await page.waitForTimeout(3000);

    await page.locator('#name').first().click();
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(3000);

    await page.locator('#name').first().click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');
    await page.waitForTimeout(3000);

    const f= await page.locator('#autosuggest')
    await f.focus();
    await page.waitForTimeout(3000);

}
kyboardAction();