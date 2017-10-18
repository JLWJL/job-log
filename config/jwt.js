const jwt = require('jsonwebtoken');
const jwtConfig = require('./config').jwtConfig;
const MemoryCache = require('fast-memory-cache');

const BlackList = new MemoryCache();

const EXPIRATION = 3600*72; //3 days

const JWT_INVOKED = 0;
const JWT_VALID 	= 1;
const JWT_EXPIRED = 2;
const JWT_INVALID = 3;


/**
 * Return jwt token 
 */
exports.sign = function sign(payload){
	let token = jwt.sign(
		{userId:payload.user_id},
		jwtConfig.SECRET,
		{expiresIn:'3d'}
	);
	return token;
}


/**
 * Invalid a token
 */
exports.invoke = function invoke(token){
	BlackList.set(token, EXPIRATION);
}


/**
 * Verify a token
 */
exports.verify = function verify(token){
	if(!isInvoked(token)){
		jwt.verify(token, SECRETE, (err,decoded)=>{
			if(decoded){
				return decoded
			}
			if(err.message = 'jwt expired'){
				return({"status":JWT_EXPIRED});
			}else{
				return({"status":JWT_INVALID});
			}
			
		});

	}
}


exports.isInvoked = function isInvoked(token){
	return BlackList.get(token)!==undefined;
}