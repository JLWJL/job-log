import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default (props) => {

  return (
    <Route
      path={props.path}
      render={routeProps =>
        props.authProps.isAuthenticated ? <Redirect to="/"/>
          : <props.component rProps={routeProps} authProps={props.authProps}/>
      }
    />
  );
}
