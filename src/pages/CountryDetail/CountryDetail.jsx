/**
 * File: CountryDetail.jsx
 * Type: Page
 * Author: Jaison Schmidt
 * Description: Show details about a specific country.
 * Data: 27/09/2019
 */

import React from "react";
import { Link } from "react-router-dom";

import "./CountryDetail.scss";

/**
 * Components list
 */
import HeaderMain from "features/HeaderMain/HeaderMain";

class CountryDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      numericCode: this.props.match.params.numericcode || "004",
      country: {
        borders: [],
        currencies: [{ name: "" }],
        flag: null,
        languages: [{ name: "" }],
        name: null,
        population: 0,
        topLevelDomain: []
      }
    };
  }

  static getDerivedStateFromProps(props, state) {
    let country = props.countries.filter(
      country => country.numericCode === state.numericCode
    );

    return {
      countries: props.countries,
      country: country[0] || state.country
    };
  }

  handleBorderLink(url, country) {
    let { history } = this.props;

    history.push({
      pathname: url
    });

    this.setState({ country: country, numericCode: country.numericCode });
  }

  renderCountryBorders() {
    if (this.state.country.borders.length === 0) return null;

    return (
      <div className="-bordercountrieswrapper">
        <div className="-labelbordercountries">Border countries</div>

        <div className="-linkscontainer">
          {this.state.countries
            .filter(country =>
              this.state.country.borders.includes(country.alpha3Code)
            )
            .map((country, key) => (
              <button
                key={key}
                className="btn sm -linkbordercountry"
                onClick={() =>
                  this.handleBorderLink(
                    `/country/${country.numericCode}`,
                    country
                  )
                }
              >
                {country.name}
              </button>
            ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <HeaderMain />

        <div className="container">
          <div className="row">
            <div className="countryDetail">
              <div className="-headerwrapper">
                <Link to="/" className="btn -btngoback">
                  <i
                    className="fa fa-long-arrow-left -icobtn"
                    aria-hidden="true"
                  ></i>
                  <span>Voltar</span>
                </Link>
              </div>

              <div className="-countrydetailwrapper">
                <div className="-countryimagagewrapper">
                  <figure>
                    <img
                      src={this.state.country.flag}
                      alt={`Flasg of ${this.state.country.name} country`}
                      className="-countryflagimage"
                    />
                  </figure>
                </div>

                <div className="-countrydetailinfowrapper">
                  <h2 className="-countryname">{this.state.country.name}</h2>
                  <div className="-countrydatawrapper">
                    <div className="-column">
                      <div className="descriptor">
                        <span className="-label">Native name:</span>
                        {this.state.country.nativeName}
                      </div>
                      <div className="descriptor">
                        <span className="-label">Population:</span>
                        {this.state.country.population
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </div>
                      <div className="descriptor">
                        <span className="-label">Region:</span>
                        {this.state.country.region}
                      </div>
                      <div className="descriptor">
                        <span className="-label">Sub region:</span>
                        {this.state.country.subregion}
                      </div>
                    </div>
                    <div className="-column -rightcolumn">
                      <div className="descriptor">
                        <span className="-label">Top level domain:</span>
                        {this.state.country.topLevelDomain.toString()}
                      </div>
                      <div className="descriptor">
                        <span className="-label">Currencies:</span>
                        {this.state.country.currencies.map(
                          (currency, i, arr) => {
                            let comma = arr.length - 1 === i ? "" : ", ";
                            return currency.name + comma;
                          }
                        )}
                      </div>
                      <div className="descriptor">
                        <span className="-label">Languages:</span>
                        {this.state.country.languages.map(
                          (language, i, arr) => {
                            let comma = arr.length - 1 === i ? "" : ", ";
                            return language.name + comma;
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  {this.renderCountryBorders()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
