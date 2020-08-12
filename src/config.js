// export default {
// TOKEN_KEY: 'poll-data-client-auth-token',
// API_ENDPOINT: `https://fathomless-reef-21167.herokuapp.com/api`,
// API_KEY: process.env.REACT_APP_API_KEY,
// ID_KEY: 'user_id'
// }

export default {
    API_ENDPOINT: process.env.REACT_APP_API_HOST,
    API_TOKEN: process.env.REACT_APP_API_KEY,
    TOKEN_KEY: 'poll-data-client-auth-token',
    ID_KEY: 'user_id',
    JWT_SECRET: process.env.REACT_APP_JWT_SECRET,
    }
    