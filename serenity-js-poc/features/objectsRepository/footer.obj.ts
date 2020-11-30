import { by, element } from 'protractor';

//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class onlinerRepository {
    readonly LinkOnCompany = element(by.xpath("//li/a[contains(text(), 'О компании')]"));
    readonly CompanyPageOpens = element(by.xpath("//h1[contains(text(), 'О сайте')]"));
    readonly LinkOnadvertising = element(by.xpath("//li/a[contains(text(), 'Реклама')]"));
    readonly advertisingPageOpens = element(by.className('b2breg-advertising__header'));
    readonly LinkOnadvertisingcatalog = element(by.xpath("//li/a[contains(text(), 'Размещение в каталоге')]"));
    readonly advertisingcatalogPageOpens = element(by.xpath("//div[contains(text(), 'Дешево, быстро и удобно')]"));
}