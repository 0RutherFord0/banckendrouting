const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    name : {
      type : 'string'
    },

    date_renewal : {
      type : Date,
    },

    date_start : {
      type : Date,
    },

    license : {
      type : 'string',
    },

    num_of_show : {
      type : Number,
    }, 

    num_movies : {
      type : Number,
    }
        
  });

const model = mongoose.model('Vendor', VendorSchema);
module.exports = model;
    