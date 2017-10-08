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


module.exports={
	ListJobs: listJobs,
	SingleJob: singleJob
}