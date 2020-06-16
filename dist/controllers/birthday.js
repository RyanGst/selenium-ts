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
const selenium_webdriver_1 = require("selenium-webdriver");
function birthdayController(driver) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield driver.get("https://www.facebook.com/events/birthdays/");
            let sizing = yield driver.findElements(selenium_webdriver_1.By.className("enter_submit"));
            for (let index = 0; index < sizing.length; index++) {
                sizing[index].sendKeys("Parabéns!");
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.birthdayController = birthdayController;
