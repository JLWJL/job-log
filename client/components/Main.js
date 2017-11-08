import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import withAuth from './withAuth';
import UnAuthRoute from './UnAuthRoute';
import HomePage from './HomePage';
import Account from './Account';
import JobsOverview from './jobs/JobsOverview.js';
import Login from './users/Login';
import Logout from './users/Logout';
import Registration from './users/Registration';
import HelpPage from './HelpPage';
import NotFoundPage from './NotFoundPage';

export default function Main ({props}) {
  const AuthAccount = withAuth(Account);
  const AuthJobs = withAuth(JobsOverview);

  return (
    <main className="app-content container">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/help' component={HelpPage}/>

        <Route path='/jobs' render={props => (
          <AuthJobs/>
        )
        }/>

        <Route path='/account' render={props => (
          <AuthAccount/>
        )
        }/>

        <UnAuthRoute path='/signup' exact component={Registration}
                     authProps={props}/>
        <UnAuthRoute path='/login' exact component={Login} authProps={props}/>

        <Route
          path='/logout' exact render={routeProps =>
          props.isAuthenticated ?
            <Logout rProps={routeProps} authProps={props}/>
            : <Redirect to="/"/>
        }
        />

        <Route path='/*' component={NotFoundPage}/>
      </Switch>
    </main>
  );
}
