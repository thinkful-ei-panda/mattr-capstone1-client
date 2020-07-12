import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'
import UserLoginScreen from './UserLoginScreen'

export default class NotLoggedInScreen extends Component {
   
    
    render() {
        return (
            <Content>
            <h2>You are not logged in.</h2>
        <Link to='/UserLoginScreen'>Log In</Link>   
           <p>or</p>
        <Link to='/UserRegistrationScreen'>Register</Link>
        </Content>
        )
    }
}
