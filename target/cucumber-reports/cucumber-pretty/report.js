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
formatter.step({
  "line": 25,
  "name": "user need to wait for event create",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user click on procesed data",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user check the event is created or not by \"\u003ccheckcompanyname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user able to logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
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
        "livewebcasturl",
        "checkcompanyname"
      ],
      "line": 30,
      "id": "as-a-ecs-user,--create-a-event;user-should-create-a-event;;1"
    },
    {
      "cells": [
        "shetty",
        "dnis@123",
        "Apple",
        "2021-10-27 06:55",
        "Q2",
        "2021",
        "www.abc.com",
        "",
        "",
        "",
        "",
        "",
        "",
        "APPLE"
      ],
      "line": 31,
      "id": "as-a-ecs-user,--create-a-event;user-should-create-a-event;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
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
  "name": "user enter company name as \"Apple\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enter date and time as \"2021-10-27 06:55\"",
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
formatter.step({
  "line": 25,
  "name": "user need to wait for event create",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user click on procesed data",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user check the event is created or not by \"APPLE\"",
  "matchedColumns": [
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user able to logout",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateEventStep.loginToDaggr()"
});
formatter.result({
  "duration": 12618338100,
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
  "duration": 178665800,
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
  "duration": 238882200,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.submitLogin()"
});
formatter.result({
  "duration": 5257701900,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.succuessfullHomepage()"
});
formatter.result({
  "duration": 9794400,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.seeHomepage()"
});
formatter.result({
  "duration": 6952000,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.clickAddEvent()"
});
formatter.result({
  "duration": 2861045800,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.see_new_event_page()"
});
formatter.result({
  "duration": 6062200,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.chooseeventtype()"
});
formatter.result({
  "duration": 345849200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple",
      "offset": 28
    }
  ],
  "location": "CreateEventStep.entercompanyname(String)"
});
formatter.result({
  "duration": 710341600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-10-27 06:55",
      "offset": 29
    }
  ],
  "location": "CreateEventStep.dateandtime(String)"
});
formatter.result({
  "duration": 648188300,
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
  "duration": 253329900,
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
  "duration": 239308200,
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
  "duration": 147599000,
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
  "duration": 107634700,
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
  "duration": 108517500,
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
  "duration": 109355400,
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
  "duration": 46304800,
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
  "duration": 124743700,
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
  "duration": 116205300,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.nextbutton()"
});
formatter.result({
  "duration": 43225263100,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.waitforevents()"
});
formatter.result({
  "duration": 10005154500,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.user_clik_proceeddata()"
});
formatter.result({
  "duration": 2652174000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "APPLE",
      "offset": 43
    }
  ],
  "location": "CreateEventStep.check_event_created(String)"
});
formatter.result({
  "duration": 53196800,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStep.logout()"
});
formatter.result({
  "duration": 1059723600,
  "status": "passed"
});
});