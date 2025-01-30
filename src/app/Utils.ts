//Util

export class PasswordVerification {
  verify(password: string) {
    notNull(password);
    atLeastEightChars(password);
    atLeastOneUpperCase(password);
    atLeastOneLowerCase(password);
    atLeastOneNumber(password);
  }
}

const notNull = (password) => {
  if (!password || password.length == 0) {
    throw Error("password should not be null");
  }
};

const atLeastEightChars = (password) => {
  if (password.length < 9) {
    throw Error("password should be larger than 8 chars");
  }
};

const atLeastOneUpperCase = (password) => {
  if (!/[A-Z]/.test(password)) {
    throw Error("password should have one uppercase letter at least");
  }
};
const atLeastOneLowerCase = (password) => {
  if (!/[a-z]/.test(password)) {
    throw Error("password should have one lowercase letter at least");
  }
};

const atLeastOneNumber = (password) => {
  if (!/\d/.test(password)) {
    throw Error("password should have one number at least");
  }
};
