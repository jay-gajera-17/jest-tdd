//Test

import { PasswordVerification } from "../app/Utils";

describe("Password verification", () => {
  test(" password should not be null", () => {
    const passwordVerification = new PasswordVerification();
    expect(() => passwordVerification.verify(null)).toThrow(
      "password should not be null"
    );
  });
});
