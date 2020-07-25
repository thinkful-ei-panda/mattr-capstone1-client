import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';
import ScoreCard from './ScoreCard';
import VoteScreen from './VoteScreen';
import Header from './Header'
import Nav from './Nav'
import Democrat from './joe-biden.jpg'
import Republican from './donald-trump.jpeg'
import NotLoggedInScreen from './NotLoggedInScreen';
// import UserRegistrationScreen from './UserRegistrationScreen';
import RegistrationForm from './RegistrationForm/RegistrationForm'
import UserLoginScreen from './UserLoginScreen';
import VoteConfirmationScreen from './VoteConfirmationScreen';
import NotFoundPage from './NotFoundPage';
// import { BrowserRouter, Route, Link } from "react-router-dom";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: '',
          firstName: '',
          lastName: '',
          DOB: '',
          email: '',
          userName: '',
          votePresident: '',
          loggedIn: false,

        }
      ],
      voteScreen: false,
      demCount: 0,
      repCount: 0,
      error: null,
    }
  }

 

  handleSubmit(e) {
    e.preventDefault();
    const baseUrl = 'http://localhost:8000/users/';
    const params = [];
    if (this.state.id) {
      params.push(`search=${this.state.search}`);
    }
    
    const query = params.join('&');
    const url = `${baseUrl}?${query}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          voteScreen: true,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get books at this time.'
        });
      })

  }

  render() {
    
    
    return (
      <main className="App">
        <Header />
        <Nav />
        <ScoreCard />
         {/* <HomePage /> */}
          {/* <Route path='/' component={HomePage} /> */}
          <Switch>
          <Route path='/ScoreCard' component={ScoreCard} />
          <Route path='/VoteScreen' component={VoteScreen} />
          <Route path='/NotLoggedInScreen' component={NotLoggedInScreen} />
          <Route path='/RegistrationForm' component={RegistrationForm} />
          <Route path='/UserLoginScreen' component={UserLoginScreen} />
          <Route path='/VoteConfirmationScreen' component={VoteConfirmationScreen} />
          <Route component={NotFoundPage} />
          </Switch>
       
      </main>
    );
  }
}

export default App;