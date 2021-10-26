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
		
		driver.get("https://sqa.ecs.digital-nirvana.com");
		driver.findElement(By.xpath("/html/body/div[1]/div/table/tbody/tr[2]/td[2]/input")).sendKeys("shetty");
		driver.findElement(By.xpath("/html/body/div[1]/div/table/tbody/tr[5]/td[2]/input")).sendKeys("dnis@123");
		driver.findElement(By.xpath("/html/body/div[1]/div/table/tbody/tr[7]/td[2]/input")).click();
		driver.findElement(By.xpath("/html/body/div[1]/div/div/div/a[5]")).click();
		boolean gg=driver.findElement(By.xpath("/html/body/table/tbody/tr[2]/td[2]/a")).getText().contains("APPLE");
		//driver.findElement(By.xpath("")).
		
		System.out.println(gg);

	}

}
