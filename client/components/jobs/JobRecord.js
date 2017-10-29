import React from 'react';
import {Link} from 'react-router-dom';

export default function ({details}) {

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
	 * */


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
				<a className="link-apply btn btn-primary" href="#" target="new">Apply</a>
				<div id="btn-status">
					<div id="status" className="btn btn-secondary">Applied</div>
					<div id="status" className="btn btn-danger">Delete</div>
				</div>
			</div>
			{/*Job block end*/}
		</div>
	);
}
