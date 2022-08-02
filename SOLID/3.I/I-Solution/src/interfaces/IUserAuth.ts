export default interface IUserAuth {
  checkPassword(password: string): boolean;
  resetPassword();
  setGoogleToken(token: string);
  checkGoogleLogin(token: string): boolean;
  setFacebookToken(token: string);
  checkFacebookLogin(token: string): boolean;
}
