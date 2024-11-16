import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders a button", async () => {
    render(<Button role="button" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("click a button", async () => {
    let count = 0;

    render(<Button role="button" onClick={() => count++} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(count).toBe(1);
  });

  it("loading a button", async () => {
    render(<Button role="button" loading />);

    const loader = screen.getByTestId("loader");

    expect(loader).toBeInTheDocument();
  });
});
