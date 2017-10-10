import React from 'react';



export default class NewJob extends React.Component{
	
	constructor(){
		super();
		this.state={
			isCreated:false
		}
	}

	handleSubmit(){

	}


	render(){
		return(
			<div>
				<h2>New Job</h2>
				<hr/>
				<form action="http://localhost:3000/job" method="POST">
				  <div className="form-group">
				    <label htmlFor="jobTitle">Title</label>
				    <input type="text" name="jobTitle" className="form-control" id="jobTitle" placeholder="Job title" required/>
				    <div class="invalid-feedback">
				      Please provide a valid city.
				    </div>
				  </div>
				  <div className="form-group">
				    <label htmlFor="companyName">Company</label>
				    <input type="text" name="companyName" className="form-control" id="companyName" placeholder="Company name" required/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="jobLocation">Location</label>
				    <input type="text" name="jobLocation" className="form-control" id="jobLocation" placeholder="Location" required/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="jobContact">Contact</label>
				    <input type="text" name="jobContact" className="form-control" id="jobContact"/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="expire">Expire date</label>
				    <input type="text" name="expire" className="form-control" id="expire" placeholder="dd/mm/yyyy"/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="jobDesc">Description</label>
				    <textarea name="jobDesc" className="form-control" id="jobDesc" cols="30" rows="10"></textarea>
				  </div>
				  <div className="form-group">
				    <label htmlFor="jobOthers">Others</label>
				    <textarea name="jobOthers" className="form-control" id="jobOthers" cols="30" rows="10"></textarea>
				  </div>
				  
				  <button type="submit" className="btn btn-primary">OK</button>
				  <button type="button" className="btn btn-danger">Cancel</button>
				</form>
			</div>
		);
	}


}
	


