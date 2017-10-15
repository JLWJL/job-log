import React from 'react';
import {Redirect} from 'react-router-dom';

export default class NewJob extends React.Component{
	
	constructor(){
		super();
		this.state={
			isCreated:false,
			title:"",
			company:"",
			location:"",
			contact:"",
			expire:'',
			description:"",
			other:""
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
		event.preventDefault();

		//Collect data
		let form = document.getElementById('new-job-form');		
		const formData = new FormData(form); //multipart/form-data format

		//Convert to json format
		let jsonFormData = {};
		for (let entry of formData.entries())
    {
        jsonFormData[entry[0]] = entry[1];
    }
    jsonFormData = JSON.stringify(jsonFormData);

	
		//Validate data



		//Post data
		let init={
			method:'POST',
			body:jsonFormData,
			headers:{
				"Content-Type":"application/json",// body-parser needs this to work
				"Accept": "application/json, application/xml, text/plain, text/html, *.*",
			}
		}
		
		fetch('http://localhost:3000/job', init)
		.then(res=>{
			if(res.ok){
				this.setState({
					isCreated:true
				});
				alert("Job application created");
			}
			else{
				let error = new Error(res.statusText);
				error.res = res
				throw error;
			}
		})
		.catch(err=>{
			alert(err);
		})
	}


	render(){
		return(
			<div>
				<h2>New Job</h2>
				<hr/>
				<form id="new-job-form" onSubmit={this.handleSubmit} encType="multipart/form-data">
				  <div className="form-group">
				    <label htmlFor="title">Title</label>
				    <input type="text" name="title" className="form-control" id="title" placeholder="Job title" onChange={this.handleChange} value={this.state.title} required/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="company">Company</label>
				    <input type="text" name="company" className="form-control" id="company" placeholder="Company name" onChange={this.handleChange} value={this.state.company} required/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="location">Location</label>
				    <input type="text" name="location" className="form-control" id="location" placeholder="Location" onChange={this.handleChange} value={this.state.location} required/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="contact">Contact</label>
				    <input type="text" name="contact" className="form-control" id="contact" onChange={this.handleChange} value={this.state.contact}/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="expire">Expire date</label>
				    <input type="text" name="expire" className="form-control" id="expire" placeholder="yyyy/mm/dd" onChange={this.handleChange} value={this.state.expire}/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="description">Description</label>
				    <textarea name="description" className="form-control" id="description" cols="30" rows="10" onChange={this.handleChange} value={this.state.description}></textarea>
				  </div>
				  <div className="form-group">
				    <label htmlFor="other">Others</label>
				    <textarea name="other" className="form-control" id="other" cols="30" rows="10" onChange={this.handleChange} value={this.state.other}></textarea>
				  </div>
				  
				  <button type="submit" className="btn btn-primary">OK</button>
				  <button type="button" className="btn btn-danger">Cancel</button>
				</form>

				{this.state.isCreated && (

				  <Redirect to='/'/>
				)}
			</div>
		);
	}
}
	


