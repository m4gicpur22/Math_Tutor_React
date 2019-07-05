const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next) {
    
    //????
    const token = req.header('x-auth-token');

    if(!token)
        return res.status(401).json({msg: 'No token, authorization denied'});

    //else
    try {
    //decoding and verifying the token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded;
    next();
    }
    catch(e) {
        res.status(401).json({msg: 'Token is invalid'});
    }

}

module.exports = auth;
