import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Registration from './users/Registration';
import Login from './users/Login';


export default function Account(){
	return(
		<div className="accountPage">
			<h1>Your account page</h1>
			<Registration />

			<Switch>
				<Route exact path='/account/login' component={Login}/>
			</Switch>
		</div>
	)
}
