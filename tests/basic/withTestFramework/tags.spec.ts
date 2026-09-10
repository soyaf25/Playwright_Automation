
import {test} from "@playwright/test";


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
