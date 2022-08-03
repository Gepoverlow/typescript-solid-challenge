import User from "./classes/User";
import Admin from "./classes/Admin";
import GoogleBot from "./classes/GoogleBot";

// class GoogleBot implements IUserAuth {}

const passwordElement = <HTMLInputElement>document.querySelector("#password");
const typePasswordElement = <HTMLInputElement>document.querySelector("#typePassword");
const typeGoogleElement = <HTMLInputElement>document.querySelector("#typeGoogle");
const typeFacebookElement = <HTMLInputElement>document.querySelector("#typeFacebook");
const loginAsAdminElement = <HTMLInputElement>document.querySelector("#loginAsAdmin");
const loginAsBotElement = <HTMLInputElement>document.querySelector("#loginAsBot");
const resetPasswordElement = <HTMLAnchorElement>document.querySelector("#resetPassword");

let guest = new User();
let admin = new Admin();
let bot = new GoogleBot();

document.querySelector("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();

  let user;

  if (!loginAsBotElement.checked && loginAsAdminElement.checked) {
    user = admin;
  } else if (loginAsBotElement.checked && !loginAsAdminElement.checked) {
    user = bot;
  } else if (!loginAsBotElement.checked && !loginAsAdminElement.checked) {
    user = guest;
  } else {
    return alert("please select only one option");
  }

  if (user === guest) {
    user.setGoogleToken("secret_token_google");
    user.setFacebookToken("secret_token_fb");
  } else if (user === bot) {
    user.setGoogleToken("secret_token_google");
  }
  //debugger;

  let auth = false;
  if (typeGoogleElement.checked && user != admin) {
    auth = user.checkGoogleLogin("secret_token_google");
  } else if (typePasswordElement.checked && user != bot) {
    auth = user.checkPassword(passwordElement.value);
  } else if (typeFacebookElement.checked && user === guest) {
    auth = user.checkFacebookLogin("secret_token_fb");
  }

  if (auth) {
    alert("login success");
  } else {
    alert("login failed");
  }
});

resetPasswordElement.addEventListener("click", (event) => {
  event.preventDefault();

  let user = loginAsAdminElement.checked ? admin : guest;
  user.resetPassword();
});
