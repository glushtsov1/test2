import { by, element } from 'protractor';

//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class onlinerRepository {
    readonly fastSearch = element(by.className("fast-search__input"));
    readonly SearchPopupClose = element(by.css(".search__close"));
    readonly searchPopupIframe = element(by.css(".modal-iframe"));
    readonly LinkOnCatalogPage = element(by.cssContainingText('.b-main-navigation__text', 'Каталог'));
    readonly CatalogPageOpens = element(by.cssContainingText('.catalog-navigation__title', 'Каталог'));
    readonly LinkOnNews = element(by.className('.b-main-navigation__text'));
    readonly NewsDropdownOpens = element(by.className('.b-main-navigation__dropdown b-main-navigation__dropdown_visible'));
}