import IUserAuth from "../interfaces/IUserAuth";

export default class User implements IUserAuth {
  private _password: string = "user";
  private _facebookToken: string;
  private _googleToken: string;

  //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
  // Test it out by uncommenting the code below.
  checkGoogleLogin(token) {
    // return "this will not work";
    return token === this._googleToken;
  }

  setGoogleToken(token: string) {
    this._googleToken = token;
  }

  checkFacebookLogin(token) {
    return token === this._facebookToken;
  }

  setFacebookToken(token: string) {
    this._facebookToken = token;
  }

  checkPassword(password: string): boolean {
    return password === this._password;
  }

  resetPassword() {
    this._password = prompt("What is your new password?");
  }
}
