import {By, until, WebDriver, WebElement} from 'selenium-webdriver';
import { elementTextContains } from 'selenium-webdriver/lib/until';
import { BasePage } from './BasePage';
const fs = require('fs')

export class Asurion extends BasePage{     
    RepServices: By = By.id("GHNav-RepairServices");
    OurStores: By = By.id("GHNav-OurStores");
    ProtectionPlans: By = By.id("GHNav-ProtectionPlans");
    TechSupport: By = By.id("GHNav-TechSupport");
    CookieAccept: By = By.id("onetrust-accept-btn-handler");
    constructor() {
        super({url:"https://www.asurion.com"});
    }
};