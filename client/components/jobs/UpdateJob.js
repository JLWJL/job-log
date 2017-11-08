import React from 'react';
import JobService from '../../services/JobService';
import { Link } from 'react-router-dom';
import { validateLength } from '../../services/ValidationService';

export default class UpdateJob extends React.Component {
  constructor (props) {
    super(props);
    this.appId = this.props.match.params.app_id;
    this.jobService = new JobService(this.appId);
    this.state = {
      jobData: '',
      reject: '',
      isLoading: true,
      errMsg: '',

      //Form data
      title: '',
      company: '',
      location: '',
      salary: '',
      link: '',
      contact: '',
      expire: '',
      description: '',
      other: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.jobService.getJob().then(
      result => {
        console.log('job details: ', result);
        this.setState({
          jobData: result,
          isLoading: false,

          //Load data in form input
          title: result.title,
          company: result.company,
          location: result.location,
          salary: result.salary ? result.salary : '',
          link: result.link,
          contact: result.contact,
          expire: result.expire ? this.stringToDate(result.expire) : '',
          description: result.description,
          other: result.other,
        });
      },
    ).catch(
      err => {
        this.setState({
          jobData: '',
          isLoading: false,
          reject: err,
        });
      },
    );
  }

  stringToDate (dateString) {
    if (dateString !== '' && dateString !== null) {
      let date = new Date(dateString);
      let options = {year: 'numeric', month: '2-digit', day: '2-digit'};
      let dateStr = date.toLocaleDateString('en-GB', options); // in dd/m,/yyyy format
      let newDateString = dateStr.split('/').reverse().join('-'); //convert yyyy/mm/dd
      return newDateString;
    } else {
      return '';
    }
  }

  handleChange (event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({
      [inputName]: inputValue,
    });
  }

  handleValidation (formData) {
    let title = JSON.parse(formData).title;
    let company = JSON.parse(formData).company;
    let location = JSON.parse(formData).location;

    let res = validateLength(title, 'Title');
    if (!res.result) {
      this.setState({errMsg: res.message});
      return false;
    }

    res = validateLength(company, 'Company');
    if (!res.result) {
      this.setState({errMsg: res.message});
      return false;
    }

    res = validateLength(location, 'Location');
    if (!res.result) {
      this.setState({errMsg: res.message});
      return false;
    }

    return true;
  }

  handleSubmit (event) {
    event.preventDefault();

    //Collect data
    let form = document.getElementById('update-job-form');
    const formData = new FormData(form); //multipart/form-data format

    //Convert to json format
    let jsonFormData = {};
    for (let entry of formData.entries()) {
      jsonFormData[entry[0]] = entry[1];
    }
    jsonFormData = JSON.stringify(jsonFormData);

    //Validate data
    if (!this.handleValidation(jsonFormData)) {
      window.scrollTo(0, 0);
      return false;
    }

    this.setState({
      errMsg: '',
    });

    this.jobService.updateJob(JSON.parse(jsonFormData)).then(
      res => {
        alert('Your record is updated!');
        this.props.history.push('/jobs');
      },
    ).catch(
      err => {
        alert(err);
      },
    );
  }

  render () {
    const {jobData, reject} = this.state;
    if (jobData !== '') {
      return (
        <div>
          <h2>Update record</h2>
          <hr/>
          <form id="update-job-form" onSubmit={this.handleSubmit}
                encType="multipart/form-data">
            <p style={{color: 'red'}}>{this.state.errMsg}</p>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" className="form-control"
                     id="title" placeholder="Job title"
                     onChange={this.handleChange} value={this.state.title}
                     required/>
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" name="company" className="form-control"
                     id="company" placeholder="Company name"
                     onChange={this.handleChange} value={this.state.company}
                     required/>
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input type="text" name="location" className="form-control"
                     id="location" placeholder="Location"
                     onChange={this.handleChange} value={this.state.location}
                     required/>
            </div>
            <div className="form-group">
              <label htmlFor="salary">Salary</label>
              <input type="number" name="salary" className="form-control"
                     id="salary" placeholder="Only digits, e.g 55000"
                     onChange={this.handleChange} value={this.state.salary}/>
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input type="text" name="contact" className="form-control"
                     id="contact" placeholder="Contact"
                     onChange={this.handleChange} value={this.state.contact}/>
            </div>
            <div className="form-group">
              <label htmlFor="link">Link</label>
              <input type="url" name="link" className="form-control" id="link"
                     placeholder="Website hyperlink: http://www.example.com"
                     onChange={this.handleChange} value={this.state.link}/>
            </div>
            <div className="form-group">
              <label htmlFor="expire">Expire date</label>
              <input type="date" name="expire" className="form-control"
                     id="expire" placeholder="yyyy/mm/dd"
                     onChange={this.handleChange} value={this.state.expire}/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" className="form-control"
                        id="description" cols="30" rows="10"
                        onChange={this.handleChange}
                        value={this.state.description}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="other">Others</label>
              <textarea name="other" className="form-control" id="other"
                        cols="30" rows="10" onChange={this.handleChange}
                        value={this.state.other}></textarea>
            </div>

            <button type="submit" className="btn btn-primary"
                    onClick={(e) => {this.handleSubmit(e);}}>Save
            </button>
            <Link to='/jobs' className="btn btn-danger right">Cancel</Link>
          </form>
        </div>
      );
    } else if (reject !== '') {
      return (
        <div>
          <h3>Sorry, something wrong for the request</h3>
          <p>{this.state.reject.message}</p>
        </div>
      );
    } else {
      return (
        <h1>Loading...</h1>
      );
    }
  }
}
