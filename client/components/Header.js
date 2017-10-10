import React from 'react';
import {Link} from 'react-router-dom';



export default class Header extends React.Component{
	render(){
		return(
			<nav>
				<ul>
					<li>
						<Link to='/jobs'>Your jobs</Link>
					</li>
					<li>
						<Link to='/account'>Account</Link>
					</li>
					<li>
						<Link to='/help'>Help</Link>
					</li>
				</ul>
			</nav>
		)
	}
}