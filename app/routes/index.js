const express = require('express');
const router = express.Router();


// Routes For User

router.get('/api/v1/users', require('../controllers/users/get-user'));
router.post('/api/v1/users', require('../controllers/users/create-user'));
// router.patch('/api/v1/users', require('../controllers/users/update-user'));
// router.delete('/api/v1/users', require('../controllers/users/delete-user'));


// // Router For Vendor

// router.get('/api/v1/vendors', require('../model/vendors'));
// router.post('/api/v1/vendors', require('../model/vendors'));
// router.patch('/api/v1/vendors', require('../model/vendors'));
// router.delete('/api/v1/vendors', require('../model/vendors'));

// // Routes For Profiles

// router.get('/api/v1/profiles', require('../model/profiles'));
// router.post('/api/v1/profiles', require('../model/profiles'));
// router.patch('/api/v1/profiles', require('../model/profiles'));
// router.delete('/api/v1/profiles', require('../model/profiles'));


// // Router For Movies

// router.get('/api/v1/movies', require('../model/movies'));
// router.post('/api/v1/movies', require('../model/movies'));
// router.patch('/api/v1/movies', require('../model/movies'));
// router.delete('/api/v1/movies', require('../model/movies'));

// // Routes For Payment

// router.get('/api/v1/payment', require('../model/payment'));
// router.post('/api/v1/payment', require('../model/payment'));
// router.patch('/api/v1/payment', require('../model/payment'));
// router.delete('/api/v1/payment', require('../model/payment'));


// // Router For Shows

// router.get('/api/v1/shows', require('../model/shows'));
// router.post('/api/v1/shows', require('../model/shows'));
// router.patch('/api/v1/shows', require('../model/shows'));
// router.delete('/api/v1/shows', require('../model/shows'));

module.exports = router;





