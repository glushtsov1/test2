import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { OnlinerPage } from "../pageObjects/footer.page";

export = function cventSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(6 * 100);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Loading Event Page Object
    let onliner = new OnlinerPage;

    //Unique identifier    
    let uniqueIndentifier: string;

    //Swagger API Caller

    //Chai-as-Promised setup
    chai.use(require('chai-as-promised'));

    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

    //Step Definitions


    this.Then(/^I click link about company in footer on page/, async (value) => {
        await onliner.LinkOnCompany(value);
    });

    this.Then(/^I can see page О компании/, async (value) => {
        await onliner.CompanyPageOpened(value);
    });

    this.Then(/^I click link Реклама in footer on page/, async (value) => {
        await onliner.LinkOnadvertising(value);
    });

    this.Then(/^I  can see page Реклама/, async (value) => {
        await onliner.advertisingPageOpens(value);
    });

    this.Then(/^I click link Размещение в каталоге in footer on page/, async (value) => {
        await onliner.LinkOnadvertising(value);
    });

    this.Then(/^I can see page Размещение в каталоге/, async (value) => {
        await onliner.advertisingPageOpens(value);
    });
}