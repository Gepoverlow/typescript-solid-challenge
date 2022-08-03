export default interface IGoogleAuth {
  setGoogleToken(token: string);
  checkGoogleLogin(token: string): boolean;
}
