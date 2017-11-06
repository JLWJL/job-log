import React from 'react';
import {validateLength} from "../../services/ValidationService";
import JobService from '../../services/JobService';

/**TODO
 * input type url seems not working
 */

export default class NewJob extends React.Component {

	constructor() {
		super();
		this.jobService = new JobService();
		this.state = {
			errMsg: "",
			title: "",
			company: "",
			location: "",
			salary: "",
			link: "",
			contact: "",
			expire: '',
			description: "",
			other: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDate = this.handleDate.bind(this);

	}

	handleChange(event) {
		const inputName = event.target.name;
		const inputValue = event.target.value;
		this.setState({
			[inputName]: inputValue
		})
	}

	handleDate(event) {

	}

	handleValidation(formData) {
		let title = JSON.parse(formData).title;
		let company = JSON.parse(formData).company;
		let location = JSON.parse(formData).location;

		let res = validateLength(title, "Title");
		if (!res.result) {
			this.setState({errMsg: res.message});
			return false;
		}

		res = validateLength(company, "Company");
		if (!res.result) {
			this.setState({errMsg: res.message});
			return false;
		}

		res = validateLength(location, "Location");
		if (!res.result) {
			this.setState({errMsg: res.message});
			return false;
		}

		return true;
	}


	handleSubmit(event) {
		event.preventDefault();

		//Collect data
		let form = document.getElementById('new-job-form');
		const formData = new FormData(form); //multipart/form-data format

		//Convert to json format
		let jsonFormData = {};
		for (let entry of formData.entries()) {
			jsonFormData[entry[0]] = entry[1];
		}
		jsonFormData = JSON.stringify(jsonFormData);

		//Validate data
		if (!this.handleValidation(jsonFormData)) {
			window.scrollTo(0, 0);
			return false;
		}

		this.setState({
			errMsg: ""
		});

		this.jobService.newJob(jsonFormData)
			.then(
				res => {
					alert("Your record is created!");
					this.props.history.push('/jobs');
				}
			)
			.catch(
				err => {
					alert(err);
				}
			);
	}


	render() {
		return (
			<div>
				<h2>New Job</h2>
				<hr/>
				<form id="new-job-form" onSubmit={this.handleSubmit} encType="multipart/form-data">
					<p style={{color: "red"}}>{this.state.errMsg}</p>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input type="text" name="title" className="form-control" id="title" placeholder="Job title"
									 onChange={this.handleChange} value={this.state.title} required/>
					</div>
					<div className="form-group">
						<label htmlFor="company">Company</label>
						<input type="text" name="company" className="form-control" id="company" placeholder="Company name"
									 onChange={this.handleChange} value={this.state.company} required/>
					</div>
					<div className="form-group">
						<label htmlFor="location">Location</label>
						<input type="text" name="location" className="form-control" id="location" placeholder="Location"
									 onChange={this.handleChange} value={this.state.location} required/>
					</div>
					<div className="form-group">
						<label htmlFor="salary">Salary</label>
						<input type="number" name="salary" className="form-control" id="salary" placeholder="Only digits, e.g 55000"
									 onChange={this.handleChange} value={this.state.salary}/>
					</div>
					<div className="form-group">
						<label htmlFor="contact">Contact</label>
						<input type="text" name="contact" className="form-control" id="contact" placeholder="Contact"
									 onChange={this.handleChange} value={this.state.contact}/>
					</div>
					<div className="form-group">
						<label htmlFor="link">Link</label>
						<input type="url" name="link" className="form-control" id="link"
									 placeholder="Website hyperlink: http://www.example.com"
									 onChange={this.handleChange} value={this.state.link}/>
					</div>
					<div className="form-group">
						<label htmlFor="expire">Expire date</label>
						<input type="date" name="expire" className="form-control" id="expire" placeholder="yyyy/mm/dd"
									 onChange={this.handleChange} value={this.state.expire}/>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<textarea name="description" className="form-control" id="description" cols="30" rows="10"
											onChange={this.handleChange} value={this.state.description}></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="other">Others</label>
						<textarea name="other" className="form-control" id="other" cols="30" rows="10" onChange={this.handleChange}
											value={this.state.other}></textarea>
					</div>

					<button type="submit" className="btn btn-primary" onClick={(e) => {this.handleSubmit(e)}}>OK</button>
					<Link to='/jobs' className="btn btn-danger right">Cancel</Link>
				</form>

			</div>
		);
	}
}



