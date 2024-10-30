const JobRoute = require('express').Router();

const { applyJob, getJobApplications } = require('../Controller/JobController');
const { upload } = require('../Middlewares/multerFileUpload');
const { jobValidation } = require('../Middlewares/formValidation');
const { auth } = require("../Middlewares/auth");

JobRoute.post('/job', upload, jobValidation, applyJob );
JobRoute.get('/getJobApplications', auth, getJobApplications );

module.exports = JobRoute;