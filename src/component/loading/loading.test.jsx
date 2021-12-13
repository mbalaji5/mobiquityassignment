import { render, screen } from "@testing-library/react";
import { Loading } from "../loading";
describe("should validate loading component", () => {
  it("should validate loading componet text element", () => {
    render(<Loading />);
    const element = screen.getByText(/..Loading/i);
    expect(element).toBeDefined();
  });
});
describe("Should validate loading", () => {
  it("Should validate shopshot", () => {
    const { baseElement } = render(<Loading />);
    expect(baseElement).toMatchSnapshot();
  });
});
