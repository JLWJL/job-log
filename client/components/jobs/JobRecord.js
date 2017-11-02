import React from 'react';
import {Link} from 'react-router-dom';

export default function ({details}) {

	/**
	 * Catch only yyyy-mm-dd part of a date string
	 * @param {String} dateString
	 * @returns {String}
	 */
	function stringToDate(dateString="") {
		if (dateString !== ""&& dateString !==null) {
			let reg = /(\d{4})-(\d{2})-(\d{2})/;
			let yyyymmdd = dateString.match(reg);
			return yyyymmdd[0];
		}else{
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
	function handleApply(e){
		let hasHref = e.target.href !== "" && e.target.href !== e.target.baseURI;
		if(!hasHref) {
			alert("You didn't save a link to the job when creating this record");
			e.preventDefault();
		}
	}



	return (
		<div className="job-block">
			<div className="left">
				<div id="title">
					<Link to={`/jobs/${details.app_id}`} target="new">{details.title}</Link>
					<i className="zmdi zmdi-star-outline"> </i>
				</div>
				<span id="company">{details.company} - {details.Location}</span>
				<div id="description">
					{details.description}
				</div>
			</div>
			{/*Left end*/}

			<div className="right">
				<div id="contact"><i className="zmdi zmdi-account-box"> {details.contact ? details.contact : "Null"}</i></div>
				<div id="salary"><i className="zmdi zmdi-money"> {details.salary ? details.salary : "Null"}</i></div>
				<div id="expire"><i
					className="zmdi zmdi-calendar-close">{stringToDate(details.expire)} </i>
				</div>
			</div>
			{/*Right end*/}
			<div className="buttons">
				<a className="link-apply btn btn-primary" href={details.link? details.link:""} onClick={(e)=>{handleApply(e)}} target="new">Apply</a>
				<div id="btn-status">
					<div id="status" className="btn btn-secondary">Applied</div>
					<div id="status" className="btn btn-danger">Delete</div>
				</div>
			</div>
			{/*Job block end*/}
		</div>
	);
}
