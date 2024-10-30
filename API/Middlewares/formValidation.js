const { check, body } = require('express-validator');

exports.jobValidation = [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().normalizeEmail({ gmail_remove_dots: true }).withMessage('Please include a valid email'),
    check('mobile', 'Mobile number can only be digits').isNumeric().isLength({ min: 10, max: 10 }).withMessage('Mobile number should contain 10 digits'),
    check('job_profile').not().isEmpty().withMessage('Job profile is required'),
    check('message').optional().isLength({ max: 100 }).withMessage('Message must not exceed 100 characters'),
    check('resume').custom((value, { req }) => {
        // console.log("printing req in validation", req.files.resume);
        if (req.files && req.files.resume && req.files.resume[0].mimetype === 'application/pdf') {
            return true;
        } else {
            return false;
        }
    }).withMessage('Please upload a PDF document'),
    body().custom((value, { req }) => {
        const allowedFields = ['name', 'email', 'mobile', 'job_profile', 'message'];
        const receivedFields = Object.keys(req.body);
        const invalidFields = receivedFields.filter(field => !allowedFields.includes(field));
        if (invalidFields.length > 0) {
            throw new Error(`Invalid field(s): ${invalidFields.join(', ')}`);
        }
        return true;
    }),
    body().custom((value, { req }) => {
        const allowedFiles = ['resume'];
        if (req.files) {
            const receivedFiles = Object.keys(req.files);
            const invalidFiles = receivedFiles.filter(file => !allowedFiles.includes(file));
            if (invalidFiles.length > 0) {
                throw new Error(`Invalid file(s): ${invalidFiles.join(', ')}`);
            }
        }
        return true;
    })
];

exports.internshipValidation = [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().normalizeEmail({ gmail_remove_dots: true }).withMessage('Please include a valid email'),
    check('mobile', 'Mobile number can only be digits').isNumeric().isLength({ min: 10, max: 10 }).withMessage('Mobile number should contain 10 digits'),
    check('college_name').not().isEmpty().withMessage('College name is required'),
    check('course').not().isEmpty().withMessage('Course is required'),
    check('batch').isNumeric().withMessage('Batch can only be digits').isLength({ min: 4, max: 10 }).withMessage('Batch should contain 4 digits'),
    check('specialization').not().isEmpty().withMessage('Specialization is required'),
    check('message').optional().isLength({ max: 100 }).withMessage('Message must not exceed 100 characters'),
    check('resume').custom((value, { req }) => {
        // console.log("printing req in validation", req.files.resume);
        if (req.files && req.files.resume && req.files.resume[0].mimetype === 'application/pdf') {
            return true;
        } else {
            return false;
        }
    }).withMessage('Please upload a PDF document'),
    body().custom((value, { req }) => {
        const allowedFields = ['name', 'email', 'mobile', 'college_name', 'course', 'batch', 'specialization', 'message'];
        const receivedFields = Object.keys(req.body);
        const invalidFields = receivedFields.filter(field => !allowedFields.includes(field));
        if (invalidFields.length > 0) {
            throw new Error(`Invalid field(s): ${invalidFields.join(', ')}`);
        }
        return true;
    }),
    body().custom((value, { req }) => {
        const allowedFiles = ['resume'];
        if (req.files) {
            const receivedFiles = Object.keys(req.files);
            const invalidFiles = receivedFiles.filter(file => !allowedFiles.includes(file));
            if (invalidFiles.length > 0) {
                throw new Error(`Invalid file(s): ${invalidFiles.join(', ')}`);
            }
        }
        return true;
    })
];

exports.subscriptionValidation = [
    check('email').isEmail().normalizeEmail({ gmail_remove_dots: true }).withMessage('Please include a valid email'),
    body().custom((value, { req }) => {
        const allowedFields = ['email'];
        const receivedFields = Object.keys(req.body);
        const invalidFields = receivedFields.filter(field => !allowedFields.includes(field));
        if (invalidFields.length > 0) {
            throw new Error(`Invalid field(s): ${invalidFields.join(', ')}`);
        }
        return true;
    }),
    body().custom((value, { req }) => {
        if (req.files) {
            throw new Error(`Invalid file(s): ${invalidFiles.join(', ')}`);
        }
        return true;
    })
];

exports.contactusValidation = [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().normalizeEmail({ gmail_remove_dots: true }).withMessage('Please include a valid email'),
    check('mobile').isNumeric().withMessage('Mobile number can only be digits')
                    .isLength({ min: 10, max: 10 }).withMessage('Mobile number should contain 10 digits'),
    check('subject').not().isEmpty().withMessage('Subject is required'),
    check('message').optional().isLength({ max: 100 }).withMessage('Message must not exceed 100 characters'),
    body().custom((value, { req }) => {
        const allowedFields = ['name', 'email', 'mobile', 'subject', 'message'];
        const receivedFields = Object.keys(req.body);
        const invalidFields = receivedFields.filter(field => !allowedFields.includes(field));
        if (invalidFields.length > 0) {
            throw new Error(`Invalid field(s): ${invalidFields.join(', ')}`);
        }
        return true;
    }),
    body().custom((value, { req }) => {
        if (req.files) {
            throw new Error('File uploads are not allowed');
        }
        return true;
    })
];

exports.bookdemoValidation = [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().normalizeEmail({ gmail_remove_dots: true }).withMessage('Please include a valid email'),
    check('mobile').isNumeric().withMessage('Mobile number can only be digits')
                    .isLength({ min: 10, max: 10 }).withMessage('Mobile number should contain 10 digits'),
    check('company').not().isEmpty().withMessage('Company is required'),
    check('message').optional().isLength({ max: 100 }).withMessage('Message must not exceed 100 characters'),
    body().custom((value, { req }) => {
        const allowedFields = ['name', 'email', 'mobile', 'company', 'message'];
        const receivedFields = Object.keys(req.body);
        const invalidFields = receivedFields.filter(field => !allowedFields.includes(field));
        if (invalidFields.length > 0) {
            throw new Error(`Invalid field(s): ${invalidFields.join(', ')}`);
        }
        return true;
    }),
    body().custom((value, { req }) => {
        if (req.files) {
            throw new Error('File uploads are not allowed');
        }
        return true;
    })
];