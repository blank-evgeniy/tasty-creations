import { classNames } from "./classNames";

describe("classNames", () => {
  it("with class", async () => {
    const className = classNames("class");

    expect(className).toBe("class");
  });

  it("with all args", async () => {
    const className = classNames("class", { class2: false, class3: true }, [
      "class4",
    ]);

    expect(className).toBe("class class3 class4");
  });
});
