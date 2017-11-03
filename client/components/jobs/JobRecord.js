import React from 'react';
import {Link} from 'react-router-dom';
import JobService from '../../services/JobService';

export default class JobRecord extends React.Component {

	constructor(props) {
		super(props);
		this.jobService = new JobService(this.props.details.app_id);
		this.state = {
			isJobApplied: this.props.details.status,
			isStarred: this.props.details.starred,
		};

		this.handleApply = this.handleApply.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleStar = this.handleStar.bind(this);

	}

	/**
	 * Catch only yyyy-mm-dd part of a date string
	 * @param {String} dateString
	 * @returns {String}
	 */
	stringToDate(dateString = "") {
		if (dateString !== "" && dateString !== null) {
			let reg = /(\d{4})-(\d{2})-(\d{2})/;
			let yyyymmdd = dateString.match(reg);
			return yyyymmdd[0];
		} else {
			return "Null";
		}
	}

	/**TODO
	 * Think about display options with the tab view
	 * @param e
	 * */


	/**
	 * Alert when no link specified, otherwise default action
	 * */
	handleApply(e) {
		let hasHref = e.target.href !== "" && e.target.href !== e.target.baseURI;
		if (!hasHref) {
			alert("You didn't save a link to the job when creating this record");
			e.preventDefault();
		}
	}

	/**
	 * Change application's status asynchronously
	 * '1' is applied, '0' is opposite
	 * */
	handleStatusChange(e) {
		e.preventDefault();
		let value = this.state.isJobApplied;
		let status = value === 0 ? "1" : "0";
		this.jobService.updateJob({"status": status})
			.then(
				() => {
					this.setState({
						isJobApplied: Number(status),
					});
					alert("Status updated!")
				}
			)
			.catch(
				err => {
					alert(`${err}`)
				}
			)
	}

	handleDelete() {
		confirm("Are you sure you want to delete this record?");
		this.jobService.deleteJob()
			.then(
				() => {
					alert("Record deleted!");
					this.props.routeProps.history.push('/jobs');
				}
			)
			.catch(
				err => {
					alert(`${err}`)
				}
			)
	}

	/**
	 * Toggle applicaiton as starred
	 * */
	handleStar(e) {
		e.preventDefault();
		let starredStatus = this.state.isStarred === 0 ? "1" : "0";
		this.jobService.updateJob({"starred": starredStatus})
			.then(()=>{
				this.setState({
					isStarred: Number(starredStatus),
				})
			})
			.catch(err=>{
				alert(`${err}`);
			});
	}


	render() {
		const {details} = this.props;

		const isJobApplied = this.state.isJobApplied === 1;
		const classForApplied = isJobApplied ? "applied" : "";

		const isStarred = this.state.isStarred === 1;
		const classForStarred = isStarred ? "zmdi-star starred" : "zmdi-star-outline";

		return (
			<div className="job-block">
				<div className="left">
					<div id="title">
						<Link to={`/jobs/${details.app_id}`} target="new">{details.title}</Link>
						<i className={"zmdi "+classForStarred} data-starred={isStarred ? 1 : 0}
							 onClick={(e) => {
								 this.handleStar(e)
							 }}
						> </i>
					</div>
					<span id="company">{details.company} - {details.location}</span>
					<div id="description">
						{details.description}
					</div>
				</div>
				{/*Left end*/}

				<div className="right">
					<div id="contact"><i className="zmdi zmdi-account-box"> {details.contact ? details.contact : "Null"}</i></div>
					<div id="salary"><i className="zmdi zmdi-money"> {details.salary ? details.salary : "Null"}</i></div>
					<div id="expire"><i
						className="zmdi zmdi-calendar-close">{this.stringToDate(details.expire)} </i>
					</div>
				</div>
				{/*Right end*/}
				<div className="buttons">
					<a className="link-apply btn btn-primary" href={details.link ? details.link : ""} onClick={(e) => {
						this.handleApply(e)
					}} target="new">Apply</a>
					<div id="btn-status">
						<div id="status" className={"btn btn-secondary " + classForApplied} data-status={isJobApplied ? 1 : 0}
								 onClick={(e) => {
									 this.handleStatusChange(e)
								 }}
						>Applied
						</div>
						<div id="status" className="btn btn-danger" onClick={(e) => {
							this.handleDelete(e)
						}}>Delete
						</div>
					</div>
				</div>
				{/*Job block end*/}
			</div>
		);
	}
}
