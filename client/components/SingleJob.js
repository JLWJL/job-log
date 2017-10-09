import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default class SingleJob extends React.Component {
	
	constructor(){
		super();
		this.state={
			jobs:[]
		}
	}

	componentDidMount(){
		let jobs = [];
		fetch('http://localhost:3000/job')
			.then((res)=>{
				return res.json();
			})
			.then((data)=>{
				this.setState({
					jobs: data
				})
			});
		// console.log("jobs are ", jobs);
		// return jobs
	}

	render(){
		const jobsList = this.state.jobs.map((job,i)=>{
			return(
				<li key={i}>
					<a href="#">{job.title}</a>
				</li>
			);
		})

		return(
			<ul>
				{jobsList}
			</ul>
		)
	}
}

	// componentDidMount(){
		
	// }
