import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { onlinerRepository } from "../objectsRepository/onliner.obj";

const defaultTimeout = 60000;

//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class OnlinerPage {

    //Locators      
    readonly onlinerElements = new onlinerRepository;

    public async Loaded(): promise.Promise<void> {
        //Check that element is both present in DOM and visible on screen
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.onlinerLogo), defaultTimeout, "Homepage not loaded");
    }

public async LinkPeople(name:string): promise.Promise<void> {
    let opinionclick = await this.onlinerElements.LinkOnPeoplePage;
    await browser.executeScript("argument[0].click", opinionclick.getwebelement());
    await browser.sleep(100);

}
    
public async PeoplePageOpens(name:string): promise.Promise<void> {
    await browser.wait(ExpectedConditions.urlIs("https://people.onliner.by/"), defaultTimeout, "Page not loaded");
    await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.PeoplePageOpens), defaultTimeout, "Page not loaded");
}

public async LinkOpinion(name:string): promise.Promise<void> {
    await this.onlinerElements.LinkOnOpinionPage.click();
}

public async OpinionPageOpens(name:string): promise.Promise<void> {
    await browser.wait(ExpectedConditions.urlIs("https://people.onliner.by/opinions"), defaultTimeout, "Page not loaded");
    await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.OpinionPageOpens), defaultTimeout, "Page not loaded");
}

public async LinkAuto(name:string): promise.Promise<void> {
    await this.onlinerElements.LinkOnAutoPage.click();
}

public async AutoPageOpens(name:string): promise.Promise<void> {
    await browser.wait(ExpectedConditions.urlIs("https://auto.onliner.by/"), defaultTimeout, "Page not loaded");
    await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.AutoPageOpens), defaultTimeout, "Page not loaded");
}

public async LinkOnForum(name:string): promise.Promise<void> {
    await this.onlinerElements.LinkOnForum.click();
}

public async ForumPageOpens(name:string): promise.Promise<void> {
    await browser.wait(ExpectedConditions.urlIs("https://forum.onliner.by/"), defaultTimeout, "Page not loaded");
    await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.ForumPageOpens), defaultTimeout, "Page not loaded");
}


}