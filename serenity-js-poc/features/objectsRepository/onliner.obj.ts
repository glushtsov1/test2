import { by, element } from 'protractor';

//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class onlinerRepository {
    readonly onlinerLogo = element(by.css(".onliner_logo"));
    readonly LinkOnPeoplePage = element(by.cssContainingText('.footer-3-button', 'Все новости о людях'));
    readonly PeoplePageOpens = element(by.className("project-navigation__item project-navigation__item_primary project-navigation__item_active")).element(by.cssContainingText('.project-navigation__sign', 'Люди'));
    readonly LinkOnOpinionPage = element(by.cssContainingText('.footer-3-button', 'Все мнения'));
    readonly OpinionPageOpens= element(by.className("project-navigation__item project-navigation__item_primary project-navigation__item_active")).element(by.cssContainingText('.project-navigation__sign', 'Мнения'));
    readonly LinkOnAutoPage = element(by.cssContainingText('.footer-3-button', 'Все новости об автомобилях'));
    readonly AutoPageOpens= element(by.className("project-navigation__item project-navigation__item_primary project-navigation__item_active")).element(by.cssContainingText('.project-navigation__sign', 'Авто'));
    readonly LinkOnForum = element(by.className("footer-3-links all-news-link"));
    readonly ForumPageOpens = element(by.cssContainingText('.m-title', 'Форум'));

}