import {Driver} from 'selenium-webdriver/chrome';
import {BasePage} from './BasePage';
import {Asurion} from './ClaimsPageObject';
const page = new Asurion(); 
const fs = require('fs')

describe("Testing Claims", ()=> {
    test('Click Claims', async () => {
        await page.navigate();
        await page.driver.manage().window().fullscreen(); 
        await page.getElement(page.Claims);
        await page.click(page.Claims);
        let ClaimsUrl = await page.driver.getCurrentUrl();
        expect (ClaimsUrl).toBe("https://www.asurion.com/claims/");    
        });

    test('Click Verizon Home Device Protect Button', async () => {
        const cookieelement = await page.driver.findElement(page.CookieAccept);
        if (cookieelement) {
            await cookieelement.click();
        };
        await page.click(page.VerizonHomeDeviceProtect);
        await page.driver.sleep(2000);
        await page.tabSwitch();  
        await page.driver.quit();
    });     
});