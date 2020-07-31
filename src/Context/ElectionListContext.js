import React, { Component } from 'react'

const ElectionListContext = React.createContext({
  electionList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setElectionList: () => {},
})
export default ElectionListContext

export class ElectionListProvider extends Component {
  state = {
    electionList: [],
    error: null,
  };

  setElectionList = electionList => {
    this.setState({ electionList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      electionList: this.state.electionList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setElectionList: this.setElectionList,
    }
    return (
      <ElectionListContext.Provider value={value}>
        {this.props.children}
      </ElectionListContext.Provider>
    )
  }
}