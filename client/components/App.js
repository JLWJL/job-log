import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Main from './Main';

export default class App extends React.Component{
	render(){
		return(
			<div>
				<Header/>
				<Main />
				{/*<JobsOverview/>
				<NewJob/>*/}
			</div>
		);
	}
}

// ReactDOM.render(<App/>, document.getElementById(''))