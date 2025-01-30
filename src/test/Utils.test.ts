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
    try {
      passwordVerification.verify("Abcdefg");
    } catch (e) {
      expect(e.message).toContain("password should be larger than 8 chars");
    }
  });

  test("password should have one uppercase letter at least", () => {
    try {
      passwordVerification.verify("abcdefghijkl");
    } catch (e) {
      expect(e.message).toContain(
        "password should have one uppercase letter at least"
      );
    }
  });

  test("password should have one lowercase letter at least", () => {
    try {
      passwordVerification.verify("ABCDEFGHIJKL");
    } catch (e) {
      expect(e.message).toContain(
        "password should have one lowercase letter at least"
      );
    }
  });

  test("password should have one number at least", () => {
    try {
      passwordVerification.verify("ABCDEfghijkl");
    } catch (e) {
      expect(e.message).toContain("password should have one number at least");
    }
  });

  test("Password is OK if at least four conditions is true", () => {
    expect(() => passwordVerification.verify("Abcdefghijkl")).not.toThrow(
      Error
    );
  });
});
