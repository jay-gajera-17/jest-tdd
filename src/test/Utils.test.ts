//Test

import { PasswordVerification } from "../app/Utils";

describe("Password verification", () => {
  const passwordVerification = new PasswordVerification();

  test(" password should not be null", () => {
    expect(() => passwordVerification.verify(null)).toThrow(
      "password should not be null"
    );
  });

  test("password should be larger than 8 chars", () => {
    expect(() => passwordVerification.verify("Abcdefg")).toThrow(
      "password should be larger than 8 chars"
    );
  });

  test("password should have one uppercase letter at least", () => {
    expect(() => passwordVerification.verify("abcdefghijkl")).toThrow(
      "password should have one uppercase letter at least"
    );
  });

  test("password should have one lowercase letter at least", () => {
    expect(() => passwordVerification.verify("ABCDEFGHIJKL")).toThrow(
      "password should have one lowercase letter at least"
    );
  });

  test("password should have one number at least", () => {
    expect(() => passwordVerification.verify("ABCDEfghijkl")).toThrow(
      "password should have one number at least"
    );
  });
});
