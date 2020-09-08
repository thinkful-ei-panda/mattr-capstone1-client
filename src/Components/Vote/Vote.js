import React, { Component } from "react";
import ElectionApiService from "../../Services/election-api-service";
import history from "../../history";
import Democrat from "../Images/joe-biden.jpg";
import Republican from "../Images/donald-trump.jpeg";
import Nav from "../Nav/Nav";
import "./Vote.css";
export default class Vote extends Component {


  state = {
    error: null,
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
        history.push("/VoteConfirmation");
      })
      .catch((res) => {
        console.error('from catch', res.error);
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="vote-box">
        <Nav />
        <form className="VoteForm" onSubmit={this.handleVote}>
          <h2> Presidential Election 2020 </h2>
          <div className="election-cards">
            <div className="vote-input">
              <img src={Democrat} className="vote-img" alt="Joe Biden" />
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

            <div className="vote-input">
              <img src={Republican} className="vote-img" alt="Donald Trump" />
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

          <div role="alert">{error && <p className="red">{error}</p>}</div>
          
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
