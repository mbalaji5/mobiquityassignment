import React, { useState } from "react";
import PropTypes from "prop-types";
import { WinnersByRace } from "../../container/winnersByRace";
import "./championDetail.css";

// Component render the Season,world champion name and other details
// Used functional component.
// useState to handle the state
// Should render WinnersByRace component when user clicks on specific season
// props-> list of world champions details and season

const ChampionDetail = ({ DriverStandings, season }) => {
  const [isShowWinnerByRace, setisShowWinnerByRace] = useState(false);

  const {
    Driver: { driverId, familyName, givenName },
    points,
    wins
  } = DriverStandings[0];

  const expandRace = () => {
    setisShowWinnerByRace(!isShowWinnerByRace);
  };
  return (
    <div className="championDetail" key={season} onClick={expandRace}>
      <h2>
        {season} - {familyName} {givenName}
      </h2>
      <span>
        Points:{points} | Wins:{wins}
      </span>
      {isShowWinnerByRace && (
        <WinnersByRace season={season} championDriverId={driverId} />
      )}
    </div>
  );
};

ChampionDetail.propTypes = {
  season: PropTypes.string.isRequired,
  DriverStandings: PropTypes.array.isRequired
};

ChampionDetail.defaultProps = {
  season: 2021,
  DriverStandings: []
};
export default ChampionDetail;
