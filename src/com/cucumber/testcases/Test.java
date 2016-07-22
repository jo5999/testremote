package com.cucumber.testcases;

import org.testng.Assert;

import com.cucumber.util.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Test {
	
	WebConnector wb = new WebConnector();

	@Given("I go to \"([^\"]*)\" on \"([^\"]*)\"")
	public void navigateToUrl(String url, String browser){
		wb.openBrowser(browser);
		wb.navigateToUrl(url);
	}
	
	@And("I click on \"([^\"]*)\"")
	public void select_tab(String about_us){
		wb.click(about_us);
	}
	
	@Then("\"([^\"]*)\" is displayed")
	public void text_present(String text){
		Assert.assertTrue(wb.textDisplayed(text).contains("simply dummy text of the printing and typesetting"), "About us text is not displayed");
	}
}
