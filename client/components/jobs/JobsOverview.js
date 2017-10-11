import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DisplayAllJobs from './DisplayAllJobs';
import NewJob from './NewJob';
import NotFoundPage from '../NotFoundPage';

export default class JobsOverview extends React.Component {
	render(){
		return(
			<Switch>
				{console.log(`Path: ${this.props.match.path}`)}
				{console.log(`Url: ${this.props.match.url}`)}
				<Route exact path="/" component={DisplayAllJobs}></Route>
				
				<Route exact path="/jobs" component={DisplayAllJobs}></Route>
				
				<Route path="/jobs/new-job" component={NewJob}></Route>
				
				{<Route path='/jobs/*' component={NotFoundPage}/>}
			</Switch>
		)
	}
}

	// componentDidMount(){
		
	// }
