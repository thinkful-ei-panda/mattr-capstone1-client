import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import './Vote/Vote.css'
export default class VoteConfirmation extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h3>
          You have successfully voted.
        </h3>
        <Link to="/Election" className="vote-link">
          Go Back
        </Link>
      </div>
    );
  }
}
