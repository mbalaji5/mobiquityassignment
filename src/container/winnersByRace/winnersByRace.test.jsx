import React from "react";
import { render } from "@testing-library/react";
import WinnersByRace from "./winnersByRace";

describe("Should valildate Winners ByRace", () => {
  it("Should validate shopshot", () => {
    const { baseElement } = render(<WinnersByRace />);
    expect(baseElement).toMatchSnapshot();
  });
});
