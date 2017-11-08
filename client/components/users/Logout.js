import React from 'react';
import AuthService from '../../services/AuthService';
import { Redirect } from 'react-router-dom';

export default class Logout extends React.Component {
  constructor (props) {
    super(props);
    //this.Auth = new AuthService();
    this.state = {
      isLoggedOut: false,
      isLoggingOut: true,
    };

    this.Auth = new AuthService();
  }

  componentDidMount () {
    setTimeout(() => {
      this.Auth.logout().then(res => {

        this.props.authProps.setUserLogin(false);
        this.props.rProps.history.push('/');
      }).catch(err => {
        alert(`Logout error ${err}`);
      });

    }, 2000);
  }

  render () {
    const {isLoggedOut, isLoggingOut} = this.state;

    if (isLoggedOut) {
      return <Redirect to='/'/>;
    }
    if (isLoggingOut) {
      return (
        <h1>Logging out...</h1>
      );
    }
  }
}
