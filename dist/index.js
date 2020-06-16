"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("./controllers/login");
const selenium_webdriver_1 = require("selenium-webdriver");
const birthday_1 = require("./controllers/birthday");
(() => __awaiter(void 0, void 0, void 0, function* () {
    //   let { username, password } = await getInputs();
    let driver = yield new selenium_webdriver_1.Builder().forBrowser("firefox").build();
    yield login_1.facebookLogin(driver, "ryanjesus_11@hotmail.com", "ryan@123");
    yield birthday_1.birthdayController(driver);
}))();
