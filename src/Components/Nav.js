import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../Services/token-service";

export default class Nav extends Component {
  handleLogout() {
    TokenService.clearAuthToken();
  }

  render() {
   
    return (
      <div className="Nav">
        <Link to="/Home">Home</Link>
        <Link to="/Election">Elections</Link>
        {TokenService.hasAuthToken() ? ( <Link to="/Logout">Logout</Link> ) : ( [<Link to="/RegistrationForm" key={90}> Register </Link>, <Link to="/Login" key={92} >Login</Link>] )}
      </div>
    );
  }
}
