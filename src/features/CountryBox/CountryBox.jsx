/**
 * File: CountryBox.jsx
 * Type: Feature
 * Author: Jaison Schmidt
 * Description: Render a box with country content.
 * Data: 28/09/2019
 */

import React from "react";

import { Link } from "react-router-dom";

import "./CountryBox.scss";

function CountryBox(props) {
  return (
    <div className="countryBox" key={props.country.key}>
      <Link
        to={`/country/${props.country.numericCode}`}
        className="-linkcountrybox"
      >
        <div className="-flagimagewrapper">
          <img
            src={props.country.flag}
            className="-flagimage"
            alt={`Flag of ${props.country.name} country`}
          />
        </div>
        <div className="-flaginfo">
          <div className="-countryname">{props.country.name}</div>
          <div className="descriptor">
            <span className="-label">Population:</span>
            {props.country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          <div className="descriptor">
            <span className="-label">Region:</span> {props.country.region}
          </div>
          <div className="descriptor">
            <span className="-label">Capital:</span> {props.country.capital}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CountryBox;
