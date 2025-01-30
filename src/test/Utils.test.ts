import { PasswordVerifier } from "../app/Utils2";

describe("Password verification", () => {
  const passwordVerifier = new PasswordVerifier();
  it("Password should not be null", () => {
    expect(() => passwordVerifier.verify(null)).toThrow(
      Error("password should not be null")
    );
  });

  it("Password should have  at lest 8 char", () => {
    expect(() => passwordVerifier.verify("pass")).toThrow(
      Error("password should be larger than 8 characters")
    );
  });

  it("Password should have  at lest one upper char", () => {
    expect(() => passwordVerifier.verify("password12")).toThrow(
      Error("password should have at least one uppercase letter")
    );
  });

  it("Password should have  at lest one lowercase char", () => {
    expect(() => passwordVerifier.verify("PASSWORD12")).toThrow(
      Error("password should have at least one lowercase letter")
    );
  });

  it("Password should have  at lest one digit", () => {
    expect(() => passwordVerifier.verify("Codecovegare")).toThrow(
      Error("password should have at least one digit")
    );
  });
});
