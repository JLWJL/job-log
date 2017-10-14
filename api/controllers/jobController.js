'use strict';

const Job = require('../models/jobModel');

function listJobs(req,res, next){
	Job.listJobs((err, results)=>{
		if(err){
			next(err);
		}
		res.status(200).json(results);
	});
}


function singleJob(req, res, next){
	let id = req.params.app_id;
	Job.singleJob(id, (err, results)=>{
		if(err){
			next(err);
		}else{
			res.status(200).json(results);
		}
	});
}


function createJob(req, res, next){
	
	Job.createJob(req.body, (err, result)=>{
		if(err){
			next(err);
		}else{
			res.status(201).json(result);
		}
	});
}


function deleteJob(req, res, next){
	Job.deleteJob(req.params.app_id, (err, result)=>{
		if(err){
			next(err);
		}else{
			res.status(200).json(result);
		}
	});
}

module.exports={
	ListJobs: listJobs,
	SingleJob: singleJob,
	CreateJob: createJob,
	DeleteJob: deleteJob,
}