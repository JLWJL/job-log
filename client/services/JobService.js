export default class JobService {
	constructor(appId) {
		this.domain = "http://localhost:3000";
		this.appId = appId;
		this.getJob = this.getJob.bind(this);
	}

	getJob() {
		return fetch(`${this.domain}/job/${this.appId}`, {
			"method": "GET",
			"headers": {
				"X-Authentication": JSON.parse(localStorage.getItem('user')).token,
			}
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error("Retrieve job error: " + res.statusText);
				}
			})
	}
}

