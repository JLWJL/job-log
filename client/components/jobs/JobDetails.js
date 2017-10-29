import React from 'react';
import JobService from '../../services/JobService';

class JobDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobData: "",
			reject: "",
			isLoading: true,
		};
		this.appId = this.props.match.params.app_id;
		this.jobService = new JobService(this.appId);
	}

	componentDidMount() {
		this.jobService.getJob()
			.then(
				result=>{
					console.log("Received job result: ", result);
					this.setState({
						jobData: result,
						isLoading: false,
					});
				}
			)
			.catch(
				err=>{
					this.setState({
						jobData: "",
						isLoading: false,
						reject: err,
					});
				}
			)
	}

	render() {
		const {jobData, reject} = this.state;
		if (jobData !== "") {
			return (
				<div>
					<h1> Title {jobData.title}</h1>
					<h1> Company {jobData.company} </h1>
					<h1> Expire {jobData.expire} </h1>
					<h1> Contact {jobData.contact} </h1>
					<h1> Title {jobData.title} </h1>
					<h1> Title {jobData.title} </h1>
					<h1> Title {jobData.title} </h1>
				</div>
			);
		} else if (reject !== "") {
			return (
				<div>
					<h3>Sorry, something wrong for the request</h3>
					<p>{this.state.reject.message}</p>
				</div>
			);
		} else {
			return (
				<h1>Loading...</h1>
			)
		}
	}
}

export default JobDetails;
