import React from 'react';
import {NavLink,Route,IndexRoute, Switch, Redirect} from 'react-router-dom';

import AuthService from '../services/AuthService';
import Header from './Header';
import Main from './Main';
import Account from './Account';
import JobsOverview from './jobs/JobsOverview.js';
import HomePage from './HomePage';
import HelpPage from './HelpPage';
import NotFoundPage from './NotFoundPage';

export default class AuthComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isLoggedIn:false,
		};

		this.Auth = new AuthService();
	}

	componentWillMount(){
		//Check login
		if(this.Auth.isLoggedIn()){
			this.setState({
				isLoggedIn:true,
			})
		}
	}


	render(){
		const isLoggedIn = this.state.isLoggedIn;
		return(
			<div className="app">
				<Header isLoggedIn={isLoggedIn} />
			
				<Main>
					<Switch>
						<Route exact path='/' component={HomePage}/>
						<Route path='/help' component={HelpPage}/>

						<Route path='/jobs' component={JobsOverview}/>

						<Route path='/account' render={props=>(
								<Account isLoggedIn={isLoggedIn} />
							)
						}/>
						
						<Route path='/*' component={NotFoundPage}/>
					</Switch>
				</Main>
				<footer>
						@All rights reserved by Junlong
					</footer>
			</div>			
		)
	}

}