import React from 'react';
import {Link, NavLink} from 'react-router-dom';



//export default class Header extends React.Component{
export default function(props){

	
		return(
			<header>
						<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						  <a className="navbar-brand" href="#">Logo</a>
						  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
						    <span className="navbar-toggler-icon"></span>
						  </button>
						  <div className="collapse navbar-collapse" id="navbarText">
						    <ul className="navbar-nav mr-auto">
						    {props.isLoggedIn ? (
						      [
						      	<li className="nav-item">
						      		<NavLink to='/jobs' className="nav-link">Your jobs</NavLink>
						      	</li>,
						      	<li className="nav-item">
						      		<NavLink to='/account' className="nav-link">Account</NavLink>
						      	</li>,
						      	<li className="nav-item">
						      		<NavLink to='/account/logout' className="nav-link">Logout</NavLink>
						      	</li>

						      ]
						    ):(
						    	[
						    		<li className="nav-item"	>
						    			<NavLink to='/account/signup' className="nav-link">Sign up</NavLink>
						    		</li>,
							    	<li className="nav-item">
							    		<NavLink to='/account/login' className="nav-link">Log in</NavLink>
							    	</li>
						    	]
						    )
						  }
				          <li className="nav-item">
				    				<NavLink to='/help' className="nav-link">Help</NavLink>
				          </li>
						    </ul>
						  </div>
						</nav>
					</header>
		)

}