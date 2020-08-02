import React, { Component } from 'react'
import ElectionContext from '../../Context/ElectionContext'
import ElectionApiService from '../../Services/election-api-service'
// import { Link } from 'react-router-dom'
import Democrat from '../Images/joe-biden.jpg'
import Republican from '../Images/donald-trump.jpeg'
import { Button } from '../Utils/Utils'
// import VoteConfirmation from './VoteConfirmation'


export default class Vote extends Component {
  static contextType = ElectionContext
  handleSubmit = event => {
    event.preventDefault()
    const { election } = this.context
    const { candidate } = event.target
    ElectionApiService.postVote(election.id, candidate.value)
    .then(this.context.addVote)
    .then(() => {
      Text.value = ''
    })
    .catch(this.context.setError)
  }
  render() {
    return (
      <form className='VoteForm' onSubmit={this.handleSubmit}>
         
            <h2>Presidential Election 2020</h2>

                <div class='scorecard-entry'>
                  <img src={Democrat} alt="Joe Biden" />
                  <div className="stats">              
                  <input type="radio" value="1" name="presidential-election-2020" id="joe-biden-vote" />
                  <label for="joe-biden-vote">Joe Biden</label>
                  </div>
                </div>
            
                <div class='scorecard-entry'>
                  <img src={Republican} alt="Donald Trump" />
                  <div className="stats"> 
                  <input type="radio" value="2" name="presidential-election-2020" id="donald-trump-vote" />
                  <label for="donald-trump-vote">Donald Trump</label>
                  </div>
                </div>

            {/* <Link to='/VoteConfirmation'> Submit </Link> */}
            <Button type='submit'> Cast Vote </Button>
        
        </form>
    )
  }
}
