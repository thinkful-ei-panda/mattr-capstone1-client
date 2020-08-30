const inDev = process.env.NODE_ENV !== 'production'
const devURL = 'http://localhost:8000/api'

export default {
  API_ENDPOINT: inDev ? devURL : process.env.REACT_APP_API_HOST,
  API_TOKEN: process.env.REACT_APP_API_KEY,
  TOKEN_KEY: "poll-data-client-auth-token",
  ID_KEY: "user_id",
  JWT_SECRET: process.env.REACT_APP_JWT_SECRET,
};
