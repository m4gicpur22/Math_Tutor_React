const express = require('express');
const router = express.Router();
const config = require('config');
const User = require('../../Schemas/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../Middleware/Auth');

//Registration user routes
router.post('/', (req, res) => {

    const { name, username, email, password} = req.body;

    if( !name | !username | !email | !password ){
        return res.status(400).json({msg: "Please enter all information!"});
    }

    User.findOne({ username })
    .then( User => {
        if(User){
            return res.status(400).json({msg: "User exists in database!"});
        }
        //else

        //making a new user Schema to use in database
        const newUser = new User({
            name,
            username,
            email,
            password
        });

        //hash and add salt to paswords
        //bcrypt for salt and hash and jwt for encrypted tokens
        //catching error and creating new hash and salt for user
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                //else, we hash the password, and save newuser password in the module
                newUser.password = hash;
                newUser.save()
                .then(User => {
                    //callback for creation of new jwt token that we will sign and use
                    //gonna research up jwt documentation first for (header, payload, and signature)

                    //sigining the token and getting back the signature
                    //token will last for two hours for user
                    jwt.sign(
                        { id: User.id },
                        config.get('jwtSecret'),
                        { expiresIn: 6400 },
                        (err , token ) => {
                            if (err) throw err;
                            res.json({
                                token, 
                                user: {
                                    id: User.id,
                                    name: User.name,
                                    email: User.email
                            }
                        });
                    });
                });
            });
        });
    })
    .catch(
        console.log("Invalid value types!")
    );
});

module.exports = router;

