import React from 'react';

export default class NewJob extends React.Component{
	
	constructor(){
		super();
		this.state={
			isCreated:false,
			jobTitle:"",
			companyName:"",
			jobLocation:"",
			jobContact:"",
			expire:"",
			jobDesc:"",
			jobOthers:""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDate = this.handleDate.bind(this);

	}

	handleChange(event){
		const inputName = event.target.name;
		const inputValue = event.target.value;
		this.setState({
			[inputName]:inputValue
		})
	}

	handleDate(event){
		
	}

	handleSubmit(event){

	}


	render(){
		return(
			<div>
				<h2>New Job</h2>
				<hr/>
				<form action="http://localhost:3000/job" method="POST">
				  <div className="form-group">
				    <label htmlFor="jobTitle">Title</label>
				    <input type="text" name="jobTitle" className="form-control" id="jobTitle" placeholder="Job title" onChange={this.handleChange} value={this.state.jobTitle} required/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="companyName">Company</label>
				    <input type="text" name="companyName" className="form-control" id="companyName" placeholder="Company name" onChange={this.handleChange} value={this.state.companyName} required/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="jobLocation">Location</label>
				    <input type="text" name="jobLocation" className="form-control" id="jobLocation" placeholder="Location" onChange={this.handleChange} value={this.state.jobLocation} required/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="jobContact">Contact</label>
				    <input type="text" name="jobContact" className="form-control" id="jobContact" onChange={this.handleChange} value={this.state.jobContact}/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="expire">Expire date</label>
				    <input type="text" name="expire" className="form-control" id="expire" placeholder="yyyy/mm/dd" onChange={this.handleDate} value={this.state.expire}/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="jobDesc">Description</label>
				    <textarea name="jobDesc" className="form-control" id="jobDesc" cols="30" rows="10" onChange={this.handleChange} value={this.state.jobDesc}></textarea>
				  </div>
				  <div className="form-group">
				    <label htmlFor="jobOthers">Others</label>
				    <textarea name="jobOthers" className="form-control" id="jobOthers" cols="30" rows="10" onChange={this.handleChange} value={this.state.jobOthers}></textarea>
				  </div>
				  
				  <button type="submit" className="btn btn-primary">OK</button>
				  <button type="button" className="btn btn-danger">Cancel</button>
				</form>
			</div>
		);
	}


}
	


