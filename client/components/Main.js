import React from 'react';
import {Switch, Route} from 'react-router-dom';
import JobsOverview from './Jobs/JobsOverview';
import Account from './Account';
import HelpPage from './HelpPage';
import NewJob from './Jobs/NewJob';
import NotFoundPage from './NotFoundPage';




export default class Main extends React.Component{
	constructor(props){
		super(props);
		this.state={
			hasError:false,
			error:null,
			info:null
		}
	}


	componentDidCatch(error, info){
		this.setState({
			hasError:true,
			error: error,
			info: info
		})
	}


	render(){
		return(
			<main className="app-content">
				{this.state.hasError ? (
					<div className="error-promps">
						<h1>Opps, Error!</h1>
						<p>Error:</p>
						<p>Details: </p>
					</div>
				):(
					this.props.children
				)}
			</main>			
		)
	}
}