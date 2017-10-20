import React from 'react';


export default class Login extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		let inputName = e.target.name;
		let value = e.target.value;
		this.setState({
			[inputName]:value
		})
	}

	handleSubmit(){

	}


	render(){
		return(
			<div className="form-container">
				<div className="form-login">
					<h2>Login</h2>
					<hr/>
					<form id="user-log-in" onSubmit={this.handleSubmit} encType="multipart/form-data">
				
					  <div className="form-group">
					    <label htmlFor="email">Email</label>
					    <input type="text" name="email" className="form-control" id="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} required/>
					  </div>
				
					  <div className="form-group">
					    <label htmlFor="password">Password</label>
					    <input type="text" name="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} required/>
					  </div>
					  
					  <button type="submit" className="btn btn-primary btn-block">Log in</button>
					</form>
					<a href="#" className="link-block left">
						<span>Join us?</span>
					</a>
					<a href="#" className="link-block right">
						<span>Forgot password?</span>
					</a>
				</div>
			</div>
		);
	}
}