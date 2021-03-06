Feature: As a ecs user,  Create a event 
Scenario Outline: User should create a event

Given open ecs application
Then user enter valid username "<username>"
Then user enter valid password "<password>"
When click on signin button 
Then user succesfully reached to homepage
When user able to see homepage
Then user click on add event
When user can see new eventpage 
Then user choose event type as
Then user enter company name as "<companyname>"
Then user enter date and time as "<datewithtime>"
Then user choose final quarter as "<quater>"
Then user choose final year as "<year>"
Then user choose source url as "<url>"
Then user enter live phonecall as "<phonecall>"
Then user enter passcode as "<passcode>"
Then user enter replay livecall as "<livecall>"
Then user enter replay passcode as "<livepass>"
Then User enter live webcasturl as "<webcasturl>"
Then user enter replay webcast url as "<livewebcasturl>"
When user click on next button
Then user need to wait for event create
Then user click on procesed data
Then user check the event is created or not by "<checkcompanyname>"
Then user able to logout
Examples:
| username| password | companyname   | datewithtime     | quater | year | url         | phonecall | passcode | livecall | livepass | webcasturl | livewebcasturl | checkcompanyname |
| shetty  | dnis@123 |   Apple       | 2021-10-27 06:55 |    Q2  | 2021 | www.abc.com |           |          |          |          |            |                |    APPLE         |