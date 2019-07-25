const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next) {
    
    //to get access of the token to use to indicat we've authed in our routes
    //Can access the token by reading in the header of the jwt
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({msg: 'No token, authorization denied'});
    }

    //else
    try {
    //decoding and verifying the token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded;
    next();
    }
    catch(e) {
        res.status(400).json({msg: 'Token is invalid'});
    }

}

module.exports = auth;
