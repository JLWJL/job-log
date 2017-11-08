import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService';

/**TODO
 * Reset password
 * */

export default class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.Auth = new AuthService();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    const inputName = e.target.name;
    const value = e.target.value;

    this.setState({
      [inputName]: value,
    });
  }

  handleSubmit (e) {
    e.preventDefault();

    //Collect form data
    let logInForm = document.getElementById('user-log-in');
    let credential = this.Auth.getFormData(logInForm);

    //Submit
    this.Auth.login(credential).then(
      res => {
        this.props.authProps.setUserLogin(true);
        this.props.rProps.history.push('/');
      },
    ).catch(
      err => {
        // alert("Please check your email and password")
        alert(`Login Error: ${err}`);
      },
    );
  }

  render () {
    return (
      <div className="form-container">
        <div className="form-login">
          <h2>Login</h2>
          <hr/>
          <form id="user-log-in" onSubmit={this.handleSubmit}
                encType="multipart/form-data">

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control"
                     id="email" placeholder="Email"
                     onChange={this.handleChange} value={this.state.email}
                     required/>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control"
                     id="password" placeholder="Password"
                     onChange={this.handleChange} value={this.state.password}
                     required/>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Log in
            </button>
          </form>
          <Link to='/signup' className="link-block left">Join us</Link>
          <a href="#" className="link-block right">
            <span>Forgot password?</span>
          </a>
        </div>
      </div>
    );
  }
}
