@smoke
Feature: Onliner footer testcases

     Scenario: Search on homepage

        Given I am on Onliner homepage
        When enter "i9-9900k" in Search field
        Then I see "Intel Core i9-9900K (BOX)" item

    Scenario: Close search popup

        Given I am on Onliner homepage
        And "i9-9900k" entered in Search field
        When I click "Close" button
        Then "Search" popup closed


    Scenario: Open "Каталог" page from header

        Given I am on Onliner homepage
        When I click link Каталог in header on page
        Then I can see page Каталог