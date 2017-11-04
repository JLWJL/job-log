import React from 'react';
import AuthService from '../../services/AuthService';
import {validateEmail, validateLength} from "../../services/ValidationService";

export default class Registration extends React.Component{

	constructor(props){
		super(props);
		this.state={
			isRegistered:false,
			email:"",
			firstName:"",
			lastName:"",
			password:"",
			errMsg:"",
		};
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

	handleValidation(formData){
		let email = JSON.parse(formData).email;
		let password = JSON.parse(formData).password;
		let firstName = JSON.parse(formData).firstName;
		let lastName = JSON.parse(formData).lastName;

		let res = validateEmail(email);
		if(!res.result){
			this.setState({errMsg: res.message});
			return false;
		}

		res = validateLength(firstName,"First name");
		if(!res.result){
			this.setState({errMsg: res.message});
			return false;
		}

		res = validateLength(lastName,"Last name");
		if(!res.result){
			this.setState({errMsg: res.message});
			return false;
		}

		res = validateLength(password,"Password");
		if(!res.result){
			this.setState({errMsg: res.message});
			return false;
		}

		return true;
	}

	handleSubmit(e){
		e.preventDefault();

		let signUpForm = document.getElementById('user-sign-up');
		let formData = this.Auth.getFormData(signUpForm);

		//Validation
		if(!this.handleValidation(formData)){
			return false;
		}

		//Submit
		this.Auth.signup(formData)
		.then(
			res=>{
				this.setState({
					isRegistered:true
				});
				alert("Welcome");
				this.props.rProps.history.push('/login');
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
					<p style={{color:"red"}}>{ this.state.errMsg? this.state.errMsg : ""}</p>
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
				</div>
			</div>
		);
	}
}
