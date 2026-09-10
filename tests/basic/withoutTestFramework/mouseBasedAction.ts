import{chromium, Browser, BrowserContext, Page} from "@playwright/test";

async function mouseBasedAction(){

    let browser :Browser = await chromium.launch({headless:false});
    let browserContext :BrowserContext  = await browser.newContext();
    let page : Page = await browserContext.newPage();

    //double click
    // await page.goto('https://qa-practice.netlify.app/double-click');
    // await page.locator('#double-click-btn').dblclick();  

    // Right click (context click)
    // await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    // await page.getByText('right click me').nth(0).click({button:"right"})

    //mouse Hover action
        // await page.goto('https://www.flipkart.com/');
        // await page.waitForTimeout(3000);
        // await page.getByText('✕').click();
        // await page.waitForTimeout(3000);
        // await page.locator('.v1zwn27').nth(1).hover();

    // drag and drop
    // await page.goto('https://jqueryui.com/droppable/');
    // await page.locator('iframe').contentFrame().getByText('Drag me to my target').dragTo(await page.locator('iframe').contentFrame().locator('#droppable'));

    //Mouse move action
    // await page.goto('https://jqueryui.com/slider/');
    // await page.waitForTimeout(3000);
    // const frame= page.frameLocator('.demo-frame');
    // const slider = frame.locator('#slider');

    // let box=await slider.boundingBox();

    // if (box){
    //     await page.mouse.move(
    //         box.x + box.width/2,
    //         box.y + box.height/2, 
    //     );
    //     await page.mouse.down();
    //      await page.mouse.move(
    //         box.x + 200,
    //         box.y + box.height/2, 
    //     );

    // }

    //mouse wheel (scrol down)

//     await page.goto('https://www.flipkart.com/');
//     await page.waitForTimeout(3000);
//     await page.getByText('✕').click();
//     await page.waitForTimeout(3000);
//     await page.mouse.wheel(0,3000)

    //scroldown by specific element (scrollIntoViewIfNeeded)
       await page.goto('https://www.flipkart.com/');
       await page.waitForTimeout(3000);
       await page.getByText('✕').click();
     await page.waitForTimeout(3000);
       //const element =await page.locator('.fFtomn').nth(0);
     await page.locator('.fFtomn').nth(0).scrollIntoViewIfNeeded();

 }

mouseBasedAction();