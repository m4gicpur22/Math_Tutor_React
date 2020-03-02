const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const user = require('./Schemas/User');
const service = require('./Schemas/Service');
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
app.use('/Api/Users', require('./Routes/Api/User'));
app.use('/Api/Auth', require('./Routes/Api/Auth'));
//app.use('/Api/Service', require('./Routes/Api/Service'));

//connecting to heroku
if(process.env.NODE_ENV == 'production') {
    
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
    });
}

//ENV variables for connection, backend will start on the port 5000
//When we run npm run dev(included in our package.json script), our frontend will run on port 3000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server has started on port: ${port}`));