import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { OnlinerPage } from "../pageObjects/onliner.page";

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

    //Given expression, can only be used with Given in .feature file
    this.Given(/^I am on Onliner homepage$/, async () => {
        await browser.navigate().to(browser.params.onlinerByURL);
        await onliner.Loaded();
    });

    this.Then(/^I click link Люди on page/, async (value) => {
        await onliner.LinkPeople(value);
    });

    this.Then(/^Page Люди opened/, async (value) => {
        await onliner.PeoplePageOpens(value);
    });

    this.Then(/^I click link Мнения on page/, async (value) => {
        await onliner.LinkOpinion(value);
    });

    this.Then(/^Page Мнение opened/, async (value) => {
        await onliner.OpinionPageOpens(value);
    });

    this.Then(/^I click link Автомобили on page/, async (value) => {
        await onliner.LinkAuto(value);
    });

    this.Then(/^Page Автомобили opened/, async (value) => {
        await onliner.AutoPageOpens(value);
    });

    this.Then(/^I click Все разделы форума link/, async (value) => {
        await onliner.LinkOnForum(value);
    });

    this.Then(/^Forum opened/, async (value) => {
        await onliner.ForumPageOpens(value);
    });

}