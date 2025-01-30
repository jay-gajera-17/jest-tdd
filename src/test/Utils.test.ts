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
});
