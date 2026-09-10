import{Browser, chromium, BrowserContext, Page} from "@playwright/test";

async function browserOpen(){
    // to open browser
    //let browser:Browser = await chromium.launch();
    // to open browser in headless off mode
    let browser:Browser = await chromium.launch({headless : false});

    // to open in cognito mode
    let browsercontext : BrowserContext = await browser.newContext();

    // to open new page in browser
    let page: Page = await browsercontext.newPage();

    //to open any website or application in browser
    await page.goto('https://www.facebook.com/');

    //await page.close();
}
browserOpen();