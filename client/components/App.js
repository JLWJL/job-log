import React from 'react';
import ReactDOM from 'react-dom';
import JobsOverview from './JobsOverview';

export default class App extends React.Component{
	render(){
		return(
			<JobsOverview/>
		);
	}
}

// ReactDOM.render(<App/>, document.getElementById(''))