const mongoose = require('mongoose')
const passortLocalMongoose=require('passport-local-mongoose');

const signupSchema = new mongoose.Schema({
    full_name: {
        type: String,
        trim: true
    },

    age: {
        type: Number,
        min: 0
    },
    email_address: {
        type: String,
        trim: true,
        lowercase: true
    },
    phone_number: {
        type: String,
        trim: true,
    },
    recommenders_nin: {
        type: String,
        trim: true
    },

    role: {
        type: String,
        required: true,
        enum: ['sales_rep', 'customer' ,'farmer','manager'],
        default: 'user'
    }
});

signupSchema.plugin(passortLocalMongoose,{
usernameField:'email_address'
})
module.exports=mongoose.model('signup',signupSchema);
