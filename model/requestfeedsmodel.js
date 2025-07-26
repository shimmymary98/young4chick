const mongoose = require('mongoose')

const requestfeedsSchema = new mongoose.Schema({
    full_name: {
        type: String,
        trim: true
    },
    chicksage: {
        type: String,
        enum: ['0-6 weeks','6 weeks-6 months','6 months-beyond']
    },
    
    phone_number: {
        type: String,
        trim: true,
    },
    kgs: {
        type: String,
        trim: true
    },

    role: {
        type: String,
        required: true,
        enum: ['returning farmer', 'starter farmer'],
    }
});

module.exports=mongoose.model('requestfeeds',requestfeedsSchema);



