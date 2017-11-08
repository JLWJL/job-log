import jwtService from 'jsonwebtoken';
import ServiceInterface from './ServiceInterface';

export default class AuthService {
  constructor (domain) {

    this.domain = 'http://localhost:3000';
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.fetch = this.fetch.bind(this);
    this.getFormData = this.getFormData.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.getUser = this.getUser.bind(this);

  }

  /**
   * Collect form data and convert to json format
   */
  getFormData (formElement) {
    let formData = new FormData(formElement);

    let jsonFormData = {};
    for (let d of formData) {
      jsonFormData[d[0]] = d[1];
    }
    return JSON.stringify(jsonFormData);
  }

  signup (formdata) {
    return this.fetch(`${this.domain}/user/auth/signup`, {
      'method': 'POST',
      'body': formdata,
    });
  }

  login (credential) {
    return this.fetch(`${this.domain}/user/auth/login`, {
      method: 'POST',
      body: credential,
    }).then(
      res => {
        this.setUser(res);
      },
    );
  }

  logout () {
    return this.fetch(`${this.domain}/user/auth/logout`, {
      method: 'POST',
      body: null,
    }).then(
      res => {
        localStorage.removeItem('user');
        return res;
      },
    );
  }

  isLoggedIn () {
    //should verify later on
    return localStorage.getItem('user');
  }

  setUser (userObj) {
    localStorage.setItem('user', JSON.stringify(userObj));
  }

  getUser () {
    return JSON.parse(localStorage.getItem('user'));
  }

  fetch (url, options) {

    let init = {
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'X-Authentication': this.getUser() || '',
      },
    };

    let newInit = Object.assign(init, options);
    return fetch(url, newInit).then(this.checkStatus);
  }

  checkStatus (res) {
    if (res.ok) {
      return res.json();
    }
    else {
      throw new Error(`${res.status}: ${res.statusText}`);
    }
  }
}
