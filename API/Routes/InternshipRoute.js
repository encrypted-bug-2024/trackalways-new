const InternshipRoute = require('express').Router();

const { applyInternship, getInternshipApplications } = require('../Controller/InternshipController');
const { upload } = require('../Middlewares/multerFileUpload');
const { internshipValidation } = require('../Middlewares/formValidation');
const { auth } = require("../Middlewares/auth");

InternshipRoute.post('/internship', upload, internshipValidation, applyInternship );
InternshipRoute.get('/getInternshipApplications', auth, getInternshipApplications );

module.exports = InternshipRoute;