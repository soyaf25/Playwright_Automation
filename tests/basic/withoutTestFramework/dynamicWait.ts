import{Browser, BrowserContext, Page, chromium, Locator} from "@playwright/test";

async function autoWaitInPl(){

    let browser :Browser = await chromium.launch({headless:false});
    let browserContext : BrowserContext = await browser.newContext();
    let page: Page = await browserContext.newPage();

    await page.goto('https://jqueryui.com/datepicker/');
    await page.waitForTimeout(3000);  // Static Timeout

    //Dynamic timeout 
    //waitFor method
     await page.goto('https://demoqa.com/dynamic-properties');
    // await page.locator('#visibleAfter').waitFor({state:'visible'});
    // console.log(await page.locator('#visibleAfter').isVisible());

    //waitForSelector method
    // const tab= await page.waitForSelector('#visibleAfter');
    // console.log(await page.locator('#visibleAfter').isVisible());    

    //Wait for loadstate
    await page.waitForLoadState('load');

}
autoWaitInPl();