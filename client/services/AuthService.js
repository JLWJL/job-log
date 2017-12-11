import jwt from 'jsonwebtoken';
//import ServiceInterface from './ServiceInterface';

export default class AuthService {
  constructor () {

    this.domain = process.env.API_URL || 'http://localhost:3000/api';
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
    return this.fetch(`${this.domain}/v1/user/auth/signup`, {
      'method': 'POST',
      'body': formdata,
    });
  }

  login (credential) {
    return this.fetch(`${this.domain}/v1/user/auth/login`, {
      method: 'POST',
      body: credential,
    }).then(
      res => {
        this.setUser(res);
      },
    );
  }

  logout () {
    return this.fetch(`${this.domain}/v1/user/auth/logout`, {
      method: 'POST',
      body: null,
    }).then(
      res => {
        localStorage.removeItem('user');
        return res;
      },
    );
  }

  /**
   * Check the validation status of token stored in local storage
   * @returns {boolean}
   */
  async isLoggedIn () {
    //should verify later on
    if (localStorage.getItem('user')) {
      //get token
      let token = JSON.parse(localStorage.getItem('user')).token;

      //Send token back to server for validation
      let result = await this.fetch(`${this.domain}/v1/user/auth`, {
        method: 'POST',
        body: JSON.stringify({'token': token}),
      });
      return result;
    }
    else {
      return false;
    }
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

    /**TODO
     * Refactor new Promise() with await
     */
    return new Promise((resolve, reject) => {
      fetch(url, newInit).then(this.checkStatus).then(
        //determin the Promise
        (data) => {
          resolve(data);
        },
        () => {
          reject(false);
        });
    }) //Promise executor ends
      .catch(err => {
        return false;
      });
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
