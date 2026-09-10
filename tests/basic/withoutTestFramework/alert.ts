import{Browser, BrowserContext, Page, chromium, Locator} from "@playwright/test";

async function alerHandleExample(){

    let browser :Browser = await chromium.launch({headless:false});
    let browserContext : BrowserContext = await browser.newContext();
    let page: Page = await browserContext.newPage();

    await page.goto('https://www.letskodeit.com/practice');


    page.on('dialog',async dialog=>{
        console.log(await dialog.type());
        console.log(await dialog.message());
        await dialog.accept();
    });

    await page.locator('#confirmbtn').click();
}
alerHandleExample();
