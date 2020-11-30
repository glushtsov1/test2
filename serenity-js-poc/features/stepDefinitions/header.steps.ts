import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { OnlinerPage } from "../pageObjects/header.page";

export = function cventSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

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

    //Can only be used with When, Then, And expressions in .feature file
    this.Then(/^enter "(.*?)" in Search field/, async (value) => {
    await onliner.Search(value);
    });

    this.Then(/^"(.*?)" entered in Search field/, async (value) => {
        await onliner.Search(value);
        });
    

    this.Then(/^I see "(.*?)" item/, async (value) => {
        await onliner.VerifyItemIsVisible(value);
    });

    this.Then(/^I click "(.*?)" button/, async (value) => {
        await onliner.SearchClose(value);
    });

    this.Then(/^"(.*?)" popup closed/, async (value) => {
        await onliner.elementclose(value);
    })

    this.Then(/^I click link Каталог in header on page/, async (value) => {
        await onliner.LinkOnCatalog(value);
    });

    this.Then(/^I can see page Каталог/, async (value) => {
        await onliner.CatalogPageOpens(value);
    });

}