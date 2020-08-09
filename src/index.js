import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import history from './history'
import App from './Components/App/App';
import { LoginProvider } from './context/LoginContext';

ReactDOM.render(
  <Router history={history}>
      <LoginProvider>
        <App />
      </LoginProvider>
  </Router>,
  document.getElementById('root')
);

