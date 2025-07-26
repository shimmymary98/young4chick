const mongoose = require('mongoose')

const requestchicksSchema = new mongoose.Schema({
    full_name: {
        type: String,
        trim: true
    },
    chicksage: {
        type: String,
        enum: ['0-6 weeks', '6 weeks-6months ','6months-beyond']
    },
    
    phone_number: {
        type: String,
        trim: true,
    },

    chicktype: {
        type: String,
        required: true,
        enum: ['local exotic', 'local brolier'],
    }
});

module.exports=mongoose.model('requestchicks',requestchicksSchema);




