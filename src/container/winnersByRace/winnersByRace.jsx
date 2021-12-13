import React, { useEffect, useState } from "react";
import axios from "axios";
import { Error } from "../../component/error";
import { Loading } from "../../component/loading";
import { RaceDetail } from "../../component/raceDetail";

import PropTypes from "prop-types";
// Container that loads ist of the winners for every race for the selected year.
// Used functional component.
// useEffect and useState to handle the life cycle event.
// Should render error screen when there is error from api.
// Loading componet wil be displayed until the data is getting retrived.
// props-> selected Season and world champion id of selected season
// Async await is another option to load the data asynchronous.

const WinnersByRace = ({ season, championDriverId }) => {
  const [RacesData, setRacesData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://ergast.com/api/f1/${season}/results/1.json?limit=100`)
      .then((data) => {
        const {
          data: {
            MRData: {
              RaceTable: { Races }
            }
          }
        } = data;

        setRacesData(Races);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [season]);

  return (
    <div>
      {isLoading && <Loading />}
      {isError && !isLoading && <Error />}
      {RacesData &&
        !isLoading &&
        !isError &&
        RacesData.map((item) => {
          return <RaceDetail {...item} championDriverId={championDriverId} />;
        })}
    </div>
  );
};

WinnersByRace.propTypes = {
  season: PropTypes.string.isRequired,
  championDriverId: PropTypes.string.isRequired
};

WinnersByRace.defaultProps = {
  season: "2021",
  championDriverId: "driver1"
};
export default WinnersByRace;
