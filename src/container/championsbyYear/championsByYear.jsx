import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChampionDetail } from "../../component/championDetail";
import { Error } from "../../component/error";
import { Loading } from "../../component/loading";
import "./championsByYear.css";

// Container that loads list of world champions and runders the child component.
// Used functional component.
// useEffect and useState to handle the life cycle event.
// Should render error screen when there is error from api.
// Loading componet wil be displayed until the data is getting retrived.
// No props.

const ChampionsByYear = () => {
  const [standingsLists, setStandingsLists] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://ergast.com/api/f1/driverstandings/1.json?limit=100&offset=1")
      .then((res) => {
        const {
          data: {
            MRData: {
              StandingsTable: { StandingsLists: data }
            }
          }
        } = res;
        setStandingsLists(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return (
    <div className="championsByYear">
      {isLoading && <Loading />}
      {!isLoading && isError && <Error />}
      {!isError &&
        !isLoading &&
        standingsLists &&
        standingsLists.map((item) => {
          return <ChampionDetail {...item} />;
        })}
    </div>
  );
};

export default ChampionsByYear;
