import { By } from "selenium-webdriver";

async function facebookLogin(driver, usr, pass) {
  try {
    await driver.get("https://www.facebook.com/");
    await driver.findElement(By.id("email")).sendKeys(usr);
    await driver.findElement(By.id("pass")).sendKeys(pass);
    await driver.findElement(By.id("loginbutton")).click();
  } catch (error) {
    console.error(error);
  }
}

export { facebookLogin };
