import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "../Utils/PrivateRoute";
import "./App.css";
import Election from "../Election/Election";
import Header from "../Header/Header";
import Home from "../Home/Home";
import NotLoggedIn from "../NotLoggedIn/NotLoggedIn";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import Login from "../Login/Login";
import Vote from "../Vote/Vote";
import VoteConfirmation from "../VoteConfirmation/VoteConfirmation";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import VoteError from "../VoteError/VoteError";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      error: null,
    };
  }

  render() {
    return (
      <main className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return this.state.isUserAuthenticated ? (
                <Redirect to="/Election" />
              ) : (
                <Redirect to="/Home" />
              );
            }}
          />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Election" component={Election} />
          <PrivateRoute path="/Vote" component={Vote} />
          <Route path="/NotLoggedIn" component={NotLoggedIn} />
          <Route path="/RegistrationForm" component={RegistrationForm} />
          <Route path="/Login" component={Login} />
          <PrivateRoute path="/VoteConfirmation" component={VoteConfirmation} />
          <PrivateRoute path="/VoteError" component={VoteError} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    );
  }
}
