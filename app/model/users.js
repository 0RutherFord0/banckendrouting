const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    profiles : {type: 'ObjectId', ref: 'Profile'},
    payment : {type: 'ObjectId', ref: 'Payment'},
    
    email : {
        type : 'string'
    },

    name : {
        type : 'string',
    },

    contact : {
        type : 'string',
    },

    date_renewal : {
        type : Date,
    }
        
});


const model = mongoose.model('User', UserSchema);
module.exports = model;