import React from 'react';
import {Link} from 'react-router-dom';

export default class DisplayAllJobs extends React.Component {
	
	constructor(){
		super();
		this.state={
			jobs:[]
		}
	}

	componentDidMount(){
		let jobs = [];
		fetch('http://localhost:3000/job')
			.then((res)=>{
				return res.json();
			})
			.then((jobsData)=>{
				this.setState({
					jobs: jobsData
				})
			});

	}

	render(){
		const jobsList = this.state.jobs.map((job,i)=>{
			return(
				<tr key={i}>
		      <th scope="row">{job.app_id}</th>
		      <td>{job.title}</td>
		      <td>{job.company}</td>
		      <td>{job.location}</td>
		      <td>{new Date(job.expire).toLocaleDateString('en-UK')}</td>
		      <td>{job.contact}</td>
		      <td>{job.description}</td>
		      <td>{job.other}</td>
		      <td>{job.status}</td>
			  </tr>
			);
		})

		return(
			<div className="jobs-table">
				<table className="table">
				  <thead>
				    <tr>
				      <th>#</th>
				      <th>Job Title</th>
				      <th>Company</th>
				      <th>Location</th>
				      <th>Expire</th>
				      <th>Contact</th>
				      <th>Description</th>
				      <th>Other</th>
				      <th>Status</th>
				    </tr>
				  </thead>
				  <tbody>
				    {jobsList}
				  </tbody>
				</table>
				<Link to="/jobs/new-job" className="btn btn-primary">New Job</Link>
			</div>
		)
	}
}