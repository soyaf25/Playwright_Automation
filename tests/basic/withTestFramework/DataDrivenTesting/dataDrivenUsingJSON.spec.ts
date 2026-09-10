import{test, expect} from "@playwright/test";
import loginData from "../../../../test-data/loginwithscenario.json";



test(`verify saucedemologin ${loginData.validLogin}`,async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData.validLogin.username);
    await page.getByPlaceholder('Password').fill(loginData.validLogin.password);
    await page.locator('#login-button').click();

    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle('Swag Labs');
    
});

test(`verify saucedemoinvalidlogin  ${loginData.invalidLogin}`,async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData.invalidLogin.username);
    await page.getByPlaceholder('Password').fill(loginData.invalidLogin.password);
    await page.locator('#login-button').click();

    await page.waitForTimeout(3000);

    await expect(page.locator("//h3[@data-test ='error']")).toBeVisible();
    
});

