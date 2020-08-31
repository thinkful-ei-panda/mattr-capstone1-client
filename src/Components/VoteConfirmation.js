import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default class VoteConfirmation extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h3> Your vote was successfully counted!</h3>
        <Link to="/Election" className="vote-link">
          {" "}
          Go Back{" "}
        </Link>
      </div>
    );
  }
}
