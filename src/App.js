import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Election from './Election/Election';
import Vote from './Vote';
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NotLoggedIn from './NotLoggedIn';
import RegistrationForm from './RegistrationForm/RegistrationForm'
import Login from './Login/Login';
import VoteConfirmation from './VoteConfirmation';
import NotFoundPage from './NotFoundPage';



export default class App extends Component {

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

 

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const baseUrl = 'http://localhost:8000/users/';
  //   const params = [];
  //   if (this.state.id) {
  //     params.push(`search=${this.state.search}`);
  //   }
    
  //   const query = params.join('&');
  //   const url = `${baseUrl}?${query}`;

  //   fetch(url)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error(res.statusText);
  //       }
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({
  //         voteScreen: true,
  //         error: null
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         error: 'Sorry, could not get books at this time.'
  //       });
  //     })

  // }

  render() {
    
    
    return (
      <main className="App">
        <Header />
        <Nav />        
        <Switch>
        <Route exact path="/"
                render={() => {
                    return (
                      this.state.isUserAuthenticated ?
                      <Redirect to="/home" /> :
                      <Redirect to="/NotLoggedIn" /> 
                    )
                }}
              />
               <Route exact path="/home" component={Home} />
        <Route path='/Election' component={Election} />
        <Route path='/Vote' component={Vote} />
        <Route path='/NotLoggedIn' component={NotLoggedIn} />
        <Route path='/RegistrationForm' component={RegistrationForm} />
        <Route path='/Login' component={Login} />
        <Route path='/VoteConfirmation' component={VoteConfirmation} />
        <Route component={NotFoundPage} />
        </Switch>
       
      </main>
    );
  }
}

