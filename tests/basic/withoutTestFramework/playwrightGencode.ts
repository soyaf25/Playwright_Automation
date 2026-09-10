import { chromium,Browser, BrowserContext, Page, Locator,  test, expect} from "@playwright/test";


async function fbLogin()
{
    let browser : Browser = await chromium.launch({headless:false});

    let browserContext: BrowserContext= await browser.newContext();

    let page : Page= await browser.newPage();

   // await page.goto('https://www.facebook.com/');
//     await page.locator('input#_r_3_').fill('8308018914');
//     await page.locator("//input[@id='_r_7_']").fill('93827154');
//     await page.locator('button#loginbutton').click();

  await page.goto('https://www.facebook.com/');
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).click();
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('8308018914');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('93827154');
  await page.getByRole('button', { name: 'Log in' }).click();


}
fbLogin();