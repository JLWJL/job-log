'use strict';

const User = require('../models/userModel');

function SignUp(req, res, next){
	
	User.signUp(req.body, (err, result)=>{
		if(err){
			next(err);
		}else{
			res.status(201).json(result);
		}
	});
}


// function listUsers(req,res, next){
// 	Job.listJobs((err, results)=>{
// 		if(err){
// 			next(err);
// 		}
// 		res.status(200).json(results);
// 	});
// }


// function singleUser(req, res, next){
// 	let id = req.params.user_id;
// 	User.singleUser(id, (err, results)=>{
// 		if(err){
// 			next(err);
// 		}else{
// 			res.status(200).json(results);
// 		}
// 	});
// }


// function deleteUser(req, res, next){
// 	User.deleteUser(req.params.user_id, (err, result)=>{
// 		if(err){
// 			next(err);
// 		}else{
// 			res.status(200).json(result);
// 		}
// 	});
// }

module.exports={
	SignUp: SignUp,
	// ListUsers: listUsers,
	// SingleUser: singleUser,
	// DeleteUser: deleteUser,
}