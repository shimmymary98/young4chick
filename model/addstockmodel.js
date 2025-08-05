const mongoose = require('mongoose')

const addstockSchema = new mongoose.Schema({
    breed: {
        type: String,
        trim: true
    },
    quantity: {
        type: String,
    },
    
    arrivaldate: {
        type: String,
        trim: true,
    },

    supplier: {
        type: String,
        required: true,
    }
});

module.exports=mongoose.model('addstock',addstockSchema);




