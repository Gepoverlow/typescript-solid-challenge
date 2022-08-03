class $f8664a46d9bdc20b$export$2e2bcd8739ae039 {
    _password = "user";
    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    checkGoogleLogin(token) {
        // return "this will not work";
        return token === this._googleToken;
    }
    setGoogleToken(token) {
        this._googleToken = token;
    }
    checkFacebookLogin(token) {
        return token === this._facebookToken;
    }
    setFacebookToken(token) {
        this._facebookToken = token;
    }
    checkPassword(password) {
        return password === this._password;
    }
    resetPassword() {
        this._password = prompt("What is your new password?");
    }
}


class $cbe9fb442bc4e7be$export$2e2bcd8739ae039 {
    _password = "admin";
    checkPassword(password) {
        return password === this._password;
    }
    resetPassword() {
        this._password = prompt("What is your new password?");
    }
}


class $b660f0918265a804$export$2e2bcd8739ae039 {
    setGoogleToken(token) {
        this._googleToken = token;
    }
    checkGoogleLogin(token) {
        return token === this._googleToken;
    }
}


// class GoogleBot implements IUserAuth {}
const $477891210744edbf$var$passwordElement = document.querySelector("#password");
const $477891210744edbf$var$typePasswordElement = document.querySelector("#typePassword");
const $477891210744edbf$var$typeGoogleElement = document.querySelector("#typeGoogle");
const $477891210744edbf$var$typeFacebookElement = document.querySelector("#typeFacebook");
const $477891210744edbf$var$loginAsAdminElement = document.querySelector("#loginAsAdmin");
const $477891210744edbf$var$loginAsBotElement = document.querySelector("#loginAsBot");
const $477891210744edbf$var$resetPasswordElement = document.querySelector("#resetPassword");
let $477891210744edbf$var$guest = new (0, $f8664a46d9bdc20b$export$2e2bcd8739ae039)();
let $477891210744edbf$var$admin = new (0, $cbe9fb442bc4e7be$export$2e2bcd8739ae039)();
let $477891210744edbf$var$bot = new (0, $b660f0918265a804$export$2e2bcd8739ae039)();
document.querySelector("#login-form").addEventListener("submit", (event)=>{
    event.preventDefault();
    let user;
    if (!$477891210744edbf$var$loginAsBotElement.checked && $477891210744edbf$var$loginAsAdminElement.checked) user = $477891210744edbf$var$admin;
    else if ($477891210744edbf$var$loginAsBotElement.checked && !$477891210744edbf$var$loginAsAdminElement.checked) user = $477891210744edbf$var$bot;
    else if (!$477891210744edbf$var$loginAsBotElement.checked && !$477891210744edbf$var$loginAsAdminElement.checked) user = $477891210744edbf$var$guest;
    else return alert("please select only one option");
    if (user === $477891210744edbf$var$guest) {
        user.setGoogleToken("secret_token_google");
        user.setFacebookToken("secret_token_fb");
    } else if (user === $477891210744edbf$var$bot) user.setGoogleToken("secret_token_google");
    //debugger;
    let auth = false;
    if ($477891210744edbf$var$typeGoogleElement.checked && user != $477891210744edbf$var$admin) auth = user.checkGoogleLogin("secret_token_google");
    else if ($477891210744edbf$var$typePasswordElement.checked && user != $477891210744edbf$var$bot) auth = user.checkPassword($477891210744edbf$var$passwordElement.value);
    else if ($477891210744edbf$var$typeFacebookElement.checked && user === $477891210744edbf$var$guest) auth = user.checkFacebookLogin("secret_token_fb");
    if (auth) alert("login success");
    else alert("login failed");
});
$477891210744edbf$var$resetPasswordElement.addEventListener("click", (event)=>{
    event.preventDefault();
    let user = $477891210744edbf$var$loginAsAdminElement.checked ? $477891210744edbf$var$admin : $477891210744edbf$var$guest;
    user.resetPassword();
});


//# sourceMappingURL=main.js.map
