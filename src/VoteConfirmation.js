import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class VoteConfirmation extends Component {
   
    render() {
        return (
                <div>
                    <h3> You're vote was successfully counted!</h3>
                    <Link to='/'>Home</Link>
                </div>
        )
    }
}
