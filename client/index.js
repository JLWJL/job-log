//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Components
import './style.css';
import AuthComponent from './components/AuthComponent';

ReactDOM.render((
    <BrowserRouter basename="/">
      <AuthComponent/>
    </BrowserRouter>
  ),
  document.getElementById('root'),
);
