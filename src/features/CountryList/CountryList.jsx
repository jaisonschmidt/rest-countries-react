/**
 * File: CountryList.jsx
 * Type: Feature
 * Author: Jaison Schmidt
 * Description: Render an array os countries.
 * Data: 28/09/2019
 */
import React from "react";

// Components list
import CountryBox from "features/CountryBox/CountryBox";

// module CSS
import "./CountryList.scss";
import "./SearchFilter.scss";

class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: ["Africa", "America", "Asia", "Europe", "Oceania"],
      searchByRegion: false,
      countries: this.props.countries,
      textFilter: "",
      regionFilter: ""
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      countries: props.countries
    };
  }

  handleInputSearch(e) {
    this.setState({ textFilter: e.target.value });
  }

  handleRegionClick(e, region) {
    e.preventDefault();

    this.setState({
      regionFilter: this.state.regionFilter === region ? "" : region,
      searchByRegion: !this.state.searchByRegion
    });
  }

  renderCountryBox(country, key) {
    return <CountryBox country={country} key={key} />;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="searchFilter">
            <div className="-inputsearchwrapper">
              <i className="fa fa-search -icosearch" aria-hidden="true"></i>
              <input
                type="search"
                value={this.state.textFilter}
                onChange={e => this.handleInputSearch(e)}
                className="-inputsearch"
                placeholder="Search for a country..."
              />
            </div>
            <div className="-filterbyregionwrapper">
              <button
                className={
                  this.state.searchByRegion
                    ? "-filterbyregionbtn -active"
                    : "-filterbyregionbtn"
                }
                onClick={() =>
                  this.setState({ searchByRegion: !this.state.searchByRegion })
                }
              >
                <span>
                  {this.state.regionFilter !== ""
                    ? this.state.regionFilter
                    : "Filter by region"}
                </span>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </button>

              <ul className="-filterbyregionitens">
                {this.state.region.map((region, key) => {
                  return (
                    <li key={key}>
                      <a
                        href="/"
                        className="-regionitem"
                        onClick={e => this.handleRegionClick(e, region)}
                      >
                        {region}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="countryList">
            {console.log(this.state.countries)}
            {this.state.countries
              .filter(country =>
                country.name
                  .toUpperCase()
                  .includes(this.state.textFilter.toUpperCase())
              )
              .filter(country => {
                if (
                  this.state.regionFilter !== "" &&
                  country.region.toUpperCase() !==
                    this.state.regionFilter.toUpperCase()
                ) {
                  return false;
                } else {
                  return true;
                }
              })
              .map((country, key) => this.renderCountryBox(country, key))}

            <i aria-hidden="true" className="-lastalign"></i>
            <i aria-hidden="true" className="-lastalign"></i>
            <i aria-hidden="true" className="-lastalign"></i>
            <i aria-hidden="true" className="-lastalign"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryList;
