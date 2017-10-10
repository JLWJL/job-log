import React from 'react';
import {Switch, Route} from 'react-router-dom';
import JobsOverview from './JobsOverview';
import Account from './Account';
import HelpPage from './HelpPage';




export default class Main extends React.Component{
	render(){
		return(
			<main>
				<Switch>
					<Route path='/jobs' component={JobsOverview}/>
					<Route path='/account' component={Account}/>
					<Route path='/help' component={HelpPage}/>
				</Switch>
			</main>
		)
	}
}