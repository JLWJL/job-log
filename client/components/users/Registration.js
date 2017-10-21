import React from 'react';
import {Redirect} from 'react-router-dom';
import AuthService from '../../services/AuthService';

export default class Registration extends React.Component{

	constructor(props){
		super(props);
		this.state={
			isRegistered:false,
			email:"",
			firstName:"",
			lastName:"",
			password:"",
		}
		this.Auth = new AuthService();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		const inputName = e.target.name;
		const inputValue = e.target.value;

		this.setState({
			[inputName]:inputValue
		})
	}

	handleSubmit(e){
		e.preventDefault();
		console.log("Auth is ", this.Auth)
		let signUpForm = document.getElementById('user-sign-up');
		let formData = this.Auth.getFormData(signUpForm);

		//Validation



		//Submit
		this.Auth.signup(formData)
		.then(
			res=>{
				this.setState({
					isRegistered:true
				});
				alert("Welcom");
			}
		)
		.catch(
			err=>{
				alert(err)
			}
		);
	}

	render(){
		return(

			<div className="form-container">
				<div className="form-signup">
					<h2>Sign Up</h2>
					<hr/>
					<form id="user-sign-up" onSubmit={this.handleSubmit} encType="multipart/form-data">
					
					  <div className="form-group">
					    <label htmlFor="email">Email</label>
					    <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} required/>
					  </div>
					  <div className="form-group">
					    <label htmlFor="firstName">First Name</label>
					    <input type="text" name="firstName" className="form-control" id="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName} required/>
					  </div>
					  <div className="form-group">
					    <label htmlFor="lastName">Last Name</label>
					    <input type="text" name="lastName" className="form-control" id="lastName" placeholder="Last name" onChange={this.handleChange} value={this.state.lastName} required/>
					  </div>
					  <div className="form-group">
					    <label htmlFor="password">Password</label>
					    <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} required/>
					  </div>
					  
					  <button type="submit" className="btn btn-primary btn-block">Sign up</button>
					</form>
					
					{this.state.isRegistered && (
					
					  <Redirect to='/account/login'/>
					)}
				</div>
			</div>
		);
	}
}