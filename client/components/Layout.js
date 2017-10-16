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
				<div className="app container">
					<header>
						<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
						  <a class="navbar-brand" href="#">Logo</a>
						  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
						    <span class="navbar-toggler-icon"></span>
						  </button>
						  <div class="collapse navbar-collapse" id="navbarText">
						    <ul class="navbar-nav mr-auto">
						      <li class="nav-item">
						      	<NavLink to='/jobs' className="nav-link">Your jobs</NavLink>
						      </li>
						      <li class="nav-item">
										<NavLink to='/account' className="nav-link">Account</NavLink>
						      </li>
						      <li class="nav-item">
										<NavLink to='/help' className="nav-link">Help</NavLink>
						      </li>
						    </ul>
						  </div>
						</nav>
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