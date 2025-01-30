export class PasswordVerifier {
  verify(password: string) {
    if (!password || password.length === 0) {
      throw Error("password should not be null");
    }

    if (password && password.length < 8) {
      throw Error("password should be larger than 8 characters");
    }

    if (!/[A-Z]/.test(password)) {
      throw Error("password should have at least one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      throw Error("password should have at least one lowercase letter");
    }

    if (!/\d/.test(password)) {
      throw Error("password should have at least one digit");
    }
  }
}
