import{chromium, Browser, BrowserContext, Page} from "@playwright/test";

async function mouseBasedAction(){

    let browser :Browser = await chromium.launch({headless:false});
    let browserContext :BrowserContext  = await browser.newContext();
    let page : Page = await browserContext.newPage();

    //File upload
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles('C:/Users/hp/Pictures/Screenshots/screenshot');
    await page.waitForTimeout(3000);
    await page.locator('#file-submit').click();



}