export class PasswordVerifier {
  verify(password: string) {
    notNull(password);
    const validations = [
      largerThanEightChars,
      atLeastOneLowerCase,
      atLeastOneUpperCase,
      atLeastOneNumber,
    ];
    const errors = validations
      .map((validation) => validation(password))
      .filter((error) => error.length > 0);

    if (errors.length > 4) {
      let msg = errors.join(",");
      throw Error(msg);
    }
  }
}

const notNull = (password) => {
  if (password == null) {
    throw Error("password should not be null");
  }
};

const largerThanEightChars = (password) => {
  return password.length < 9
    ? "password should be larger than 8 characters"
    : "";
};

const atLeastOneUpperCase = (password) => {
  return !/[A-Z]/.test(password)
    ? "password should have one uppercase letter at least"
    : "";
};

const atLeastOneLowerCase = (password) => {
  return !/[a-z]/.test(password)
    ? "password should have one lowercase letter at least"
    : "";
};

const atLeastOneNumber = (password) => {
  return !/\d/.test(password) ? "password should have one number at least" : "";
};
