export default class JobService {
  constructor (appId) {
    this.domain = process.env.API_URL || 'http://localhost:3000';
    if (appId !== null) {
      this.appId = appId;
    }
    this.getJob = this.getJob.bind(this);
    this.newJob = this.newJob.bind(this);
    this.updateJob = this.updateJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
  }

  getJob () {
    return fetch(`${this.domain}/v1/job/${this.appId}`, {
      'method': 'GET',
      'headers': {
        'X-Authentication': JSON.parse(localStorage.getItem('user')).token,
      },
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Retrieve job error: ' + res.statusText);
      }
    });
  }

  newJob (body) {
    return fetch(`${this.domain}/v1/job`, {
      'method': 'POST',
      'body': body,
      'headers': {
        'Content-Type': 'application/json',
        'X-Authentication': JSON.parse(localStorage.getItem('user')).token,
      },
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Create job error: ' + res.statusText);
      }
    });
  }

  updateJob (body) {

    return fetch(`${this.domain}/v1/job/${this.appId}`, {
      'method': 'PUT',
      'body': JSON.stringify(body),
      'headers': {
        'Content-Type': 'application/json',
        'X-Authentication': JSON.parse(localStorage.getItem('user')).token,
      },
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Update job error: ' + res.statusText);
      }
    });
  }

  deleteJob () {
    return fetch(`${this.domain}/v1/job/${this.appId}`, {
      'method': 'DELETE',
      'headers': {
        'Content-Type': 'application/json',
        'X-Authentication': JSON.parse(localStorage.getItem('user')).token,
      },
    }).then(
      res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Delete job error: ' + res.statusText);
        }
      },
    );
  }
}

