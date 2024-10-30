const joi = require('joi');

const mobileNoValidation = (req, res, next) => {
  const schema = joi.object({
    user_mobile_no: joi.string()
      .length(10)
      .pattern(/^[6789]\d+$/)
      .required()
      .error(new Error('Please enter a valid mobile number.'))
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};












const userDetailsValidation = (req, res, next) => {
  const schema = joi.object().keys({
    user_email_id: joi.string().required(),
    user_first_name: joi.string().min(3).max(100).required(),
    user_last_name: joi.string().min(3).max(100).required(),
    user_mobile_no: joi.string().length(10).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
};



const memberDetailsValidation = (req, res, next) => {
  const schema = joi.object({
    app_user_id: joi.number().min(1).required(),
    member_first_name: joi.string().min(3).max(100).required(),
    member_last_name: joi.string().min(3).max(100).required(),
    member_dob: joi.string().required(),
    member_gender: joi.string().required(),
    member_height: joi.number().required(),
    member_weight: joi.number().required(),
    member_mobile_no: joi.string().length(10).required(),
    member_relation: joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
};

const healthTestGroupMasterValidation = (req, res, next) => {
  const schema = joi.object({
    htgm_name: joi.string().required(),
    htgm_description: joi.string().required(),
    htgm_test_count: joi.number().required(),
    htgm_vital_category: joi.number().required(),
    htgm_icon: joi.string(),
    created_by: joi.string().required()
  })

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

const configValidation = (req, res, next) => {
  const schema = joi.object({
    category: joi.string().required(),
    sub_category: joi.string().required(),
    value: joi.string().required(),
    icon: joi.string().required(),
    description: joi.string().required(),
    alias: joi.string(),
    created_by: joi.string()
  })

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}


const vitalValidation = (req,res,next) => {
  const schema =joi.object({
    memberId: joi.number().integer().required(),
    recordedDate: joi.date().iso().required(),
    htgmId: joi.number().integer().required(),
    testStatus: joi.string().required(),
    remarks: joi.string().max(255).allow(''),
    vitalTests: joi.array().items(joi.object({
      testId: joi.number().integer().required(),
      testValue: joi.string().max(255).required(),
      testStatus: joi.string().valid('Pending', 'Completed', 'Failed').required(),
      testRemarks: joi.string().max(255).allow(''),
    })).required(),



  })

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }

}


module.exports = {
  mobileNoValidation,
  userDetailsValidation,
  memberDetailsValidation,
  healthTestGroupMasterValidation, configValidation,vitalValidation
};