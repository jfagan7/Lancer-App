const mongoose = require('mongoose');

//User Schema
const ClientSchema = mongoose.Schema({
    name:{
        type: string,
        required: true
    },
    email:{
        type: string,
        required: true
    },
    password:{
        type: string,
        required: true
    }
});

const Client = module.exports = mongoose.model('Client', ClientSchema);