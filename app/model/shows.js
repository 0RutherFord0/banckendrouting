const mongoose = require('mongoose');

const ShowsSchema = new mongoose.Schema({
    profile : {type: 'ObjectId', ref: 'Profile'},
    vendor_id : {type: 'ObjectId', ref: 'Vendor'},

    
    language : {
        type : 'string',
        enum : ['hindi','english','marathi']
    },

    genre : {
        type : 'string',
        enum : ['romance','commendy','indian','family']
    },

    cast : {
        type : 'string',
    },

    number_of_episodes : {
        type : Number, //Number will be in secound
    },

    pause_at : {
        type : Number, //Number will be in secound
    }
        
});


const model = mongoose.model('Shows', ShowsSchema);
module.exports = model;