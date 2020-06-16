import { By } from "selenium-webdriver";

async function likeFacebookPost(driver) {
  try {
    await driver.findElement(By.className("_666k")).click();
  } catch (error) {
    console.error(error);
  }
}

export { likeFacebookPost };
