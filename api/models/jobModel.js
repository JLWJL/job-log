'use strict';

const db = require('../../config/db');

function listJobs(done){
	let sql = "Select * FROM application"
	db.getPool().query(sql, (err, results, fields)=>{
		if(err) {
			return done({"Error": "List all applications error"});
		}
		return done(results);
	});
}


function singleJob(values, done){
	let id = db.getPool().escape(values);
	let sql = "SELECT * FROM application WHERE app_id ="+id;
	
	db.getPool().query(sql,[values],(err,results,fields)=>{
		if(err){
			return done({"Error": "Get signle application error: "+err});
		}
		return done(results);
	});
}


function createJob(values, done){
	let sql = "INSERT INTO application SET ?";
	
	db.getPool().query(sql,[values], (err,results,fields)=>{
		if(err){
			return done({"Error": "Create application error: "+err});
		}
		return done(results);
	})
}


module.exports={
	listJobs: listJobs,
	singleJob: singleJob,
	createJob: createJob
}