Feature: Checking all the functionalities in homepage
In order to practise webdriver
As a developer
I want to write some programs

Scenario Outline: Click on about us
Given I go to "demoqa_website_url" on "<browser>"
And I click on "about_us_menu"
Then "text" is displayed

Examples:
|   browser           |
|   firefox           |
|   chrome            |