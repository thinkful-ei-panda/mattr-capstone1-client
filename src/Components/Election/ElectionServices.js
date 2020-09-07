import config from "../../config"

const ElectionServices = {

   getElection1Data(){
    fetch(`${config.API_ENDPOINT}/election/1`)
    .then(res => {
      return res.json() })
      .then(res => {
        this.setState({election1: res})
      })
  },

  getElections() {
    return fetch(`${config.API_ENDPOINT}/election`)
    .then(res =>
      (!res.ok )
      ? res.json().then((e) => Promise.reject(e))
      : res.json()
    );
  },

  getCandidate1Data(){
    fetch(`${config.API_ENDPOINT}/candidate/1`)
    .then(res => {
     return res.json()
    })
    .then(res => {
      this.setState({candidate1: res})
    })
},
   
  getCandidate2Data(){
    fetch(`${config.API_ENDPOINT}/candidate/2`)
    .then(res => {
     return res.json()
    })
    .then(res => {
      this.setState({candidate2: res})
    })
  },

  getAllVoteData(){
    fetch(`${config.API_ENDPOINT}/vote`)
    .then(res => {
     return res.json()
    })
    .then(res => {
      this.setState({votes: res})
    })
  }
}

export default ElectionServices