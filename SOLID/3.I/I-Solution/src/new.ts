import User from "./classes/User";
import Admin from "./classes/Admin";
import GoogleBot from "./classes/GoogleBot";

// class GoogleBot implements IUserAuth {}

const passwordElement = <HTMLInputElement>document.querySelector("#password");
const typePasswordElement = <HTMLInputElement>document.querySelector("#typePassword");
const typeGoogleElement = <HTMLInputElement>document.querySelector("#typeGoogle");
const typeFacebookElement = <HTMLInputElement>document.querySelector("#typeFacebook");
const loginAsAdminElement = <HTMLInputElement>document.querySelector("#loginAsAdmin");
const resetPasswordElement = <HTMLAnchorElement>document.querySelector("#resetPassword");

let guest = new User();
let admin = new Admin();
let bot = new GoogleBot();

document.querySelector("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();

  let user = loginAsAdminElement.checked ? admin : guest;

  if (!loginAsAdminElement.checked) {
    user.setGoogleToken("secret_token_google");
    user.setFacebookToken("secret_token_fb");
  }
  debugger;

  let auth = false;
  switch (true) {
    case typePasswordElement.checked:
      auth = user.checkPassword(passwordElement.value);
      break;
    case typeGoogleElement.checked:
      auth = user.checkGoogleLogin("secret_token_google");
      break;
    case typeFacebookElement.checked:
      debugger;
      auth = user.checkFacebookLogin("secret_token_fb");
      break;
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
