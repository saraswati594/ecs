$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hp/eclipse-workspace/Digital-Nirvana/DN_Process/src/main/java/Features/CreateEvent.feature");
formatter.feature({
  "line": 1,
  "name": "As a ecs user,  Create a event",
  "description": "",
  "id": "as-a-ecs-user,--create-a-event",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "User should create a event",
  "description": "",
  "id": "as-a-ecs-user,--create-a-event;user-should-create-a-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open ecs application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter valid username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enter valid password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user succesfully reached to homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user able to see homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click on add event",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user can see new eventpage",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user choose event type as",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enter company name as \"\u003ccompanyname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enter date and time as \"\u003cdatewithtime\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user choose final quarter as \"\u003cquater\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user choose final year as \"\u003cyear\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user choose source url as \"\u003curl\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user enter live phonecall as \"\u003cphonecall\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user enter passcode as \"\u003cpasscode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enter replay livecall as \"\u003clivecall\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user enter replay passcode as \"\u003clivepass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter live webcasturl as \"\u003cwebcasturl\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user enter replay webcast url as \"\u003clivewebcasturl\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user click on next button",
  "keyword": "When "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "as-a-ecs-user,--create-a-event;user-should-create-a-event;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "companyname",
        "datewithtime",
        "quater",
        "year",
        "url",
        "phonecall",
        "passcode",
        "livecall",
        "livepass",
        "webcasturl",
        "livewebcasturl"
      ],
      "line": 27,
      "id": "as-a-ecs-user,--create-a-event;user-should-create-a-event;;1"
    },
    {
      "cells": [
        "shetty",
        "dnis@123",
        "kis",
        "2021-10-25 10:30",
        "Q2",
        "2021",
        "www.abc.com",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 28,
      "id": "as-a-ecs-user,--create-a-event;user-should-create-a-event;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "User should create a event",
  "description": "",
  "id": "as-a-ecs-user,--create-a-event;user-should-create-a-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open ecs application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter valid username \"shetty\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enter valid password \"dnis@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user succesfully reached to homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user able to see homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click on add event",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user can see new eventpage",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user choose event type as",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enter company name as \"kis\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enter date and time as \"2021-10-25 10:30\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user choose final quarter as \"Q2\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user choose final year as \"2021\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user choose source url as \"www.abc.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user enter live phonecall as \"\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user enter passcode as \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enter replay livecall as \"\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user enter replay passcode as \"\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter live webcasturl as \"\"",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user enter replay webcast url as \"\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateEventStep.loginToDaggr()"
});
formatter.result({
  "duration": 8053478300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shetty",
      "offset": 27
    }
  ],
  "location": "CreateEventStep.enterUserName(String)"
});
formatter.result({
  "duration": 182756000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dnis@123",
      "offset": 27
    }
  ],
  "location": "CreateEventStep.enter_Pass(String)"
});
formatter.result({
  "duration": 195422600,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.submitLogin()"
});
formatter.result({
  "duration": 7594454800,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.succuessfullHomepage()"
});
formatter.result({
  "duration": 13504200,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.seeHomepage()"
});
formatter.result({
  "duration": 8041800,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.clickAddEvent()"
});
formatter.result({
  "duration": 3284113400,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.see_new_event_page()"
});
formatter.result({
  "duration": 7558700,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.chooseeventtype()"
});
formatter.result({
  "duration": 239064900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kis",
      "offset": 28
    }
  ],
  "location": "CreateEventStep.entercompanyname(String)"
});
formatter.result({
  "duration": 758504100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-10-25 10:30",
      "offset": 29
    }
  ],
  "location": "CreateEventStep.dateandtime(String)"
});
formatter.result({
  "duration": 717599800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Q2",
      "offset": 30
    }
  ],
  "location": "CreateEventStep.choofinalquarter(String)"
});
formatter.result({
  "duration": 195406700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 27
    }
  ],
  "location": "CreateEventStep.choosefinalyear(String)"
});
formatter.result({
  "duration": 183771400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.abc.com",
      "offset": 27
    }
  ],
  "location": "CreateEventStep.choosesourceurl(String)"
});
formatter.result({
  "duration": 117622800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "CreateEventStep.enterlivephonecall(String)"
});
formatter.result({
  "duration": 77455800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "CreateEventStep.enterpasscode(String)"
});
formatter.result({
  "duration": 79174300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "CreateEventStep.enterreplaylivecall(String)"
});
formatter.result({
  "duration": 78984500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "CreateEventStep.enterreplaypasscode(String)"
});
formatter.result({
  "duration": 36203100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "CreateEventStep.enterlivewebcasturl(String)"
});
formatter.result({
  "duration": 74840600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "CreateEventStep.enterreplaywebcasturl(String)"
});
formatter.result({
  "duration": 85008500,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.nextbutton()"
});
formatter.result({
  "duration": 43599146900,
  "status": "passed"
});
});