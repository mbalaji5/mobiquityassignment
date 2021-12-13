import React from "react";
import { render, screen } from "@testing-library/react";
import { ChampionDetail } from "../championDetail";
import { shallow } from "enzyme";
import { WinnersByRace } from "../../container/winnersByRace";

const props = {
  season: "2021",
  DriverStandings: [
    {
      Driver: {
        dateOfBirth: "1952-08-17",
        driverId: "piquet",
        familyName: "Piquet",
        givenName: "Nelson",
        nationality: "Brazilian",
        url: "http://en.wikipedia.org/wiki/Nelson_Piquet"
      },
      points: "73",
      position: "1",
      positionText: "1",
      wins: "3"
    }
  ]
};

describe("Should render champion detail", () => {
  it("Should validate season and name", () => {
    render(<ChampionDetail {...props} />);
    const element = screen.getByText(/2021 - Piquet Nelson/i);
    expect(element).toBeDefined();
  });
  it("Should validate point ans wins", () => {
    render(<ChampionDetail {...props} />);
    const element = screen.getByText(/Points:73 | Wins:3/i);
    expect(element).toBeDefined();
  });

  it("Should validate onclick", () => {
    const wrapper = shallow(<ChampionDetail {...props} />);

    wrapper
      .find(".championDetail")
      .props()
      .onClick();

    expect(wrapper.find(WinnersByRace)).toBeTruthy();
  });
  it("Should validate child param when onclick", () => {
    const wrapper = shallow(<ChampionDetail {...props} />);
    wrapper
      .find(".championDetail")
      .props()
      .onClick();
    const raceDetails = wrapper.find(WinnersByRace);
    expect(raceDetails).toBeDefined();
    expect(raceDetails.props().season).toBe(props.season);
    expect(raceDetails.props().championDriverId).toBe(
      props.DriverStandings[0].Driver.driverId
    );
  });
});
describe("Should validate champion detail", () => {
  it("Should validate shopshot", () => {
    const { baseElement } = render(<ChampionDetail {...props} />);
    expect(baseElement).toMatchSnapshot();
  });
});
