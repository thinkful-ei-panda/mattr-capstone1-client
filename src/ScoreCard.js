import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import VoteScreen from './VoteScreen'
import Democrat from './joe-biden.jpg'
import Republican from './donald-trump.jpeg'

export default class ScoreCard extends Component {
   
    
    render() {
        return (
            <section>
            <h2>Presidential Election 2020</h2>
            <div class='scorecard-entry'>
                <img src={Democrat} />
                <h3>Joe Biden</h3>
                <p>Current Count: 13,342,234</p>
            </div>

            <div class='scorecard-entry'>
                <img src={Republican} />
                <h3>Donald Trump</h3>
                <p>Current Count: 13,342,234</p>
            </div>
            {/* <button>Vote</button> */}
            <Link to='/VoteScreen'>Vote</Link>
        </section>

        )
    }
}
