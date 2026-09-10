import { chromium,Browser, BrowserContext, Page, Locator} from "@playwright/test";

async function handlingDropdown()
{
    let browser :Browser = await chromium.launch({headless:false});
    let browserContext :BrowserContext  = await browser.newContext();
    let page : Page = await browserContext.newPage();

    await page.goto('https://www.letskodeit.com/practice');

    // Fetch all option from dropdown
    const option = await page.locator('#carselect').allTextContents();
    for(let c of option )
    {
        console.log(c);
    }

    //selct dropdown by value :selectOPtion()
     await page.locator('#carselect').selectOption('Honda');
     await page.waitForTimeout(3000);

    //select by index from dropdown
    await page.locator('#carselect').selectOption({index:1}); //index always start with 0
    await page.waitForTimeout(3000);

    // select by visible text
     await page.locator('#carselect').selectOption({label:'BMW'});
     await page.waitForTimeout(3000);    

    //get selected value from dropdown
   let value = await page.locator('#carselect').inputValue();
    console.log(value);
    
    // select multiple value 
    await page.locator('#multiple-select-example').selectOption(['Peach', 'Orange','Apple']);
    await page.waitForTimeout(3000);  

}
handlingDropdown();