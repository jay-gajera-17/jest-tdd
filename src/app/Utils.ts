//Util

export class PasswordVerification {
  verify(password: string) {
    if (!password || password.length == 0) {
      throw Error("password should not be null");
    }
    if (password.length < 9) {
      throw Error("password should be larger than 8 chars");
    }

    throw Error("password should have one uppercase letter at least");
  }
}
