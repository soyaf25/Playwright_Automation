import{Browser, BrowserContext, Page, chromium, Locator} from "@playwright/test";

async function iframeLocator(){

    let browser :Browser = await chromium.launch({headless:false});
    let browserContext : BrowserContext = await browser.newContext();
    let page: Page = await browserContext.newPage();

    await page.goto('https://jqueryui.com/datepicker/');
    await page.waitForTimeout(3000);

    // iframe using frame locator

    // const frame = page.frameLocator(".demo-frame");
    // await frame.locator('.hasDatepicker').click();
    // await frame.locator('.hasDatepicker').fill('27/08/2026');

    // iframe select by name

    //locate frame by URL

    const frame = page.frame({url:'https://jqueryui.com/resources/demos/datepicker/default.html'});
    await frame ?.locator('.hasDatepicker').click(); 

    //Get available frames
    const f= page.frames();
    console.log(f.length);

}
iframeLocator();