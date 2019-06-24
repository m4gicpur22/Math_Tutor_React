const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
//const items -> item schemas
//const users -> usr schemas
const config = require('config');

const app = express();

app.use(express.json());

const DB = config.get('mongoURI');
//body parsing and making sure DatBase is connected!
mongoose
    .connect(DB, { useNewUrlParser: true, useCreateIndex: true})
    .then( () => console.log("Database is connected!"))
    .catch( (err) => console.log(err))

//Setting up frontend routes

//connecting to heroku
if(process.env.NODE_ENV == 'production') {
    
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
    });
}

//ENV variables for connection
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Sever has started on port: ${port}`));