import React from 'react';
import { Link } from 'react-router-dom';
import JobService from '../../services/JobService';
import JobRecord from './JobRecord';

export default class DisplayAllJobs extends React.Component {

  constructor () {
    super();
    this.state = {
      jobs: [],
      isLoading: true,
    };
    this.jobService = new JobService();
  }

  componentDidMount () {
    this.jobService.listJobs().then(jobData => {
      this.setState({
        jobs: jobData,
        isLoading: false,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render () {
    const {isLoading} = this.state;
    const jobsList = this.state.jobs.map((job, i) => {
      return (
        <JobRecord key={i + 1} unique={i + 1} details={job}
                   routeProps={this.props}/>
      );
    });


    if(isLoading){
      return(
        <h3> Preparing data ...</h3>
      )
    }
    else{
      return (
        <div className="jobs" id="accordion" role="tablist">
          {jobsList.length > 0 ? jobsList : <h2>No job applications</h2>}
          <Link to="/jobs/new-job" className="btn btn-primary">New Job</Link>
        </div>
      );
    }
  }
}
