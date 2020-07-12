import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import voteScreen from './voteScreen'

export default class voteConfirmationScreen extends Component {
   
    render() {
        return (
        <form>
            <input type="text">User Name</input>
            <input type="text">Password</input>
            <Link to='/' type="submit">Submit</Link>
            <Link to='/'>Home</Link>
        </form>
        )
    }
}
