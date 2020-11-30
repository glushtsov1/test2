@smoke
Feature: Onliner showcase

    Just little demo showcase


    Scenario: Open "Мнения" page

        Given I am on Onliner homepage
        When I click link Мнения on page
        Then Page Мнения opened

    Scenario: Open "Автомобили" page

        Given I am on Onliner homepage
        When I click link Автомобили on page
        Then Page3 Автомобили opened

    Scenario: Open "Forum" page

        Given I am on Onliner homepage
        When I click Все разделы форума link
        Then Forum opened

    Scenario: Open "Люди" page

        Given I am on Onliner homepage
        When I click link Люди on page
        Then Page Люди opened