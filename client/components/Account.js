import React from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom';

import Registration from './users/Registration';
import Login from './users/Login';
import Dashboard from './users/Dashboard';


export default function Account(props){
	const LoggedIn = props.isLoggedIn;
	return(
		<div className="accountPage">
			<Switch>
				<Route exact path="/account" render={()=>
					LoggedIn? <Dashboard/> : <Redirect to='/account/login'/>
				}/>

				<Route path="/account/signup" render={()=>
					LoggedIn ? <Redirect to='/account'/> : <Registration />
				}/>

				<Route path="/account/login" render={()=>
					LoggedIn? <Redirect to='/account'/> : <Redirect to="/account/login"/>
				}/>
				
			</Switch>
		</div>
	)
}
