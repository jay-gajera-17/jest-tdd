import { PasswordVerifier } from "../app/Utils2";

describe("Password verification", () => {
  const passwordVerifier = new PasswordVerifier();
  it("Password should not be null", () => {
    expect(() => passwordVerifier.verify(null)).toThrow(
      Error("password should not be null")
    );
  });
  it("password should be larger than 8 characters", () => {
    try {
      passwordVerifier.verify("Abcde");
    } catch (e) {
      expect(e.message).toContain(
        "password should be larger than 8 characters"
      );
    }
  });
  it("password should have one uppercase letter at least", () => {
    try {
      passwordVerifier.verify("abcdefgqwertrs");
    } catch (e) {
      expect(e.message).toContain(
        "password should have one uppercase letter at least"
      );
    }
  });
  it("password should have one lowercase letter at least", () => {
    try {
      passwordVerifier.verify("ABCDEFHIJKL");
    } catch (e) {
      expect(e.message).toContain(
        "password should have one lowercase letter at least"
      );
    }
  });
  it("password should have one number at least", () => {
    try {
      passwordVerifier.verify("ABCDEFGHijkl");
    } catch (e) {
      expect(e.message).toContain("password should have one number at least");
    }
  });
  it("Password is OK if at least four of conditions is true", () => {
    expect(() => passwordVerifier.verify("Abcdefghijkl")).not.toThrow(Error);
  });
});
