import{test, expect} from "@playwright/test";

const loginData = [
    {
        username : "standard_user",
        password : "secret_sauce",
        check    : "valid"
    },

    {
        username : "standard_user",
        password : "test",
        check    : "invalid"
    },

    {
        username : "test",
        password : "secret_sauce",
        check    : "invalid"
    }
   
]
for(const data of loginData)
{
test(`verify saucedemologin ${data.username},${data.password}`,async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(data.username);
    await page.getByPlaceholder('Password').fill(data.password);
    await page.locator('#login-button').click();

    await page.waitForTimeout(3000);

    if(data.check=="valid"){
    await expect(page).toHaveTitle('Swag Labs');
    }
    else{
    await expect(page.locator("//h3[@data-test ='error']")).toBeVisible();
    }

});
}