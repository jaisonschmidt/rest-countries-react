/**
 * File: router.jsx
 * Type: MainComponent
 * Author: Jaison Schmidt
 * Description: Manage all available routes.
 * Data: 26/09/2019
 */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// available pages
import Home from "pages/Home/Home";
import CountryDetail from "pages/CountryDetail/CountryDetail";

// API interface
import CountryService from "services/CountryService/CountryService";

// All css
import "assets/scss/theme.scss";

export default class App extends React.Component {
  constructor() {
    super();

    // create state
    this.state = {
      countries: [],
      showCountries: 6
    };

    // create country service
    this.countryService = new CountryService();
  }

  componentDidMount() {
    this.countryService.getAllCountriesFromApi().then(countries => {
      return this.setState({ countries });
    });

    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");

    document.body.setAttribute("data-theme", localStorage.getItem("theme"));
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} countries={this.state.countries} />
              )}
            />
            <Route
              path="/country/:numericcode"
              render={props => (
                <CountryDetail {...props} countries={this.state.countries} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
