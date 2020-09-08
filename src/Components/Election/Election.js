import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import Democrat from '../Images/joe-biden.jpg'
import Republican from '../Images/donald-trump.jpeg'
import Nav from '../Nav/Nav';
import './Election.css';

const moment = require('moment');


export default class Election extends Component {

  constructor(props) {
    super(props);
    this.state = {
      election: {},
      candidate1: [],
      candidate2: [],
      votes: [],
    }
  }
 
  getCandidate1Data(){
    fetch(`${config.API_ENDPOINT}/candidate/1`)
    .then(res => {
     return res.json()
    })
    .then(res => {
      this.setState({candidate1: res})
    })
  }

  getCandidate2Data(){
    fetch(`${config.API_ENDPOINT}/candidate/2`)
    .then(res => {
     return res.json()
    })
    .then(res => {
      this.setState({candidate2: res})
    })
  }

  getAllVoteData(){
    fetch(`${config.API_ENDPOINT}/vote`)
    .then(res => {
     return res.json()
    })
    .then(res => {
      this.setState({votes: res})
    })
  }

  getElection(){
    fetch(`${config.API_ENDPOINT}/election`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      this.setState({election: res[0]})
    })
  }

  componentDidMount(){
    this.getCandidate1Data()
    this.getCandidate2Data()
    this.getAllVoteData()
    this.getElection()
  }

    render() {
      function countTotalVotes(arr){
            return arr.length
          }
        
      function countVotes(arr, num){
        let results = 0;
        for(let i in arr){
          if(arr[i].candidate_id == num){
            results += 1
          };
        };
        return results
      };

      const totalVotes = countTotalVotes(this.state.votes);
      const bidenVotes = countVotes(this.state.votes, this.state.candidate1.candidate_id);
      const trumpVotes = countVotes(this.state.votes, this.state.candidate2.candidate_id);
      
        return (

        <div className='wrapper'>
          <Nav />  
            <div className='login-box animate__animated animate__fadeInDownBig'>
            
            <header>
            <h2>{ this.state.election.election_name }</h2>
            <h3> Election Day Deadline: { moment(this.state.election.date_end).fromNow() } </h3>
            <h3>Total Votes: {totalVotes}</h3>
            </header>

            <div className='election-cards' >
              <div className='scorecard-entry animate__animated animate__fadeInLeftBig'>
                  <img src={Democrat} className='election-img' alt="Joe Biden" />
                  <div className="stats">
                  <h4 className='light'>{this.state.candidate1.candidate_name}</h4>
                  <p className='light'>Votes: {bidenVotes} </p>
                  </div>
              </div>

              <div className='scorecard-entry animate__animated animate__fadeInRightBig'>
                  <img src={Republican} className='election-img' alt="Donald Trump" />
                  <div className="stats">
                  <h4 className='light' > {this.state.candidate2.candidate_name} </h4>
                  <p className='light'> Votes: {trumpVotes} </p>
                  </div>
              </div>
              </div>
              
              <Link to='/Vote' className='vote-link'> Vote </Link>
          </div>
        </div>
        )
    }
  }

