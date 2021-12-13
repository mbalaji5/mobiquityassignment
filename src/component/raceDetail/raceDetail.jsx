import React from "react";
import PropTypes from "prop-types";
import "./raceDetail.css";
// Component that renders race winner details
// Used functional component.
// Props: race, race result details and season champion id

const RaceDetail = ({
  raceName,
  Results = [],
  championDriverId,
  date,
  round
}) => {
  const {
    Driver: { driverId, familyName, givenName, nationality },
    points,
    Time: { time }
  } = Results[0];
  return (
    <div className="raceDetail">
      <h4>{raceName} :</h4>
      <h4 className={driverId === championDriverId ? "highlight" : ""}>
        {familyName} {givenName}
      </h4>
      <br />
      <span>
        Date : {date} | Round : {round} | Point : {points} | Duration : {time} |
        Nationality : {nationality}
      </span>
    </div>
  );
};

RaceDetail.propTypes = {
  raceName: PropTypes.string.isRequired,
  Results: PropTypes.array.isRequired,
  championDriverId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  round: PropTypes.string.isRequired
};

RaceDetail.defaultProps = {
  raceName: "Race 1",
  Results: [],
  championDriverId: "Racer1",
  date: "1/1/2021",
  round: 2
};
export default RaceDetail;
