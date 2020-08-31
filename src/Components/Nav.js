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

  handleLogoutClick = () => {};

  renderLogoutLink() {
    return (
      <Link onClick={this.handleLogout} to="/">
        Logout
      </Link>
    );
  }

  renderLoginLink() {
    return [
      <Link to="/registrationform" key="register">
        Register
      </Link>,

      <Link to="/login" key="login">
        Login
      </Link>,
    ];
  }

  render() {
    TokenService.hasAuthToken()
      ? this.renderLogoutLink()
      : this.renderLoginLink();

    return (
      <div className="Nav">
        <Link to="/Home">Home</Link>
        <Link to="/Election">Elections</Link>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </div>
    );
  }
}
