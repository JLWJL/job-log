import React from 'react';
import {Switch, Route} from 'react-router-dom';
import JobsOverview from './Jobs/JobsOverview';
import Account from './Account';
import HelpPage from './HelpPage';
import NewJob from './Jobs/NewJob';
import NotFoundPage from './NotFoundPage';




export default class Main extends React.Component{
	render(){
		return(
			<main>
				<Switch>
					<IndexRoute path='/' component={JobsOverview}/>
					<Route path='/account' component={Account}/>
					<Route path='/help' component={HelpPage}/>
					<Route path="*" component={NotFoundPage}/>
				</Switch>
			</main>
		)
	}
}