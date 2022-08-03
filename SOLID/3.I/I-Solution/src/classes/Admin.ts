import IPassword from "../interfaces/IPassword";

//admin cannot use google or facebook token
export default class Admin implements IPassword {
  private _password: string = "admin";

  checkPassword(password: string): boolean {
    return password === this._password;
  }

  resetPassword() {
    this._password = prompt("What is your new password?")!;
  }
}
