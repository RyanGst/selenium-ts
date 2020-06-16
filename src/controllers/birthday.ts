import { By } from "selenium-webdriver";

async function birthdayController(driver) {
  try {
    await driver.get("https://www.facebook.com/events/birthdays/");
    let sizing = await driver.findElements(By.className("enter_submit"));
    for (let index = 0; index < sizing.length; index++) {
    sizing[index].sendKeys("Parabéns!")
    }
  } catch (error) {
    console.error(error);
  }
}

export { birthdayController };
