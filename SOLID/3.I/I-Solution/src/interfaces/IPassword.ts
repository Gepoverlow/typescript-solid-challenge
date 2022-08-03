export default interface IPassowrd {
  checkPassword(password: string): boolean;
  resetPassword();
}
