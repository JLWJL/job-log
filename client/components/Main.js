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

export default function Main ({authProps}) {
  const AuthAccount = withAuth(Account, authProps);
  const AuthJobs = withAuth(JobsOverview, authProps);

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
                     authProps={authProps}/>
        <UnAuthRoute path='/login' exact component={Login} authProps={authProps}/>

        <Route
          path='/logout' exact render={routeProps =>
          authProps.isAuthenticated ?
            <Logout rProps={routeProps} authProps={authProps}/>
            : <Redirect to="/"/>
        }
        />

        <Route path='/*' component={NotFoundPage}/>
      </Switch>
    </main>
  );
}
