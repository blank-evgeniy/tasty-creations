import { passwordAdvancedValidate } from "./passwordValidate";

describe("passwordValidate", () => {
  it("empty password", async () => {
    const correctResult = [
      "пароль должен содержать не менее 8 символов",
      "пароль должен содержать хотя бы одну заглавную букву",
      "пароль должен содержать хотя бы одну строчную букву",
      "пароль должен содержать хотя бы одну цифру",
    ];

    const result = passwordAdvancedValidate("");

    expect(result).toEqual(correctResult);
  });

  it("correct password", async () => {
    const result = passwordAdvancedValidate("88Password!");

    expect(result.length).toBe(0);
  });

  it("incorrect password", async () => {
    const correctResult = [
      "пароль должен содержать хотя бы одну заглавную букву",
      "пароль должен содержать хотя бы одну цифру",
    ];

    const result = passwordAdvancedValidate("aaaaaaaaaa");

    expect(result).toEqual(correctResult);
  });
});
