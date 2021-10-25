package pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Demo {

	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\hp\\eclipse-workspace\\Digital-Nirvana\\DN_Process\\driver\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://sqa.ecs.digital-nirvana.com/add_event_data.php");
		 List<WebElement> autoSuggest = driver.findElements(By.className("valid"));
	        Thread.sleep(3000);
	      
	        // print the auto suggest
	        for (WebElement a : autoSuggest)
	        {
	        	System.out.println("Values are = " + a.getText());
	        	if (a.getText().equalsIgnoreCase("app"));
	        	a.click();
	        	Thread.sleep(3000);
	        	break;
	        }

	}

}
