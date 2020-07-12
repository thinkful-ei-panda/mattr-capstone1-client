import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <Link to='/ScoreCard'>
          Home
        </Link>
        <Link to='/VoteScreen'>
          Vote
        </Link>
        <Link to='/UserLoginScreen'>
          Login
        </Link>
        <Link to='/UserRegistrationScreen'>
          Register
        </Link>
        <Link to='/voteConfirmationScreen'>
        Confirmation
        </Link>
      </div>
    )
  }
}
