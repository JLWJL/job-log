'use strict';

const db = require('../../config/db');
const bcrypt = require('bcrypt');


function signUp(values, done){
	let first_name = values.firstName;
	let last_name = values.lastName;
	let email = values.email;
	
	//Encrypt password with Bcrypt
	bcrypt.genSalt(2)
	.then(
		(salt)=>{
			bcrypt.hash(values.password, salt)
			.then(
				(hash)=>{
					let password = hash;
					let sql = "INSERT INTO user (user_id, email, first_name, last_name, password) values(UUID_SHORT(),?,?,?,?)";	

					db.getPool().query(sql,[email,first_name,last_name, hash], (err,results,fields)=>{
						if(err){
							return done({
								"message": err,
								"status":500
							}, results);
						}
						return done(err, results);
					})
				}
			)
		}
	)
	.catch((err)=>{
		console.log("Bcrypt error ", err)
	});

}


// function listUsers(err, done){
// 	let sql = "Select * FROM user"
// 	db.getPool().query(sql, (err, results, fields)=>{
// 		if(err) {
// 			return done({
// 				"message": err.code,
// 				"status":500
// 			}, results);
// 		}
// 		return done(err, results);
// 	});
// }


// function singleUser(values, done){
// 	let id = db.getPool().escape(values);
// 	let sql = "SELECT * FROM user WHERE app_id ="+id;
	
// 	db.getPool().query(sql,(err,results,fields)=>{
// 		if(err){
// 			return done({
// 				"message": err.code,
// 				"status":500
// 			}, results);
// 		}
// 		return done(err, results);
// 	});
// }


// function deleteUser(values, done){
// 	let sql = "DELETE FROM user WHERE app_id = ?";
	
// 	db.getPool().query(sql,[values], (err,results,fields)=>{
// 		if(err){
// 			return done({
// 				"message": err.code,
// 				"status":500
// 			}, results);
// 		}
// 		return done(err, results);
// 	})
// }

module.exports={
	signUp: signUp,
	// listUsers: listUsers,
	// singleUser: singleUser,
	// deleteUser: deleteJob
}