const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//we need to add more details here such as id, services between the users, descriptions, etc.. 
const AppointSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Appointment = mongoose.model('appointment', AppointSchema);
