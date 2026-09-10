//Annotations in playwright
//1.test()
//2.test.skip()
//3.test.only()
//4.test.fail()
//5 test.fixme()
//6. test.slow()

import {test} from "@playwright/test"

test('open letskodeit website',async({page})=>{

    await page.goto('https://www.letskodeit.com/practice');
});

// test.skip('verify new window is opening by clicking on new window button',async({page})=>{

//     await page.goto('https://www.letskodeit.com/practice');
//     await page.locator('#openwindow').click();

// });

// test.only('verify new window is opening by clicking on new window button',async({page})=>{

//     await page.goto('https://www.letskodeit.com/practice');
//     await page.locator('#openwindow').click();

// });

// test.fail('verify new window is opening by clicking on new window button',async({page})=>{

//     await page.goto('https://www.letskodeit.com/practice');
//     await page.locator('#Openwindow').click();

// });



test('verify textbox 1 is working', async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await page.locator('#autosuggest').fill('Soyaf');
})