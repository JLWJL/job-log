import React from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import Registration from './users/Registration';
import Login from './users/Login';
import Dashboard from './users/Dashboard';

export default function Account(props){
	return(
		<div className="accountPage">

			<ul>
				<li>
					<Link to='/account/dashboard'>Dashboard</Link>
				</li>
				<li>
					<Link to='/account/signup'>Sign up</Link>
				</li>
				<li>
					<Link to='/account/login'>Log in</Link>
				</li>

			</ul>

			<Switch>
				<Route path='/account/dashboard' component={Dashboard}/>
				<Route path='/account/signup' component={Registration}/>
				<Route path='/account/login' component={Login}/>
			</Switch>
		</div>
	)
}
