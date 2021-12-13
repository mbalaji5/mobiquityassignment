import React from "react";
import { render, screen } from "@testing-library/react";
import { RaceDetail } from "../raceDetail";

const props = {
  season: 2021,
  round: "1",
  raceName: "Bahrain Grand Prix",
  date: "2021-03-28",
  Results: [
    {
      number: "44",
      position: "1",
      positionText: "1",
      points: "25",
      Driver: {
        driverId: "hamilton",
        permanentNumber: "44",
        code: "HAM",
        url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
        givenName: "Lewis",
        familyName: "Hamilton",
        dateOfBirth: "1985-01-07",
        nationality: "British"
      },
      Constructor: {
        constructorId: "mercedes",
        url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
        name: "Mercedes",
        nationality: "German"
      },
      grid: "2",
      laps: "56",
      status: "Finished",
      Time: { millis: "5523897", time: "1:32:03.897" },
      FastestLap: {
        rank: "4",
        lap: "44",
        Time: { time: "1:34.015" },
        AverageSpeed: { units: "kph", speed: "207.235" }
      }
    }
  ],
  championDriverId: "hamilton"
};

describe("Should render champion detail", () => {
  it("Should validate race name", () => {
    render(<RaceDetail {...props} />);
    const element = screen.getByText(/Bahrain Grand Prix/i);
    expect(element).toBeDefined();
  });
  it("Should validate winner full name", () => {
    render(<RaceDetail {...props} />);
    const element = screen.getByText(/Hamilton Lewis/i);
    expect(element).toBeDefined();
  });
  it("Should validate highlight class name if winner is world champion", () => {
    render(<RaceDetail {...props} />);
    const element = screen.getByText(/Hamilton Lewis/i);
    expect(element.classList.contains("highlight")).toBeTruthy();
  });
  it("Should validate winner other details", () => {
    render(<RaceDetail {...props} />);
    const element = screen.getByText(
      /Date : 2021-03-28 | Round : 1 | Point : 25 | Duration : 1:32:03.897 | Nationality : German/i
    );
    expect(element).toBeDefined();
  });
});
describe("Should validate race detail", () => {
  it("Should validate shopshot", () => {
    const { baseElement } = render(<RaceDetail {...props} />);
    expect(baseElement).toMatchSnapshot();
  });
});
