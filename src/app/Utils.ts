//Util

export class PasswordVerification {
  verify(password: string) {
    notNull(password);
    const validations = [
      atLeastEightChars,
      atLeastOneUpperCase,
      atLeastOneLowerCase,
      atLeastOneNumber,
    ];

    const errors = validations
      .map((validation) => validation(password))
      .filter((error) => error.length > 0);

    if (errors.length > 4) {
      const msg = errors.join(",");
      throw Error(msg);
    }
  }
}

const notNull = (password) => {
  if (!password || password.length == 0) {
    throw Error("password should not be null");
  }
};

const atLeastEightChars = (password) => {
  return password.length < 9 ? "password should be larger than 8 chars" : "";
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
