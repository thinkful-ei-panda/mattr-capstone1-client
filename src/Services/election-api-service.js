import TokenService from "./token-service";
import config from "../config";
import history from "../../history";
const ElectionApiService = {
  
  getElections() {
    return fetch(`${config.API_ENDPOINT}/election`)
    .then(res =>
      (!res.ok )
      ? res.json().then((e) => Promise.reject(e))
      : res.json()
    );
  },

  postVote(vote) {
    return fetch(`${config.API_ENDPOINT}/vote`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "authorization": `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(vote),
    })
    .then(res =>
      (!res.ok)
      ? res.json().then((e) => Promise.reject(e))
      : res.json()
    )
    .then(
      history.push("/VoteConfirmation")
    )
  },

  updateVote(vote, id) {
    return fetch(`${config.API_ENDPOINT}/vote/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "authorization": `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(vote),
    })
    .then(res =>
      (!res.ok)
      ? res.json().then((e) => Promise.reject(e))
      : res.json()
    )
  }
};

export default ElectionApiService;
