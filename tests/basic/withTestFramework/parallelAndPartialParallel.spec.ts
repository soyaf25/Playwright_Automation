import {test} from "@playwright/test";

test.describe('log in test',async()=>{
    test.describe.configure({mode:"parallel"});

    test ('log in to rediff application with invalid email', async({page})=>{

        await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
        await page.locator('#login1').fill('soyaftashildar');
        await page.locator('#password').fill('Soyaf@123');
        await page.locator('.signin-btn').click();

    })

        test ('log in to rediff application with invalid password', async({page})=>{

        await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
        await page.locator('#login1').fill('soyaftashildar');
        await page.locator('#password').fill('S@123');
        await page.locator('.signin-btn').click();

    })

})

test.describe('UI based testcases',async()=>{
    test.describe.configure({mode:"serial"});
    
test('open letskodeit website @smoke',async({page})=>{

    await page.goto('https://www.letskodeit.com/practice');
});

test('verify new window is opening by clicking on new window button @sanity, @smoke',async({page})=>{

    await page.goto('https://www.letskodeit.com/practice');
    await page.locator('#openwindow').click();
});

test('verify textbox 1 is working',{tag:['@So', '@sanity']}, async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await page.locator('#autosuggest').fill('Soyaf');
})

})