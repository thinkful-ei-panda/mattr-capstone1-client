import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../Services/token-service";
import history from "../history";

export default class Nav extends Component {
  handleLogout(event) {
    // event.preventDefault()
    TokenService.clearAuthToken();
    return history.push("/Home");
  }

  render() {
    return (
      <div className="Nav">
        <Link to="/Home">Home</Link>
        <Link to="/Election">Elections</Link>
        {TokenService.hasAuthToken() ? (
          <button className="logout-button" onClick={this.handleLogout}>Logout</button>
        ) : (
          [
            <Link to="/RegistrationForm" key={90}>
              {" "}
              Register{" "}
            </Link>,
            <Link to="/Login" key={92}>
              Login
            </Link>,
          ]
        )}
      </div>
    );
  }
}
