console.log('app.jsx');
import React from 'react';
import { render } from 'react-dom';
import { Router, Redirect, Route, Link, browserHistory } from 'react-router';


import App from './components/App/App';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';

// TODO: skip sign-in for now

// TODO: authentication requird on auth routes
// TODO: redirect from /user
render(
  <Router history={browserHistory}>
    <Route path="/">
      <Route path="/login" component={LoginPage} />
      <Route path="/user/:username" component={UserProfilePage} />
      <Redirect from="/" to="/login" />
    </Route>
  </Router>    
, document.getElementById('app'));