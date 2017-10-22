import jwtService from 'jsonwebtoken';

export default class AuthService{
	constructor(domain){
		
		this.domain = domain || 'http://localhost:3000';
		this.signup = this.signup.bind(this);
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
		this.fetch = this.fetch.bind(this);
		this.getFormData = this.getFormData.bind(this);
		this.isLoggedIn = this.isLoggedIn.bind(this);

	}

	/**
	 * Collect form data and convert to json format
	 */
	getFormData(formElement){
		let formData = new FormData(formElement);

		let jsonFormData = {};
		for(let d of formData){
			jsonFormData[d[0]] = d[1];
		}
		return JSON.stringify(jsonFormData);
	}


	signup(formdata){
		return this.fetch(`${this.domain}/user/auth/signup`, {
			'method':'POST',
			'body': formdata
		})
	}

	
	login(credential){
		return this.fetch(`${this.domain}/user/auth/login`, {
			method:'POST',
			body: credential
		})
		.then(
			res=>{
				this.setToken(res.token);
			}
		)
	}


	logout(){
		//should invoke later on
		return this.fetch(`${this.domain}/user/auth/logout`)
				.then(
					res=>{
						localStorage.removeItem('token', undefined);
						return res
					}
				)
	}


	isLoggedIn(){
		//should verify later on
		return localStorage.getItem('token');
	}


	setToken(token){
		//Should invoke later on
		localStorage.setItem('token', token)
	}


	fetch(url, options){

		let init = {
			'headers': {
				'Content-Type':"application/json",
				'Accept': "application/json, application/xml, text/plain, text/html, *.*",
				'X-Authentication': localStorage.getItem('token'),
			},
		}

		let newInit = Object.assign(init, options)
		return fetch(url, init).then(this.checkStatus)
	}


	checkStatus(res){
		if(res.ok){
			return res.json();
		}
		else{
			throw new Error(`${res.status}: ${res.statusText}`);
		}
	}
}