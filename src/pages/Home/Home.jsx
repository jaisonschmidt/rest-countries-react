/**
 * File: Home.jsx
 * Type: Page
 * Author: Jaison Schmidt
 * Description: First view of website.
 * Data: 27/09/2019
 */

import React from "react";

// Components list
import HeaderMain from "features/HeaderMain/HeaderMain";
import CountryList from "features/CountryList/CountryList";

class Home extends React.Component {
  render() {
    return (
      <div className="HomeView">
        <HeaderMain />
        <CountryList countries={this.props.countries} />
      </div>
    );
  }
}

export default Home;
