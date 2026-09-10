import { chromium,Browser, BrowserContext, Page, Locator} from "@playwright/test";

async function navigation()
{

    let browser : Browser = await chromium.launch({headless:false});
    let browserContext : BrowserContext = await browser.newContext();
    let page:Page =  await browserContext.newPage();

//     await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
//     await page.getByText('Forgot password?').click();
//      await page.waitForTimeout(3000);

// // Navigation
//     await page.goBack();
//     await page.waitForTimeout(3000);

//     await page.goForward();
//     await page.waitForTimeout(3000);

//     await page.reload();
//     await page.waitForTimeout(3000);

//Visibility

    // //isEnabled
    await page.goto('https://www.letskodeit.com/practice');
    // let textBox = await page.getByPlaceholder('Enabled/Disabled Field');
    // console.log(await textBox.isEnabled());

    // console.log(await textBox.isDisabled());
    
    // // isDisabled()
    // await page.locator('input#disabled-button').click();
    // console.log(await textBox.isDisabled());

//    isVisible(),isHidden()
    let textBox1 : Locator = await page.getByPlaceholder('Hide/show example');
    console.log(textBox1.isVisible());
     await page.locator('#hide-textbox').click();
     console.log(await textBox1.isHidden());

    
    console.log(await textBox1.isVisible());

}

navigation();