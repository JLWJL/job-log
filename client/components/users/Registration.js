import React from 'react'

export default class Registration extends React.Component{

	constructor(props){
		super(props);
		this.state={
			email:"",
			firstName:"",
			lastName:"",
			password:"",
		}
	}

	handleChange(e){
		const inputName = e.target.name;
		const inputValue = e.target.value;

		this.setState({
			[inputName]:inputValue
		})
	}

	render(){
		return(

			<div>
				<h2>Sign Up</h2>
				<hr/>
				<form id="user-sign-up" onSubmit={this.handleSubmit} encType="multipart/form-data">

				  <div className="form-group">
				    <label htmlFor="email">Email</label>
				    <input type="text" name="email" className="form-control" id="email" placeholder="email" onChange={this.handleChange} value={this.state.email} required/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="firstName">First Name</label>
				    <input type="text" name="firstName" className="form-control" id="firstName" placeholder="Job firstName" onChange={this.handleChange} value={this.state.firstName} required/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="lastName">Last Name</label>
				    <input type="text" name="lastName" className="form-control" id="lastName" placeholder="lastName name" onChange={this.handleChange} value={this.state.lastName} required/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="password">Password</label>
				    <input type="text" name="password" className="form-control" id="password" placeholder="password" onChange={this.handleChange} value={this.state.password} required/>
				  </div>
				  
				  <button type="submit" className="btn btn-primary">Sign up</button>
				  <button type="button" className="btn btn-danger">Cancel</button>
				</form>

				{this.state.isCreated && (

				  <Redirect to='/'/>
				)}
			</div>
		);
	}
}