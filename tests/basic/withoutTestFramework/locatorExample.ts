import{Browser, chromium, BrowserContext, Page, Locator} from "@playwright/test";

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
    //await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

    //await page.close();

    //ID locator
  // const username:Locator = page.locator("input[id='login1']");
  // username.fill("soyaf")
   //optimised way to write the above code
   //await page.locator("input#login1").fill("soyaf");//ID locator replaced with #
   
   // Class locator
   //const email:Locator = page.locator("input[class='email-input']");
    //email.fill("soyaf@rediff.com")
    //optimised way to write the above code
    //await page.locator("input.email-input").fill("soyaf@rediff.com");//Class locator replaced with .

    // await page.close();

   // getByText locator
//    await page.goto('https://www.letskodeit.com/practice');
//    await page.getByText('Open Window').click();

   // getByPlaceholder locator
    // await page.goto('https://www.letskodeit.com/practice');
    // await page.getByPlaceholder('Start Typing...').fill('soyaf');

    //getByTitle
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // await page.getByTitle('3rd party ad content').click();

    // nth() loacator - used when multiple element match with the same locator
    // and we want a specific index element

    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator('input.inputs').nth(1).fill('soyaf');

    // //first() locator
    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator('input.inputs').first().fill('soyaf');

        //last() locator
    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator('input.inputs').last().fill('soyaf');

    // has-text() locator - find the element that contain specific word in it.
       //last() locator
    await page.goto('https://www.letskodeit.com/practice');
    await page.locator("button:has-text('Open Window')").click();
}
browserOpen();