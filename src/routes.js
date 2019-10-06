const express = require("express");
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SoptController = require('./controllers/SpotController');
const DashborardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SoptController.index);
routes.post('/spots', upload.single('thumbnail'), SoptController.store);

routes.get('/dashboard', DashborardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);
 
module.exports = routes;
