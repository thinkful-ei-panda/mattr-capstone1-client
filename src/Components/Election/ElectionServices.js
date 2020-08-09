import config from "../../config"

const ElectionServices = {

   getElection1Data(){
    return  fetch(`${config.API_ENDPOINT}/election/1`, {
      headers:{}
    })
    .then(res => res.json() )
  },

  getCandidate1Data(){
    return fetch(`${config.API_ENDPOINT}/candidate/1`)
    .then(res => {
      console.log(res)
     return res.json()
    })
   
  },

  getCandidate2Data(){
    fetch(`${config.API_ENDPOINT}/candidate/2`)
    .then(res => {
     return res.json()
    })
    .then(res => {
      console.log(res)
      this.setState({candidate2: res})
    })
  },

  getAllVoteData(){
    fetch(`${config.API_ENDPOINT}/vote`)
    .then(res => {
     return res.json()
    })
    .then(res => {
      console.log(res)
      this.setState({votes: res})
    })
  }
}

export default ElectionServices