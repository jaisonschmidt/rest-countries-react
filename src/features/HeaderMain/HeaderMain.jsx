/**
 * File: HeaderMain.jsx
 * Type: Feature
 * Author: Jaison Schmidt
 * Description: Manage all available routes.
 * Data: 26/09/2019
 */
import React from "react";

import "./HeaderMain.scss";

class HeaderMain extends React.Component {
  // change the application theme
  handleChangeTheme() {
    let newTheme = localStorage.getItem("theme") === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.add("theme-transition");
    document.body.setAttribute("data-theme", newTheme);
    window.setTimeout(function() {
      document.documentElement.classList.remove("theme-transition");
    }, 1000);
  }

  render() {
    return (
      <header className="headerMain">
        <div className="container">
          <div className="row">
            <div className="-headerwrapper">
              <div className="-brand">Where in the world?</div>
              <div>
                <button
                  onClick={this.handleChangeTheme}
                  className="-btndarkmode"
                >
                  <span className="-icowrapper">
                    <i className="fa fa-moon-o" aria-hidden="true"></i>
                  </span>
                  <span className="-textbutton">Dark mode</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderMain;
