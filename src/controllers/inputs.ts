import * as readline from "readline-sync";
import { Login } from "../models/login";

async function getInputs() {
  let login: Login = {};

  login.username = getLogin();
  login.password = getPassword();
  function getLogin() {
    return readline.question("Enter Facebook username: ");
  }

  function getPassword() {
    return readline.question("Enter Facebook password: ", {
      hideEchoBack: true,
    });
  }
  return login;
}

export { getInputs };
