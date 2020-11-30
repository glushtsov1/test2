@smoke
Feature: Onliner footer testcases

    Scenario: Open catalog page from footer  
        
        Given I am on Onliner homepage
        When I click link about company in footer on page
        Then I can see page О компании

    Scenario: Open advertising page from footer  
        
        Given I am on Onliner homepage
        When I click link Реклама in footer on page
        Then I can see page Реклама

 Scenario: Open advertising in catalog page from footer  
        
        Given I am on Onliner homepage
        When I click link Размещение в каталоге in footer on page
        Then I can see page Размещение в каталоге
