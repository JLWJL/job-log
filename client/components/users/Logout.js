import React from 'react';
import AuthService from '../../services/AuthService';
import {Redirect} from 'react-router-dom';


export default class Logout extends React.Component{
	constructor(props){
		super(props);
		//this.Auth = new AuthService();
		this.state={
			isLoggedOut:false,
			isLoggingOut:true,
		}
	}

	componentDidMount(){
		// this.Auth.logout();
		setTimeout(()=>{
			this.props.authProps.setUserLogin(false);
			this.props.rProps.history.push('/');

		}, 2000)
	}

	render(){
		const { isLoggedOut, isLoggingOut}=this.state;
		console.log("loggedout? ",isLoggedOut)
		if(isLoggedOut){
			return <Redirect to='/' />
		}
		if(isLoggingOut){
			return(
				<h1>Logging out...</h1>
			);
		}
	}
}