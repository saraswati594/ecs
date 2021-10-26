package stepDefinitions;


import java.awt.AWTException;

import org.testng.Assert;

import base.Base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.CreateEvent;
import pages.Login;

public class CreateEventStep extends Base {

	Login login;
	CreateEvent createEvent;

	@Given("open ecs application")
	public void loginToDaggr() throws InterruptedException {
		initialization();
		login = new Login(driver);
		Thread.sleep(1000);
	}

	@Then("user enter valid username \"([^\"]*)\"$")
	public void enterUserName(String username) {

		login.enterUsername(username);
	}

	@Then("user enter valid password \"([^\"]*)\"$")
	public void enter_Pass(String password) {
		login.enterPassword(password);
	}

	@When("click on signin button")
	public void submitLogin() throws InterruptedException {
		login.entersignin();
		createEvent = new CreateEvent(driver);
		// Thread.sleep(1000);
	}

	@Then("user succesfully reached to homepage")
	public void succuessfullHomepage() {
		
		Assert.assertEquals(driver.getTitle(), "ECS-Event Calendaring System");
	}

	@When("user able to see homepage")
	public void seeHomepage() {
		Assert.assertEquals("https://sqa.ecs.digital-nirvana.com/home.php", driver.getCurrentUrl());

	}

	@Then("user click on add event")
	public void clickAddEvent() {
		createEvent.clickEvent();
	}

	@When("user can see new eventpage")
	public void see_new_event_page() {
		Assert.assertEquals("https://sqa.ecs.digital-nirvana.com/add_event_data.php", driver.getCurrentUrl());
	}

	@Then("user choose event type as")
	public void chooseeventtype() throws InterruptedException {
		createEvent.enterEventType();
		
		
	}

	@Then("user enter company name as \"([^\"]*)\"$")
	public void entercompanyname(String cn) throws InterruptedException {
		createEvent.enterCompanyName(cn);
	}

	@Then("user enter date and time as \"([^\"]*)\"$")
	public void dateandtime(String dat) throws InterruptedException {
		createEvent.enterDate(dat);
		Thread.sleep(200);
		createEvent.clickDone();
	}

	@Then("user choose final quarter as \"([^\"]*)\"$")
	public void choofinalquarter(String cfq) {
		createEvent.enterQuarter(cfq);
	}

	@Then("user choose final year as \"([^\"]*)\"$")
	public void choosefinalyear(String cfy) {
		createEvent.enterYear(cfy);
	}

	@Then("user choose source url as \"([^\"]*)\"$")
	public void choosesourceurl(String csu) {
		createEvent.enterUrl(csu);
	}

	@Then("user enter live phonecall as \"([^\"]*)\"$")
	public void enterlivephonecall(String elpc) {
		createEvent.enterLiveCall(elpc);
	}

	@Then("user enter passcode as \"([^\"]*)\"$")
	public void enterpasscode(String ep) {
		createEvent.enterPasscode(ep);
	}

	@Then("user enter replay livecall as \"([^\"]*)\"$")
	public void enterreplaylivecall(String erlc) {
		createEvent.enterReplayCall(erlc);
	}

	@Then("user enter replay passcode as \"([^\"]*)\"$")
	public void enterreplaypasscode(String erp) {
		createEvent.enterReplayPasscode(erp);
	}

	@Then("User enter live webcasturl as \"([^\"]*)\"$")
	public void enterlivewebcasturl(String elwc) {
		createEvent.enterLiveWebcast(elwc);
	}

	@Then("user enter replay webcast url as \"([^\"]*)\"$")
	public void enterreplaywebcasturl(String erwc) {
		createEvent.enterReplayLiveWebcast(erwc);
	}

	@When("user click on next button")
	public void nextbutton() {
		createEvent.enterSend();
	}
	@Then("user need to wait for event create")
	public void waitforevents() throws InterruptedException {
		createEvent.waitfortime();
	}
	
	@Then("user click on procesed data")
	public void user_clik_proceeddata() {
		createEvent.clickproceed();
	}
	
	@Then("user check the event is created or not by \"([^\"]*)\"$")
	public void check_event_created(String check) {
		createEvent.checkcompany(check);
	}
	@Then("user able to logout")
	public void logout() {
		createEvent.logout();
	}
}
