import React, { Component } from 'react'

export const nullElection = {
  author: {},
  tags: [],
}

const ElectionContext = React.createContext({
  election: nullElection,
  votes: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setElection: () => {},
  clearElection: () => {},
  setVotes: () => {},
  addVote: () => {},
})

export default ElectionContext

export class ElectionProvider extends Component {
  state = {
    election: nullElection,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setElection = election => {
    this.setState({ election })
  }

  setVotes = votes => {
    this.setState({ votes })
  }

  clearElection = () => {
    this.setElection(nullElection)
    this.setVotes([])
  }

  addVote = vote => {
    this.setVotes([
      ...this.state.votes,
      vote
    ])
  }

  render() {
    const value = {
      election: this.state.election,
      votes: this.state.votes,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setElection: this.setElection,
      setVotes: this.setVotes,
      clearElection: this.clearElection,
      addVote: this.addVote,
    }
    return (
      <ElectionContext.Provider value={value}>
        {this.props.children}
      </ElectionContext.Provider>
    )
  }
}