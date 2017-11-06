import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DisplayAllJobs from './DisplayAllJobs';
import JobDetails from './UpdateJob';
import NewJob from './NewJob';
import NotFoundPage from '../NotFoundPage';

export default class JobsOverview extends React.Component {

	render(){
		return(
			<Switch>
				<Route exact path="/" component={DisplayAllJobs} />

				<Route exact path="/jobs" component={DisplayAllJobs} />
				<Route exact path="/jobs/:app_id(\d+)" component={JobDetails} />
				<Route path="/jobs/new-job" component={NewJob} />

				{<Route path='/jobs/*' component={NotFoundPage}/>}
			</Switch>
		)
	}

}


	// componentDidMount(){

	// }
