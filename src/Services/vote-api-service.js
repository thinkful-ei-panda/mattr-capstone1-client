import config from '../config'
import TokenService from './token-service'

const VoteApiService = {
  getVotes(id) {
    return fetch(`${config.API_ENDPOINT}/vote/${id}`, {
      headers: {
        'authorization' : `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postVote(vote, id) {
    return fetch(`${config.API_ENDPOINT}/vote/${id}`, {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        'authorization' : `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(vote)
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  updateSpirit(vote, id) {
    return fetch(`${config.API_ENDPOINT}/vote/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization' : `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(vote)
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
  }
}

export default VoteApiService