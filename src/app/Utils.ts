//Util

export class PasswordVerification {
  verify(password: string) {
    if (!password || password.length == 0) {
      throw Error("password should not be null");
    }
    throw Error("password should be larger than 8 chars");
  }
}
