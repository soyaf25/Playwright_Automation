import{Browser, BrowserContext, Page, chromium, Locator} from "@playwright/test";

async function screenshot(){
let browser : Browser = await chromium.launch({headless:false});
let browserContext: BrowserContext = await browser.newContext({
    recordVideo:{
        dir :'C:/Users/hp/Pictures/Camera Roll',
        size :{
            width:1200,
            height:720,
        }
    }
});
let page:Page = await browserContext.newPage();
       await page.goto('https://www.flipkart.com/');
       await page.waitForTimeout(3000);
       await page.getByText('✕').click();
     await page.waitForTimeout(3000);
       //const element =await page.locator('.fFtomn').nth(0);
     await page.locator('.fFtomn').nth(0).scrollIntoViewIfNeeded();

}screenshot();
