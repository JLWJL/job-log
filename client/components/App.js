import React from 'react';
import ReactDOM from 'react-dom';
// require('bootstrap/dist/css/bootstrap.css');
import JobsOverview from './JobsOverview';
import NewJob from './NewJob';

export default class App extends React.Component{
	render(){
		return(
			<div>
				<JobsOverview/>
				<NewJob/>
			</div>
		);
	}
}

// ReactDOM.render(<App/>, document.getElementById(''))