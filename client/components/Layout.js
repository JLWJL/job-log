import React from 'react';
import {NavLink} from 'react-router-dom';


/***
* This is also an error boundary component
***/
export default class Layout extends React.Component{
	constructor(props){
		super(props);
		this.state={
			hasError:false,
			error:null,
			info:null
		}
	}

	//Catch error from the children component
	componentDidCatch(error, info){
		console.log("hahahah")
		this.setState({
			hasError:true,
			error: error,
			info: info
		})
	}

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
						{this.state.hasError ? (
							<div className="error-promps">
								<h1>Opps, Error!</h1>
								<p>Error </p>
								<p>Details </p>
							</div>
						):(
							this.props.children
						)}
					</main>

					<footer>
						@All rights reserved by Junlong
					</footer>
				</div>
			)
	}


}