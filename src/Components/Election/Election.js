import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Democrat from '../Images/joe-biden.jpg'
import Republican from '../Images/donald-trump.jpeg'
import Timer from './Timer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const moment = require('moment')

export default class Election extends Component {
  // state = { election:[] }

  constructor(props) {
    super(props);
    this.state = {
      election: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:8000/api/election/1")
    .then(res => {
     return res.json()
    })
    .then(res => {
      console.log(res)
      this.setState({election: res})
    })
  }
   
    render() {
        const { election } = this.props

        return (



            <form>
            <h1> Election Day Deadline: { moment(this.state.election.date_end).fromNow() } </h1>
            <h2>{ this.state.election.date_created}</h2>
            <div className='scorecard-entry'>
                <img src={Democrat} alt="Joe Biden" />
                <div className="stats">
                {/* <h3>{ election.candidate_name }</h3>
                <p>{this.state.election.vote_count}</p> */}
                </div>
            </div>

            <div className='scorecard-entry'>
                <img src={Republican} alt="Donald Trump" />
                <div className="stats">
                {/* <h3>{ this.state.election.candidate_name }</h3>
                <p>{ this.state.election.vote_count}</p> */}
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