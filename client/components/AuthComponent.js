import React from 'react';

import AuthService from '../services/AuthService';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class AuthComponent extends React.Component {
  constructor (props) {
    super(props);
    this.Auth = new AuthService();
    this.state = {
      isLoggedIn: false, //this.Auth.isLoggedIn(),
      isLoading: true,
    };
    this.setUserLogin = this.setUserLogin.bind(this);
  }

  async componentDidMount () {
    //Check login
    let status = await this.Auth.isLoggedIn();
    if(status){
      this.setUserLogin(true);
    }else{
      this.setUserLogin(false);
    }
  }

  componentDidCatch (error, info) {
    this.setState({
      hasError: true,
      error: error,
      info: info,
    });
  }

  setUserLogin (bool) {
    this.setState({
      isLoggedIn: bool,
      isLoading: false,
    });
  }

  render () {
    const {isLoggedIn, isLoading, hasError, error, info} = this.state;
    const authProps = {
      isAuthenticated: isLoggedIn,
      setUserLogin: this.setUserLogin,
      isLoading: isLoading,
    };

    return (
      <div className="app">
        <Header isLoggedIn={isLoggedIn}/>

        {hasError ? (
          <div className="error-promps">
            <h1>Opps, Error!</h1>
            <details style={{whiteSpace: 'pre-wrap'}}>
              {error && error.toString()}
              <br/>
              {info.componentStack}
            </details>
          </div>
        ) : (
          <Main authProps={authProps}/>
        )}

        <Footer />
      </div>
    );
  }

}
