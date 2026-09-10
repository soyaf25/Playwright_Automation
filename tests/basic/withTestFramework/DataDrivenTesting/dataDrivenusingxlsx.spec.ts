import {test,expect} from "@playwright/test";
import { ExcelReader } from "./ExcelReader";

const loginData= ExcelReader.readExcel("./test-data/LoginData.xlsx","loginData");


test(`verify saucedemologin ${loginData}`,async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData[0].username);
    await page.getByPlaceholder('Password').fill(loginData[0].password);
    await page.locator('#login-button').click();

    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle('Swag Labs');
    
});