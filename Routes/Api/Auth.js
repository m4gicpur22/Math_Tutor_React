const user = require('../../Schemas/User');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../Middleware/Auth');

//initlizaing post request for auth
router.post('/', (req, res) => {

    const {email , password } = req.body;

    if( !username | !email | !password )
        return res.status(400).json({ msg: "Please enter correct information "});

    user.findOne({ username })
    .then( user =>  {
        if(user)
            return res.status(400).json({msg: "User exists in database!"});

        //else

        bcrypt.compare(password, user.password)
        .then( isMatch => {
            if(!isMatch) //should send back a 403 here
                return res.status(401).json({ msg: "Please enter the right credentials!"});

            //else
            //getting back signed jwt token
            jwt.sign( { id: user.id }, config.get('jwtSecret'), { expiresIn: 6400 }, (err , token ) => {
                if (err) throw err;
                res.json({
                    token,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                });
            });
        });
    });
});


//get route to send back user data
router.get('/user', auth, (req, res) => {

    user.findById(req.user.id)
    .select('-password')
    .then( user => res.json(user)
    .catch( console.log("Could not find user ")) 
    );

});

module.exports = router;