import {By, until, WebDriver, WebElement} from 'selenium-webdriver';
import { elementTextContains } from 'selenium-webdriver/lib/until';
import { BasePage } from './BasePage';
const fs = require('fs')

export class Asurion extends BasePage{     
    phone: By = By.xpath('//a[@id="cta_phonerepair_mid"]');
    ShortBatteryLife: By = By.id("fixit-experience-phone-short-battery-life");
    NoProtection: By = By.xpath('//a[@id="cta_repair_mid"]');
    ChangeDevice: By = By.xpath('//a[text()="Change"]');
    CookieAccept: By = By.id("onetrust-accept-btn-handler");
    constructor() {
        super({url:"https://www.asurion.com"});
    }
};