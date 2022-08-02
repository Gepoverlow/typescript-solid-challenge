export default interface IAdminAuth {
  checkPassword(password: string): boolean;
  resetPassword();
  checkGoogleLogin(token: string): boolean;
  checkFacebookLogin(token: string): boolean;
}
