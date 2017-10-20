const jwt = require('../../config/jwt');

exports.checkTokenStatus=function(req, res, next){
	let token = req.get("X-Authentication");

	jwt.verify(token, (err,decoded)=>{
		if(decoded){
			req.user = decoded;
			next();
		}
		else{
			res.status(401).send("Unauthorized");
		}		
	});
}