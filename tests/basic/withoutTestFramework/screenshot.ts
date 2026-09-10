import{Browser, BrowserContext, Page, chromium, Locator} from "@playwright/test";

async function screenshot(){
let browser : Browser = await chromium.launch({headless:false});
let browserContext: BrowserContext = await browser.newContext();
let page:Page = await browserContext.newPage();

await page.goto("https://www.letskodeit.com/practice");
const element = await page.locator('.course-name').nth(0);
// await element.screenshot({
//     path:'C:/Users/hp/Pictures/Screenshots/screenshota1.png',
//    // fullPage:true,
//     //fullPage:false,
// });

// everytime save as new screenshot with date 
const date= Date.now();
await page.screenshot({
    path:`C:/Users/hp/Pictures/Screenshots/screenshota_${date}.png`,
    fullPage:true,
    //fullPage:false,
});
    await page.close();
}
screenshot();