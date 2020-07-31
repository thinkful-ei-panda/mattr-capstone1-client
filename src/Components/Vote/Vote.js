import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Democrat from '../Images/joe-biden.jpg'
import Republican from '../Images/donald-trump.jpeg'
// import VoteConfirmation from './VoteConfirmation'


export default class Vote extends Component {
  render() {
    return (
      <form>
         
            <h2>Presidential Election 2020</h2>

                <div class='scorecard-entry'>
                  <img src={Democrat} alt="Joe Biden" />
                  <div className="stats">              
                  <input type="radio" value="joe-biden-vote" name="presidential-election-2020" id="joe-biden-vote" />
                  <label for="joe-biden-vote">Joe Biden</label>
                  </div>
                </div>
            
                <div class='scorecard-entry'>
                  <img src={Republican} alt="Donald Trump" />
                  <div className="stats"> 
                  <input type="radio" value="donald-trump-vote" name="presidential-election-2020" id="donald-trump-vote" />
                  <label for="donald-trump-vote">Donald Trump</label>
                  </div>
                </div>

            
            <Link to='/VoteConfirmation'> Submit </Link>
        
        </form>
    )
  }
}
