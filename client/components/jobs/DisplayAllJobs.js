import React from 'react';
import {Link} from 'react-router-dom';
import JobRecord from './JobRecord';

export default class DisplayAllJobs extends React.Component {

	constructor() {
		super();
		this.state = {
			jobs: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/job', {
			headers: {
				'X-Authentication': localStorage.getItem('token'),
			}
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				else {
					throw new Error("No access, check your credential");
				}
			})
			.then((jobsData) => {
				this.setState({
					jobs: jobsData
				})
			})
			.catch(
				err => alert(err)
			);
	}

	render() {
		const jobsList = this.state.jobs.map((job, i) => {
			return (
				<JobRecord key={i + 1} details={job}/>
			);
		});

		return (
			<div className="jobs">
				{jobsList}
				<Link to="/jobs/new-job" className="btn btn-primary">New Job</Link>
			</div>
		)
	}
}
