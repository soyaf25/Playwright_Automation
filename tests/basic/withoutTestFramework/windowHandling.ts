import{Browser, BrowserContext, Page, chromium, Locator} from "@playwright/test";

async function windowHandling(){

    let browser :Browser = await chromium.launch({headless:false});
    let browserContext : BrowserContext = await browser.newContext();
    let page: Page = await browserContext.newPage();

    await page.goto('https://www.letskodeit.com/practice');
    await page.waitForTimeout(3000);
    // window handle
    const [child] = await Promise.all([
        browserContext.waitForEvent('page'),
        page.locator('#openwindow').click()
    ]);

    await page.waitForTimeout(3000);
    // Apply wait for new window
    await child.waitForLoadState();
    //perform action on child window
    await child.getByText('INTERVIEW').click();
    await page.waitForTimeout(3000);

    //get title of child window
    console.log(await child.title());
    child.close(); //close the child window

    await page.waitForTimeout(3000);

    // switch back to parent window
    await page.bringToFront();
    await page.waitForLoadState();
    await page.waitForTimeout(3000);
    await page.locator('.inputs').first().fill('soyaf');

    //Handle Tab
    const [tab] = await Promise.all([
        browserContext.waitForEvent('page'),
        page.locator('#opentab').click()

    ]);

    //apply new window for load
    await tab.waitForLoadState();

}
windowHandling();