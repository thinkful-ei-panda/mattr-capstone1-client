import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class UserRegistrationScreen extends Component {
   
    
    render() {
        return (
            <form>
            <input type="text">First Name</input>
            <input type="text">Last Name</input>
            <input type="text">User Name</input>
            <input type="text">Password</input>
            <input type="text">Retype Password</input>
            <Link to='/' type="submit">Submit</Link>
            
        <Link to='/'>Home</Link>
        </form>
        )
    }
}
