package com.cucumber.util;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class WebConnector {
	
	Properties OR = null;
	Properties CONFIG = null; 		
	static WebConnector wb;
	FileInputStream file;
	WebDriver driver =null;
	WebDriver firefox = null;
	WebDriver chrome = null;
	WebDriver internetexplorer = null;
	
	
	public WebConnector() {
		try {
			if (OR == null) {
				OR = new Properties();
				file = new FileInputStream(System.getProperty("user.dir")
						+ "\\src\\com\\cucumber\\config\\OR.properties");
				OR.load(file);
			}
			if (CONFIG == null) {
				CONFIG = new Properties();
				file = new FileInputStream(System.getProperty("user.dir")
						+ "\\src\\com\\cucumber\\config\\config.properties");
				CONFIG.load(file);
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Problem while loading properties file");
		}
	}
	
	//Singleton
	
	public static WebConnector getInstance() {
		if (wb == null) {
			wb = new WebConnector();
		}
		return wb;
	}
	
	public void openBrowser(String browser){
		if(browser.equals("firefox") && (firefox == null)){
			driver = new FirefoxDriver();
			firefox = driver;
		}else if(browser.equals("firefox") && (firefox != null)){
			firefox = driver;
		}
		
		if(browser.equals("chrome") && (chrome == null)){
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\chromedriver.exe");
			driver = new ChromeDriver();
			chrome = driver;
		}else if(browser.equals("chrome") && (chrome != null)){
			chrome = driver;
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	public void navigateToUrl(String url){
		driver.get(CONFIG.getProperty(url));
	}
	
	public void click(String link){
		driver.findElement(By.xpath(OR.getProperty(link))).click();
	}
	
	public String textDisplayed(String text){
		return driver.findElement(By.xpath(OR.getProperty(text))).getText();
	}
}
