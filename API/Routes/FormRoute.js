const FormRoute = require('express').Router();

const { applySubscription, submitContactUs, submitBookdemo, getSubscribeApplications, getContactApplications, getBookdemoApplications,  } = require('../Controller/FormController');
const { subscriptionValidation, contactusValidation, bookdemoValidation } = require('../Middlewares/formValidation');

FormRoute.post('/subscribe', subscriptionValidation, applySubscription );
FormRoute.post('/contact', contactusValidation, submitContactUs );
FormRoute.post('/bookdemo', bookdemoValidation, submitBookdemo );

FormRoute.get('/getSubscribeApplications', getSubscribeApplications );
FormRoute.get('/getContactApplications', getContactApplications );
FormRoute.get('/getBookdemoApplications', getBookdemoApplications );

module.exports = FormRoute;