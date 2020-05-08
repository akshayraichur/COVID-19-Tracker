import React, { useState, useEffect } from "react";
import Axios from "axios";
import AlignItemsList from "./ListComponent";

const ListofCountry = () => {
  const [countryCase, setCountryCase] = useState([]);

  const [search, setSearch] = useState("");

  const [searchData, setSearchData] = useState("");

  const [searchTrue, setSearchTrue] = useState(false);

  useEffect(() => {
    Axios.get("https://corona.lmao.ninja/v2/countries").then((response) => {
      setCountryCase(response.data);
      setSearchTrue(false);
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log(search.length)
    const slength = search.length - 1;
    if (slength === 0) {
      setSearchTrue(false);
    } else {
      setSearchTrue(true);
    }
  };

  useEffect(() => {
    const searchUrl = "https://corona.lmao.ninja/v2/countries/" + search;
    Axios.get(searchUrl)
      .then((response) => {
        setSearchData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  return (
    <div className="container">
      <h1 className="h1">
        This section shows the list of countries with their data
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="md-form form-lg">
          <input
            type="text"
            id="inputLGEx"
            className="form-control form-control-lg"
            value={search}
            onChange={handleChange}
          />
          <label htmlFor="inputLGEx">Search</label>
        </div>
      </form>
      {searchTrue ? (
        <AlignItemsList
          totalCases={searchData.cases}
          country={searchData.country}
          casesReportedToday={searchData.todayCases}
          deathsReportedToday={searchData.todayDeaths}
          active={searchData.active}
          totalDeaths={searchData.deaths}
          recovered={searchData.recovered}
          critical={searchData.critical}
        />
      ) : null}

      {countryCase.map((cc) => (
        <AlignItemsList
          key={cc.country}
          totalCases={cc.cases}
          country={cc.country}
          casesReportedToday={cc.todayCases}
          deathsReportedToday={cc.todayDeaths}
          active={cc.active}
          totalDeaths={cc.deaths}
          recovered={cc.recovered}
          critical={cc.critical}
        />
      ))}
    </div>
  );
};

export default ListofCountry;
