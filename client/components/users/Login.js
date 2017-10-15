import React from 'react';


export default class Login extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(){

	}

	handleSubmit(){

	}


	render(){
		return(
			<div>
				<h2>Login</h2>
				<hr/>
				<form id="user-log-in" onSubmit={this.handleSubmit} encType="multipart/form-data">

				  <div className="form-group">
				    <label htmlFor="email">Email</label>
				    <input type="text" name="email" className="form-control" id="email" placeholder="email" onChange={this.handleChange} value={this.state.email} required/>
				  </div>
			
				  <div className="form-group">
				    <label htmlFor="password">Password</label>
				    <input type="text" name="password" className="form-control" id="password" placeholder="password" onChange={this.handleChange} value={this.state.password} required/>
				  </div>
				  
				  <button type="submit" className="btn btn-primary">Log in</button>
				  <button type="button" className="btn btn-danger">Cancel</button>
				</form>
			</div>
		);
	}
}