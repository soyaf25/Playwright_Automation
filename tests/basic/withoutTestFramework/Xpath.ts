// x Path stands for XML path language. Xpath is a selenium techniq that 
// is used to navigate through the HTML structure of webpage
//it is a syntax or language that makes finding an element on a web page using XXML path expression

//#types of xpath
//1. absoute xpath 2. Relative xpath



import{Browser, chromium, BrowserContext, Page} from "@playwright/test";

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
   // await page.goto('https://www.facebook.com/');

    //await page.close();

    //1.absolute xpath
    //it is a direct way to find element from the root node
    // it is always begind with single forward slash (\)
    //it is not recommnded to use this xpath method

    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator("/html/body/div[1]/div[2]/div[2]/div/div/div/div/div[2]/div[3]/fieldset/input").fill('soyaf');

    //2. Relative xpth - most used xpath method
    //relative x path strat from middle of the HTML DOM structure and always starts with 
    //double forward slash(//)
    //syntax: = tagname[@Attribute='value']

    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator("//button[@id='openwindow']").click();

    //Xpath text() function 
    // it is locate the element by text

    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator("//a[text()='Open Tab']").click()

    // and method in Xpath
    //it is used when we want to locate the elememt with combining two different locator condituion
    // it will work only when both the condition is true

   // await page.goto('https://www.letskodeit.com/practice');
   // await page.locator("//button[@id='openwindow'and text()='Open Window']").click();

    // or method in Xpath
    //it is used when we want to locate the elememt with combining two different locator condituion
    // it will work  when either one out of both the condition is true

    //await page.goto('https://www.letskodeit.com/practice');
    //await page.locator("//button[@id='ope nwindow'or text()='Open Window']").click();

    // Xpath starts-with
    // Syntax //tagname[start-with(attribute,value)]

    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // //await page.locator("//a[starts-with(text(),'Forgot')]").click();
    // await page.locator("//button[starts-with(@class,'sign')]").click();

    //xpath contains() 
    //the contains feature has ability to find the element ith partial text .

    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    await page.locator("//a[contains(text(),'Rediffmail')]").click();

}
browserOpen();