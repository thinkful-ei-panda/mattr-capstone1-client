import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'


export default class NotLoggedIn extends Component {
   
    
    render() {
        return (
            <div>
                <Content>
                <h2>You are not logged in.</h2>
                <Link to='/Login'>Log In</Link>   
                    <p>or</p>
                <Link to='/RegistrationForm'> Register </Link>
                </Content>
            </div>
        )
    }
}
