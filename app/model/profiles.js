const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user_id : {type: 'ObjectId', ref: 'User'},
    movies_id : {type: 'ObjectId', ref: 'Movies'},
    show_id : {type: 'ObjectId', ref: 'Shows'},

    profile_name : {
        type : 'string',
        require : true,
    },

    watchlist : [{
        type : 'ObjectId', ref: 'Movies'
    }]









});

const model = mongoose.model('Profile', ProfileSchema);
module.exports = model;