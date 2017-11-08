import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Registration from './users/Registration';
import Login from './users/Login';
import Dashboard from './users/Dashboard';

export default function Account (props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div className="accountPage">
      <Switch>
        <Route exact path="/account" render={() =>
          isLoggedIn ? <Dashboard/> : <Redirect to='/account/login'/>
        }/>

        <Route path="/account/signup" render={() =>
          isLoggedIn ? <Redirect to='/account'/> : <Registration/>
        }/>

        <Route path="/account/login" render={() =>
          isLoggedIn ? <Redirect to='/account'/> : <Login/>
        }/>

      </Switch>
    </div>
  );
}
