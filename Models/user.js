const mongoose = require('mongoose');

//User Schema
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username:{
        type: String,
    unique: true,
    required: true,
    trim: true
    },
    password:{
        type: string,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);