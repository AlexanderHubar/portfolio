import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Should Button works correctly", () => {
  it("Should Button md renders correctly", () => {
    const buttonTitle = "My fancy Button";
    render(<Button>{buttonTitle}</Button>);
    const button = screen.getByText(buttonTitle);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      height: "50px",
      padding: "0 20px",
    });
  });

  it("Should Button sm renders correctly", () => {
    const buttonTitle = "My fancy Button";
    render(<Button size="sm">{buttonTitle}</Button>);
    const button = screen.getByText(buttonTitle);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      height: "32px",
      padding: "0 12px",
    });
  });
});
