import { render, screen } from "@testing-library/react";
import { Error } from "../error";
describe("should validate error component", () => {
  it("validate error component text", () => {
    render(<Error />);
    const element = screen.getByText(
      /Service "ergast.com" is down.Please try again some time!/i
    );
    expect(element).toBeDefined();
  });
});

describe("Should validate error detail", () => {
  it("Should validate shopshot", () => {
    const { baseElement } = render(<Error />);
    expect(baseElement).toMatchSnapshot();
  });
});
