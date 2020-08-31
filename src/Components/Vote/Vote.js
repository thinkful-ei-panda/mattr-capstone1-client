import React, { Component } from "react";
import ElectionApiService from "../../Services/election-api-service";
import history from "../../history";
import Democrat from "../Images/joe-biden.jpg";
import Republican from "../Images/donald-trump.jpeg";
import Nav from "../Nav";
import "./Vote.css";
export default class Vote extends Component {
  state = {
    hasError: false,
    election_id: 1,
    candidate_id: {
      value: null,
      touched: false,
    },
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  updateCandidateChoice(candidate_id) {
    this.setState({ candidate_id: { value: candidate_id, touched: true } });
  }

  handleVote = (event) => {
    event.preventDefault();
    const election_id = this.state.election_id;
    const candidate_id = this.state.candidate_id.value;

    ElectionApiService.postVote({
      election_id: election_id,
      candidate_id: candidate_id,
    })
      .then((res) => {
      candidate_id.value = "";

        if(!res.ok){
          return res.json().then(e => Promise.reject(e))
        }

        return res.json();
      })
      .then((res) => {
        history.push("/VoteConfirmation");
      })
      .catch((error) => {
        history.push("/VoteError");
      });
  };

  render() {
    return (
      <div>
        <Nav />
        <form className="VoteForm" onSubmit={this.handleVote}>
          <h2> Presidential Election 2020 </h2>
          <div className="election-cards">
            <div className="scorecard-entry">
              <img src={Democrat} alt="Joe Biden" />
              <div className="stats">
                <input
                  type="radio"
                  value="1"
                  name="presidential-election-2020"
                  id="candidate_id"
                  onChange={(e) => this.updateCandidateChoice(e.target.value)}
                />
                <label htmlFor="joe-biden-vote"> Joe Biden </label>
              </div>
            </div>

            <div className="scorecard-entry">
              <img src={Republican} alt="Donald Trump" />
              <div className="stats">
                <input
                  type="radio"
                  value="2"
                  name="presidential-election-2020"
                  id="candidate_id"
                  onChange={(e) => this.updateCandidateChoice(e.target.value)}
                />
                <label htmlFor="donald-trump-vote">Donald Trump</label>
              </div>
            </div>
          </div>

          <button type="submit" className="vote-link">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Cast Vote
          </button>
        </form>
      </div>
    );
  }
}
