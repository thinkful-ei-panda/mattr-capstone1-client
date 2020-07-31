import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker'
import { ElectionListProvider } from './Context/ElectionListContext'
import { ElectionProvider } from './Context/ElectionContext'
import { LoginProvider } from './Context/LoginContext'
import './index.css';
import App from './Components/App/App';


ReactDOM.render(
  <BrowserRouter>
    <LoginProvider>
      <App />
    </LoginProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

