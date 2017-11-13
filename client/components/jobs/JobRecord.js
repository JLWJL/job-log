import React from 'react';
import { Link } from 'react-router-dom';
import JobService from '../../services/JobService';

export default class JobRecord extends React.Component {

  constructor (props) {
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
    this.handleDescription = this.handleDescription.bind(this);

  }

  /**
   * Catch only yyyy-mm-dd part of a date string
   * @param {String} dateString
   * @returns {String}
   */
  stringToDate (dateString) {
    if (dateString !== '' && dateString !== null) {
      let date = new Date(dateString);
      let options = {year: 'numeric', month: '2-digit', day: '2-digit'};
      let dateStr = date.toLocaleDateString('en-GB', options); // in dd/m,/yyyy format
      let newDateString = dateStr.split('/').reverse().join('-'); //convert yyyy/mm/dd

      return newDateString;
    } else {
      return '-';
    }
  }

  /**TODO
   * Think about display options with the tab view
   * @param e
   * */

  /**
   * Alert when no link specified, otherwise default action
   * */
  handleApply (e) {
    let hasHref = e.target.href !== '' && e.target.href !== e.target.baseURI;
    if (!hasHref) {
      alert('You didn\'t save a link to the job when creating this record');
      e.preventDefault();
    }
  }

  /**
   * Change application's status asynchronously
   * '1' is applied, '0' is opposite
   * */
  handleStatusChange (e) {
    e.preventDefault();
    let value = this.state.isJobApplied;
    let status = value === 0 ? '1' : '0';
    this.jobService.updateJob({'status': status}).then(
      () => {
        this.setState({
          isJobApplied: Number(status),
        });
        alert('Status updated!');
      },
    ).catch(
      err => {
        alert(`${err}`);
      },
    );
  }

  handleDelete () {
    let confirm = window.confirm(
      'Are you sure you want to delete this record?');
    if (confirm) {
      this.jobService.deleteJob().then(
        () => {
          alert('Record deleted!');
          this.props.routeProps.history.push('/jobs');
        },
      ).catch(
        err => {
          alert(`${err}`);
        },
      );
    }
  }

  /**
   * Toggle applicaiton as starred
   * */
  handleStar (e) {
    e.preventDefault();
    e.stopPropagation();
    let starredStatus = this.state.isStarred === 0 ? '1' : '0';
    this.jobService.updateJob({'starred': starredStatus}).then(() => {
      this.setState({
        isStarred: Number(starredStatus),
      });
    }).catch(err => {
      alert(`${err}`);
    });
  }

  /**
   * Toggle the full height of description block
   * between elems of description and clicked one itself
   * */
  handleDescription (e) {
    let classes = e.target.classList;

    if (classes.contains('full-description')) {
      classes.remove('full-description');
    }
    else {
      let descriptions = document.querySelectorAll('.description');
      descriptions.forEach((elem, i) => {
        elem.classList.remove('full-description');
      });
      e.target.classList.add('full-description');
    }
  }

  render () {
    const {details} = this.props;

    const isJobApplied = this.state.isJobApplied === 1;
    const classForApplied = isJobApplied ? 'applied' : '';

    const isStarred = this.state.isStarred === 1;
    const classForStarred = isStarred
      ? 'zmdi-star starred'
      : 'zmdi-star-outline';

    return (
      <div className="card">
        <div className="job-bar row card-header collapsed"
             data-target={`#${this.props.unique}`}
             role="tab" data-toggle="collapse" aria-expanded="false"
             aria-controls={this.props.unique}>

          <div className="title col-lg-1 col-md-4 col-12 order-lg-1">
            <strong>
              {details.title}
            </strong>
          </div>

          <i className={'zmdi col-6 col-md-4 col-lg-1 ' + classForStarred}
             data-starred={isStarred ? 1 : 0}
             onClick={(e) => {
               this.handleStar(e);
             }}
          > </i>

          <div className="options col-6 col-md-4 col-lg-1 order-lg-2">
            <div class="dropdown">
              <a class="btn btn-primary btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Actions
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item"
                   href={details.link ? details.link : ''} onClick={(e) => {
                  this.handleApply(e);
                }} target="new">Apply</a>
                <Link to={`/jobs/${details.app_id}`}
                      className="dropdown-item"
                      target="new">Edit</Link>
                <a className={'status dropdown-item ' + classForApplied}
                     data-status={isJobApplied ? 1 : 0}
                     onClick={(e) => {
                       this.handleStatusChange(e);
                     }}
                >Applied
                </a>

                <div class="dropdown-divider"></div>
                <a className="dropdown-item bg-danger" onClick={(e) => {
                  this.handleDelete(e);
                }}>Delete
                </a>
              </div>
            </div>
          </div>

          {/*<div className="apply">*/}
          {/*<a className="link-apply btn btn-primary btn-sm"*/}
          {/*href={details.link ? details.link : ''} onClick={(e) => {*/}
          {/*this.handleApply(e);*/}
          {/*}} target="new">Apply</a>*/}
          {/*</div>*/}



          <i className="col-12 col-sm-4 col-lg-3 order-lg-3">
            {details.company}
          </i>
          <div className="location col-12 col-sm-4 col-lg-2 order-lg-4">
            {details.location}
          </div>
          <div className="deadline col-12 col-sm-4 col-lg-2 order-lg-5">
            {this.stringToDate(details.expire)}
          </div>
        </div>

        <div id={this.props.unique} className="collapse" role="tabpanel"
             data-parent="#accordion">
          hellllll
        </div>
      </div>
    );
  }
}
