import { errorCatch } from "./error";

describe("responseErrorCatch", () => {
  it("string error", async () => {
    const res = {
      response: {
        data: {
          message: "test",
        },
      },
    };

    const resError = errorCatch(res);

    expect(resError).toBe("test");
  });

  it("array error", async () => {
    const res = {
      response: {
        data: {
          message: ["test", "test2"],
        },
      },
    };

    const resError = errorCatch(res);

    expect(resError).toBe("test");
  });
});
