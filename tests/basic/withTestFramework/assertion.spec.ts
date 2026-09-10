import{test, expect} from "@playwright/test";

// Assertion are used to verify that actual result matches with expected result

test(' verify saucedemologin',async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle('Swag Labs');

});

//hard assertion
test(' verify saucedemologin with incorrect password',async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await expect(page.getByPlaceholder('Ustyz')).toBeVisible(); //after hard assertion faile test wont executr further step

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('test');
    await page.locator('#login-button').click();

    await page.waitForTimeout(3000);
    await expect(page.locator("//h3[@data-test ='error']")).toBeVisible();
    
});


//Soft assertion
test(' verify saucedemologin with incorrect password2',async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await expect.soft(page.getByPlaceholder('Ustyz')).toBeVisible(); //after hard assertion faile test wont executr further step

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('test');
    await page.locator('#login-button').click();

    await page.waitForTimeout(3000);
    await expect.soft(page.locator("//h3[@data-test ='error']")).toBeVisible();
    
});