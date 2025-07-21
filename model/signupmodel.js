const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    fullname: {
        type: String,

    },

    password:{
        type:String,
    },

    age:{
        type:Number,
    },

    email:{
        type:String,
    },

    phonenumber:{
        type:String,
    },

    role:{
        type:String,
    },

});

module.exports=mongoose.model('signup',signupSchema);
