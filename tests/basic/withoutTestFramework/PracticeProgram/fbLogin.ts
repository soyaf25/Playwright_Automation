import { chromium,Browser, BrowserContext, Page, Locator} from "@playwright/test";


async function fbLogin()
{
    let browser : Browser = await chromium.launch({headless:false});

    let browserContext: BrowserContext= await browser.newContext();

    let page : Page= await browser.newPage();

    await page.goto('https://www.facebook.com/');
    await page.getByRole('textbox', { name: 'Email address or mobile number' }).click();
    await page.locator('input#_r_3_').fill('8308018914');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.locator("//input[@id='_r_7_']").fill('93827154');
    await page.locator('button#loginbutton').click();
}
fbLogin();