import React from 'react';
import {Link} from 'react-router-dom';


export default function NotFoundPage(props){
	return(
		<div className="container">
			<h1>Page Not Found</h1>
			<Link to="/jobs">Back to home page</Link>
		</div>
	)
}