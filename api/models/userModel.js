'use strict';

const db = require('../../config/db');
const bcrypt = require('bcrypt');


function signUp(values, done){
	let first_name = values.firstName;
	let last_name = values.lastName;
	let email = values.email;
	let password = values.password
	
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
		console.log("Bcrypt hashing password error ", err)
		done({
			"message": err,
			"status":500
		}, null)
	});
}


function login(values, done){
	let email = values.email,
			password = values.password;
	console.log("email is ", email)

	if(!email || !password){
		res.status(400).send({"message":"Invalid credentials"});
	}else{
		db.getPool().query("SELECT * FROM user WHERE email=?", [email],
			(err,results,fields)=>{
				if(err){
					done({"message":"Database Error","status":500},null);
				}
				else if(results.length<1){
					done({"message":"User not found"},null);
				}

				else{
					console.log(results[0].password);
					console.log("Password is string ", typeof results[0].password)

					bcrypt.compare(password, results[0].password)
					.then(
						(res)=>{
							console.log("res is ", res)
							//Password not matched and return error messgae
							if(!res){
								done({"message":"Wrong password"},null)
							}
							//Matched and return user data for session
							else{
								done(null, results[0].user_id);
							}
						}
					)
					.catch(
						(err)=>{
							console.log("Bcrypt checking password error ", err)
						})
				}
			}
		)
	}
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
	login: login,
	// listUsers: listUsers,
	// singleUser: singleUser,
	// deleteUser: deleteJob
}