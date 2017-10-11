import React from 'react';
import {NavLink} from 'react-router-dom';


export default class Layout extends React.Component{
	
	render(){
		return(
			<div className="app">
				<header>
					<ul className="nav">
						<li className="nav-item">
							<NavLink to='/jobs' className="nav-link">Your jobs</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to='/account' className="nav-link">Account</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to='/help' className="nav-link">Help</NavLink>
						</li>
					</ul>
				</header>

				<main className="app-content">
					{this.props.children}
				</main>

				<footer>
					@All rights reserved by Junlong
				</footer>
			</div>
		)
	}


}