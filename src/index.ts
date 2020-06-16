import * as readline from "readline";

import { facebookLogin } from "./controllers/login";
import { getInputs } from "./controllers/inputs";
import { likeFacebookPost } from "./controllers/likes";
import { Builder } from "selenium-webdriver";
import { birthdayController } from "./controllers/birthday";
import { sessionController } from "./controllers/session";

(async () => {
  //   let { username, password } = await getInputs();
  let driver = await new Builder().forBrowser("firefox").build();

  await facebookLogin(driver, "ryanjesus_11@hotmail.com", "ryan@123");
  await birthdayController(driver);
})();
