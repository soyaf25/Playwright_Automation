import {test} from "@playwright/test"

//hooks in playweright
//1. beforeAll()
//2. beforeEach()
//3.afterEach()
//4.afterAll()
//5. testinfo with hooks provide information about current test

test.afterAll(async()=>{
    console.log("AAfter all");
});


test.afterEach(async({page},testInfo:any) =>{
    console.log(testInfo.title);
    console.log(testInfo.status);
    console.log(testInfo.duration);
})



test('open letskodeit website',async({page})=>{

    await page.goto('https://www.letskodeit.com/practice');
});

test('open google website',async({page})=>{

    await page.goto('https://www.google.com/');
});

test.beforeAll(async()=>{
    console.log("before all");
});

test.beforeEach(async()=>{
    console.log("before Each");
});
