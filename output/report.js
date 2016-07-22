$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/cucumber/testcases/resource/homepage.feature");
formatter.feature({
  "id": "checking-all-the-functionalities-in-homepage",
  "description": "In order to practise webdriver\r\nAs a developer\r\nI want to write some programs",
  "name": "Checking all the functionalities in homepage",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "checking-all-the-functionalities-in-homepage;click-on-all-tabs;;2",
  "description": "",
  "name": "Click on all tabs",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"demoqa_website_url\" on \"firefox\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"about_us_menu\"",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "\"text\" is displayed",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "arguments": [
    {
      "val": "demoqa_website_url",
      "offset": 9
    },
    {
      "val": "firefox",
      "offset": 33
    }
  ],
  "location": "Test.navigateToUrl(String,String)"
});
formatter.result({
  "duration": 11891514972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "about_us_menu",
      "offset": 12
    }
  ],
  "location": "Test.select_tab(String)"
});
formatter.result({
  "duration": 2534349878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 1
    }
  ],
  "location": "Test.text_present(String)"
});
formatter.result({
  "duration": 1889292482,
  "status": "passed"
});
formatter.scenario({
  "id": "checking-all-the-functionalities-in-homepage;click-on-all-tabs;;3",
  "description": "",
  "name": "Click on all tabs",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"demoqa_website_url\" on \"chrome\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"about_us_menu\"",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "\"text\" is displayed",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "arguments": [
    {
      "val": "demoqa_website_url",
      "offset": 9
    },
    {
      "val": "chrome",
      "offset": 33
    }
  ],
  "location": "Test.navigateToUrl(String,String)"
});
formatter.result({
  "duration": 6107739967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "about_us_menu",
      "offset": 12
    }
  ],
  "location": "Test.select_tab(String)"
});
formatter.result({
  "duration": 915144798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 1
    }
  ],
  "location": "Test.text_present(String)"
});
formatter.result({
  "duration": 85527766,
  "status": "passed"
});
});