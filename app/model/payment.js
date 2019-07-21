const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    user : {type: 'ObjectId', ref: 'User'},

    payment_mode : {
        type: 'string',
        require : true,
    },
    
    date_of_payment : {
        type : 'string'
    },

    time_of_payment : {
        type : 'string',
    },

    card_number : {
        type : Number,
    },

    card_type : {
        type : 'string',
    }
        
});


const model = mongoose.model('Payment', PaymentSchema);
module.exports = model;