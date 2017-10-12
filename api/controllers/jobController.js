'use strict';

const Job = require('../models/jobModel');

function listJobs(req,res){
	Job.listJobs((results)=>{
		res.json(results);
	});
}


function singleJob(req,res){
	let id = req.params.app_id;
	Job.singleJob(id, (results)=>{
		if(results.length==0){
			res.send(results);
		}else{
			res.json(results);
		}
	});
}


function createJob(req, res){
	console.log(req.body);
	Job.createJob(req.body, (result)=>{
		if(result.Error){
			res.status(400).send(result);
		}else{
			res.status(201).json(result);
		}
	});
}

module.exports={
	ListJobs: listJobs,
	SingleJob: singleJob,
	CreateJob: createJob,
}