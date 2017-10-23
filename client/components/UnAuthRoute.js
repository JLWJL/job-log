import React from 'react';
import {Route, Redirect} from 'react-router-dom';


export default ({component:Component, authProps:authProps})=>{
	console.log("Unauthroute: ", authProps.isAuthenticated)
	return(
		<Route
			render={props=>
				authProps.isAuthenticated?
				<Redirect to="/" />
				: <Component />
			}
		/>
	)
}
