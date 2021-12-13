import React from "react";
import { render } from "@testing-library/react";
import ChampionsByYear from "./championsbyYear";

describe("Should validate champion by year", () => {
  it("Should validate shopshot", () => {
    const { baseElement } = render(<ChampionsByYear />);
    expect(baseElement).toMatchSnapshot();
  });
});
