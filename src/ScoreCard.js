import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import VoteScreen from './VoteScreen'

export default class ScoreCard extends Component {
   
    
    render() {
        return (
            <div>
        <Link to='/VoteScreen'>Vote</Link>
        </div>
        )
    }
}
