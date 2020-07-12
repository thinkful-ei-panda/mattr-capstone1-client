import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import democrat from './joe-biden.jpg'
// import republican from './donald-trump.jpeg'
import VoteConfirmationScreen from './VoteConfirmationScreen'


export default class VoteScreen extends Component {
  render() {
    return (
    <section>
        {this.props.children}
        <Link to='/VoteConfirmationScreen' type="button">Vote</Link>
    </section>
    )
  }
}
