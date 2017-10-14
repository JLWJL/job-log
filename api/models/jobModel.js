'use strict';

const db = require('../../config/db');

function listJobs(err, done){
	let sql = "Select * FROM application"
	db.getPool().query(sql, (err, results, fields)=>{
		if(err) {
			return done({
				"message": err.code,
				"status":500
			}, results);
		}
		return done(err, results);
	});
}


function singleJob(values, done){
	let id = db.getPool().escape(values);
	let sql = "SELECT * FROM application WHERE app_id ="+id;
	
	db.getPool().query(sql,(err,results,fields)=>{
		if(err){
			return done({
				"message": err.code,
				"status":500
			}, results);
		}
		return done(err, results);
	});
}


function createJob(values, done){
	let sql = "INSERT INTO application SET ?";
	
	db.getPool().query(sql,[values], (err,results,fields)=>{
		if(err){
			return done({
				"message": err.code,
				"status":500
			}, results);
		}
		return done(err, results);
	})
}


function deleteJob(values, done){
	let sql = "DELETE FROM application WHERE app_id = ?";
	
	db.getPool().query(sql,[values], (err,results,fields)=>{
		if(err){
			return done({
				"message": err.code,
				"status":500
			}, results);
		}
		return done(err, results);
	})
}

module.exports={
	listJobs: listJobs,
	singleJob: singleJob,
	createJob: createJob,
	deleteJob: deleteJob
}