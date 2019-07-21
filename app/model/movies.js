const mongoose = require('mongoose');

const MoviesSchema = new mongoose.Schema({
    profiles : {type: 'ObjectId', ref: 'profile'},
    vendors : {type: 'ObjectId', ref: 'vendors'},
    
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

    duration : {
        type : Number, //Number will be in secound
    },

    pause_at : {
        type : Number, //Number will be in secound
    }
        
});

const model = mongoose.model('Movies', MoviesSchema);
module.exports = model;







