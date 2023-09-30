import {Driver} from 'selenium-webdriver/chrome';
import {BasePage} from './BasePage';
import {Asurion} from './NavDropDownPageObject';
import { By } from 'selenium-webdriver/lib/by';
const page = new Asurion(); 
const fs = require('fs');

describe("Testing Repair Services", ()=> {
    test('Click Repair Services', async () => {
        await page.navigate();
        await page.getElement(page.RepServices);
        await page.click(page.RepServices);
        const cookieelement = await page.driver.findElement(page.CookieAccept);
        if (cookieelement) {
            await cookieelement.click();
        };
        let RepairServicesUrl = await page.driver.getCurrentUrl();
        expect (RepairServicesUrl).toBe("https://www.asurion.com/");    
        });

    test('Click Repair Services', async () => {
        await page.getElement(page.OurStores);
        await page.click(page.OurStores);
        let OurStoresUrl = await page.driver.getCurrentUrl();
        expect (OurStoresUrl).toBe("https://www.asurion.com/");    
        });

    test('Click Repair Services', async () => {
        await page.getElement(page.ProtectionPlans);
        await page.click(page.ProtectionPlans);
        let ProtectionPlansUrl = await page.driver.getCurrentUrl();
        expect (ProtectionPlansUrl).toBe("https://www.asurion.com/");    
        });

    test('Click Repair Services', async () => {
        await page.getElement(page.TechSupport);
        await page.click(page.TechSupport);
        let TechSupporturl = await page.driver.getCurrentUrl();
        expect (TechSupporturl).toBe("https://www.asurion.com/"); 
        await page.driver.quit();   
        });
});