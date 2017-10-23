import React from 'react';
import {Switch, Route} from 'react-router-dom';

import withAuth from './withAuth';
import HomePage from './HomePage';
import Account from './Account';
import JobsOverview from './jobs/JobsOverview.js';
import Login from './users/Login';
import Registration from './users/Registration';
import HelpPage from './HelpPage';
import NotFoundPage from './NotFoundPage';


export default function Main(props){
	const AuthAccount = withAuth(Account);
	const AuthJobs = withAuth(JobsOverview);
	return(
		<main className="app-content">
			<Switch>
				<Route exact path='/' component={HomePage}/>
				<Route path='/help' component={HelpPage}/>

				<Route path='/jobs' render={props=>(
						<AuthJobs/>
					)
				}/>

				<Route path='/account' render={props=>(
						<AuthAccount/>
					)
				}/>
				
				{!props.isLoggedIn &&
					[<Route path='/login' component={Login} />,
					<Route path='/signup' component={Registration} />,
					]
				}

				<Route path='/*' component={NotFoundPage}/>
			</Switch>
		</main>			
	)
}