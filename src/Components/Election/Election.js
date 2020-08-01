import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Democrat from '../Images/joe-biden.jpg'
import Republican from '../Images/donald-trump.jpeg'
import Timer from '../Timer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Election extends Component {
   
    render() {
        const { election } = this.props
        return (
            <form>
                
            <h2>{ election.name }</h2>
            <Timer />
            <div class='scorecard-entry'>
                <img src={Democrat} alt="Joe Biden" />
                <div className="stats">
                <h3>{ election.candidate_name }</h3>
                <p>{election.candidate.vote_count}</p>
                </div>
            </div>

            <div class='scorecard-entry'>
                <img src={Republican} alt="Donald Trump" />
                <div className="stats">
                <h3>{ election.candidate_name }</h3>
                <p>{election.candidate.vote_count}</p>
                </div>
            </div>
            
            <Link to='/Vote'>Vote</Link>
        </form>

        )
    }
}


function ElectionVoteCount({ election }) {
    return (
      <span
        className='Election_ListItem__comment-count fa fa-ticket'
      >
        <FontAwesomeIcon size='lg' icon='ticket' />
        <span
          className='fa fa-ticket'>
          {election.number_of_comments}
        </span>
      </span>
    )
  }