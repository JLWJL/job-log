import React from 'react';
import AuthService from '../services/AuthService';
import {Redirect} from 'react-router-dom';

export default function withAuth(Component){
	return class Authen extends React.Component{
		constructor(props){
			super(props);
			this.state={
				isLoggedIn:false,
				error: false,
				isLoading: true
			}

			this.Auth = new AuthService();
		}

		componentDidMount(){
			if(this.Auth.isLoggedIn()){
				this.setState({
					isLoggedIn:true,
					isLoading:false,
				})
			}
			else{
				this.setState({
					isLoggedIn:false,
					isLoading:false
				})
			}
		}

		render(){
			const state = this.state;
			if(state.isLoggedIn){
				return (<Component isLoggedIn={state.isLoggedIn}/>)
			}
			if(state.isLoading){
				return <h3> Loading ...</h3>
			}
			if(state.error){
				throw state.error
			}
			else{
				return <Redirect to="/login" />
			}
		}
	}



}