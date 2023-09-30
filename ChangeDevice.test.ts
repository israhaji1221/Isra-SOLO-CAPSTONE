import {Driver} from 'selenium-webdriver/chrome';
import {BasePage} from './BasePage';
import {Asurion} from './ChangeDevicePageObject';
import { By } from 'selenium-webdriver/lib/by';
const page = new Asurion(); 
const fs = require('fs');

describe("Testing to change the original repair services", ()=> {
    test('Click iPhone and confirm destination', async () => {
        await page.navigate();
        await page.driver.manage().window().fullscreen(); 
        const cookieelement = await page.driver.findElement(page.CookieAccept);
        if (cookieelement) {
            await cookieelement.click();
        };
        await page.getElement(page.phone);
        await page.click(page.phone);
        let phoneUrl = await page.driver.getCurrentUrl();
        expect (phoneUrl).toBe("https://www.asurion.com/");    
    });

    test('Click short battery life for the repair', async () => {
        await page.getElement(page.ShortBatteryLife);
        await page.click(page.ShortBatteryLife);
        let ShortBatteryLifeUrl = await page.driver.getCurrentUrl();   
        expect (ShortBatteryLifeUrl).toBe("https://www.asurion.com/home/repair/phone/");    
    });  
    
    test('Click no protection plan', async () => { 
        await page.getElement(page.NoProtection);
        await page.click(page.NoProtection);
        let NoProtectionUrl = await page.driver.getCurrentUrl();
        expect (NoProtectionUrl).toBe("https://www.asurion.com/home/repair/phone/claims/?repair_type=4");    
    });       

    test('Click change device', async () => { 
        await page.getElement(page.ChangeDevice);
        await page.click(page.ChangeDevice);
        let ChangeDeviceUrl = await page.driver.getCurrentUrl();
        expect (ChangeDeviceUrl).toBe("https://my.asurion.com/tech-care/repairs?device=9&fulfillment=VisitStore");
        await page.driver.quit();
    });
});