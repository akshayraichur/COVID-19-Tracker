import React, { useState, useEffect } from "react";
import Axios from "axios";
import MediaCard from "./Card";

// import './TestCases.css';
// import CardExample from '../MbdReact/MBD-Card';

const TotalCases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    Axios.get("https://corona.lmao.ninja/v2/all")
      .then((response) => {
        // console.log(response.data)
        setCases(response.data);
      })
      .catch((err) => {
        console.log("There was some error fetching the data");
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container my-5">
        <h1 className="h1 my-5">Global COVID-19 Information</h1>
        <div className="row">
          <div className="col-md-4"></div>

          <div className="col-md-6 center">
            {" "}
            <MediaCard
              cases={cases.cases}
              deaths={cases.deaths}
              recovered={cases.recovered}
            />{" "}
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TotalCases;
