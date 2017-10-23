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
		console.log("token in storage: ",localStorage.getItem('token'))
		fetch('http://localhost:3000/job',{
			headers:{
				'X-Authentication':localStorage.getItem('token'),
			}
		})
		.then((res)=>{
			console.log("res: ", res);
			if(res.ok){
				return res.json();
			}
			else{
				throw new Error("No access, check your credential");
			}
		})
		.then((jobsData)=>{
			this.setState({
				jobs: jobsData
			})
		})
		.catch(
			err=>alert(err)
		);
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