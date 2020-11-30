import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { onlinerRepository } from "../objectsRepository/footer.obj";

const defaultTimeout = 60000;

//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class OnlinerPage {

    //Locators      
    readonly onlinerElements = new onlinerRepository;

    public async LinkOnCompany(name:string): promise.Promise<void> {
        await this.onlinerElements.LinkOnCompany.click();
    }

    public async CompanyPageOpened(name:string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.urlIs("https://blog.onliner.by/about"), defaultTimeout, "Page not loaded");
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.CompanyPageOpens), defaultTimeout, "Page not loaded");
    }

    public async LinkOnadvertising(name:string): promise.Promise<void> {
        await this.onlinerElements.LinkOnadvertising.click();
    }

    public async advertisingPageOpens(name:string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.urlIs("https://b2breg.onliner.by/advertising"), defaultTimeout, "Page not loaded");
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.advertisingPageOpens), defaultTimeout, "Page not loaded");
    }

    public async LinkOnadvertisingcatalog(name:string): promise.Promise<void> {
        await this.onlinerElements.LinkOnadvertisingcatalog.click();
    }

    public async advertisingcatalogPageOpens(name:string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.urlIs("https://b2breg.onliner.by/reg"), defaultTimeout, "Page not loaded");
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.advertisingcatalogPageOpens), defaultTimeout, "Page not loaded");
    }
}