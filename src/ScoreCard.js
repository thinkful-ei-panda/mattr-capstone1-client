import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Democrat from './joe-biden.jpg'
import Republican from './donald-trump.jpeg'

export default class ScoreCard extends Component {
   
    
    render() {
        return (
            <form>
            <h2>Presidential Election 2020</h2>

            <div class='scorecard-entry'>
                <img src={Democrat} alt="Joe Biden" />
                <div className="stats">
                <h3>Joe Biden</h3>
                <p>Current Count: 13,342,234</p>
                </div>
            </div>

            <div class='scorecard-entry'>
                <img src={Republican} alt="Donald Trump" />
                <div className="stats">
                <h3>Donald Trump</h3>
                <p>Current Count: 13,342,234</p>
                </div>
            </div>
            {/* <button>Vote</button> */}
            <Link to='/Vote'>Vote</Link>
        </form>

        )
    }
}
