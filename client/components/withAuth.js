import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';

export default function withAuth (Component, someProps) {
  return class Authen extends React.Component {
    constructor (props) {
      super(props);
      this.Auth = new AuthService();
      this.state = {
        isLoggedIn: someProps.isAuthenticated,
        error: false,
        isLoading: someProps.isLoading,
      };
    }

    render () {
      const state = this.state;
      if (state.isLoggedIn) {
        return (<Component isLoggedIn={state.isLoggedIn}/>);
      }
      else if (state.isLoading) {
        return <h3> Loading ...</h3>;
      }
      else {
        return (
          <div>
            <h3>Please log in to manage your jobs applications</h3><br/>
            <Link to="/login" className="btn btn-primary mr-4">Log in</Link>
            <Link to="/signup" className="btn btn-primary">Sign up</Link>
          </div>
        );
      }
    }
  };

}
