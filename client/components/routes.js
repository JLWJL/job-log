import React from 'react';
import {Route,IndexRoute, Switch} from 'react-router-dom';
import JobsOverview from './jobs/JobsOverview.js';
import Account from './Account.js';
import HelpPage from './HelpPage';
import Layout from './Layout';
import NotFoundPage from './NotFoundPage';


export default class ClientRoutes extends React.Component{
	render(){
		return(
				<Switch>
					<Route exact path='/' component={JobsOverview}/>
					<Route path='/jobs' component={JobsOverview}/>
					<Route path='/account' component={Account}/>
					<Route path='/help' component={HelpPage}/>
					<Route path='/*' component={NotFoundPage}/>
				</Switch>
		);
	}

}
