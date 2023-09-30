import {By, until, WebDriver, WebElement} from 'selenium-webdriver';
import { elementTextContains } from 'selenium-webdriver/lib/until';
import { BasePage } from './BasePage';
const fs = require('fs')

export class Asurion extends BasePage{     
    Claims: By = By.xpath('//button[@id="claims-button"]'); 
    ATTHomeTechProtection: By = By.xpath('(//a[@class="md:rounded-lg"])[3]');
    VerizonHomeDeviceProtect: By = By.xpath('(//a[@class="md:rounded-lg"])[1]');
    VerizonHomeDeviceProtect1: By = By.className("provider");
    EmailInput: By = By.id("email");
    LogInButton: By = By.xpath('(//a[@class="_blank"])[4]');
    EmailButton: By = By.xpath('//label[@for="email"]');
    ContinueButton: By = By.xpath('//button[@id="continue-with-otp-button"]');
    CookieAccept: By = By.id("onetrust-accept-btn-handler");
    constructor() {
        super({url:"https://www.asurion.com"});
    }
    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles(); 
        await this.driver.switchTo().window(myTabs[1]); 
        await this.driver.sleep(3000);
        fs.writeFile(`${__dirname}/verison.png`, 
        await this.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.log(e); 
        else console.log("a picture is worth a thousand words"); 
    }); 

        await this.driver.close(); 
        await this.driver.switchTo().window(myTabs[0]); 
    }
};