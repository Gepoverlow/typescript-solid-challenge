export default interface IFaceBookAuth {
  setFacebookToken(token: string);
  checkFacebookLogin(token: string): boolean;
}
