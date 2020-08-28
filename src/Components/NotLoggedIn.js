import React, { Component } from "react";
import { Link } from "react-router-dom";
import Content from "../Content";
import Nav from "./Nav";
import "./NotLoggedIn.css";

export default class NotLoggedIn extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Content>
          <h2>You are not logged in.</h2>
          <Link to="/Login" className="not-logged">
            Log In
          </Link>
          <p className="not-logged">or</p>
          <Link to="/RegistrationForm" className="not-logged">
            {" "}
            Register{" "}
          </Link>
        </Content>
      </div>
    );
  }
}
