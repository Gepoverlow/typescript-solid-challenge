import IAdminAuth from "../interfaces/IAdminAuth";

//admin cannot use google or facebook token
export default class Admin implements IAdminAuth {
  private _password: string = "admin";

  checkGoogleLogin(token: string): boolean {
    return false;
  }

  checkPassword(password: string): boolean {
    return password === this._password;
  }

  checkFacebookLogin(token: string): boolean {
    return false;
  }

  resetPassword() {
    this._password = prompt("What is your new password?");
  }
}
