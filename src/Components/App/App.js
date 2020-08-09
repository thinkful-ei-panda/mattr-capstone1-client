import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import PrivateRoute from '../Utils/PrivateRoute'
import './App.css';
import Election from '../Election/Election';
import Header from '../Header'
import Home from '../Home'
import NotLoggedIn from '../NotLoggedIn';
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import Login from '../Login/Login';
import Logout from '../Login/Logout';
import Vote from '../Vote/Vote'
import VoteConfirmation from '../VoteConfirmation';
import NotFoundPage from '../NotFoundPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
          loggedIn: false,
          error: null
    }
  }

  // state = { 
  //   hasError: false
  //   }

  // static getDerivedStateFromError(error) {
  //   console.error(error)
  //   return { hasError: true }
  // }

  render() {
    
    return (
      <main className="App">
        <Header />
        {/* <Nav />         */}
        <Switch>
          
        <Route exact path="/"
                render={() => {
                    return (
                      this.state.isUserAuthenticated ?
                      <Redirect to="/Election" /> :
                      <Redirect to="/Home" /> 
                    )
                }}
              />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Election" component={Election}/>
        
        <PrivateRoute path='/Vote' component={Vote} />
        <Route path='/NotLoggedIn' component={NotLoggedIn} />
        <Route path='/RegistrationForm' component={RegistrationForm} />
        <Route path='/Login' component={Login} />
        <Route path='/Logout' component={Logout} />
        
        <PrivateRoute path='/VoteConfirmation' component={VoteConfirmation} />
        <Route component={NotFoundPage} />
        </Switch>
       
      </main>
    );
  }
}

