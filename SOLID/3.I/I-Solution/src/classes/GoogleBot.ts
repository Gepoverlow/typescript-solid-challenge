import IGoogleAuth from "../interfaces/IGoogleAuth";

export default class GoogleBot implements IGoogleAuth {
  private _googleToken: string;

  setGoogleToken(token: string) {
    this._googleToken = token;
  }

  checkGoogleLogin(token: string): boolean {
    return token === this._googleToken;
  }
}
