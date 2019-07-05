const express = require('express');
const user = require('../../Schemas/User');
const service = require('../../Schemas/Service');
const router = express.Router();

//service routes
//we want to make sure these routes can only be used by authenticated users, so we
//must apply auth middlware to our routes
//get our appointment details
router.get('/', (req, res) => {
    //we will want to display our appointment


});

//creating a new appointment
router.post('/', (req, res) => {
    //we will want to configure and create a new appointment


});

//deleting an appointment
router.delete('/', (req, res) => {
    //User has the option of deleting


});

module.exports = router;