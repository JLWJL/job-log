import React from 'react';
import { Link } from 'react-router-dom';
import JobService from '../../services/JobService';
import JobRecord from './JobRecord';

export default class DisplayAllJobs extends React.Component {

  constructor () {
    super();
    this.state = {
      jobs: [],
    };
    this.jobService = new JobService();
  }

  componentDidMount () {
    this.jobService.listJobs().then(jobData => {
      this.setState({
        jobs: jobData,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render () {
    const jobsList = this.state.jobs.map((job, i) => {
      return (
        <JobRecord key={i + 1} unique={i + 1} details={job}
                   routeProps={this.props}/>
      );
    });

    return (
      <div className="jobs" id="accordion" role="tablist">
        {jobsList}
        <Link to="/jobs/new-job" className="btn btn-primary">New Job</Link>
      </div>
    );
  }
}
